import { useEffect, useRef, useState } from "react";
import { motion, transform, AnimatePresence } from "framer-motion";
import { noop, clamp } from "../../src/util";
import { useStateSwitch } from "../../src/hooks";
import modcss from "./Slider.module.css";
//
//  @demo; https://codesandbox.io/s/bold-hill-stmnwk?file=/src/App.js
const Slider = ({
  //
  value = 0,
  // clamp input to values
  values = [0, 1],
  // horiz. size
  size = 512,
  // thumb radius
  r = 24,
  // track widht
  width = 12,
  // track rounded
  rounded = true,
  // thumb color
  color = "currentcolor",
  // track color
  bg = "lightgray",
  // transition duration
  duration = 567,
  // spring | tween
  animation = "tween",
  // @value
  onChange = noop,
  // flash brief indicator @value
  flash = true,
  //
  flashOpacity = 0.51,
  // add classes to <svg>
  className = "",
  // <circle> svg props
  ...rest
}) => {
  //
  const value_ = clamp(value, ...values);
  // track input value
  const [v, setV] = useState(value_);
  // set @value to animate flash to-from
  const [pos, setPos] = useState([]);
  // signal flash presence
  const { isActive: isFlash, toggle: toggleIsFlash } = useStateSwitch(false);
  const { isActive: isThumbHover, toggle: thumbHover } = useStateSwitch(false);
  const { isActive: isThumbDrag, toggle: thumbDrag } = useStateSwitch(false);
  const { isActive: isTrackHover, toggle: trackHover } = useStateSwitch(false);
  const { isActive: isTrackActive, toggle: trackActive } =
    useStateSwitch(false);
  //
  const refSliderSvg = useRef();
  const refCircle = useRef();
  //
  const sizeHalf = size / 2;
  const height = Math.max(2 * r, width);
  const heightHalf = height / 2;
  const x1Offset = rounded ? Math.max(r, heightHalf) : r;
  const handleOffsetRight = sizeHalf - x1Offset;
  const handleOffsetLeft = -handleOffsetRight;
  const Xviewport = [x1Offset, size - x1Offset];
  //
  const t_vx = transform(values, [handleOffsetLeft, handleOffsetRight]);
  // const t_xv = transform([handleOffsetLeft, handleOffsetRight], values);
  const t_client_v = transform(Xviewport, values);
  const t_v_client = transform(values, Xviewport);
  //
  // @click.bg
  const clientXToStateValue = (evt) => {
    // calculate value @click.bg
    // based on canvas.x
    const newPos = clamp(
      evt.clientX - refSliderSvg.current.getBoundingClientRect().left,
      ...Xviewport
    );
    //
    setV(t_client_v(newPos));
  };
  //
  const animationType =
    "spring" !== animation
      ? { type: "tween", ease: "easeOut" }
      : { type: "spring" };
  //
  // @init
  useEffect(() => {
    setV(value_);
  }, [value_, values]);
  //
  useEffect(() => {
    //
    // update flash positions
    // rm.old, add.new
    flash && setPos((pos) => [pos[1], t_v_client(v)]);
    //
    // run provided callback
    onChange(v);
  }, [v]);
  //
  useEffect(() => {
    if (null != pos[0] && null != pos[1]) toggleIsFlash.on();
  }, [pos]);
  ////
  /////
  return (
    <svg
      ref={refSliderSvg}
      viewBox={`0 0 ${size} ${height}`}
      className={`${modcss.sliderCanvas} ${className}`}
      height={height}
      width={size}
      {...rest}
    >
      {/*  */}
      {/* bg */}
      <line
        stroke={bg}
        strokeLinecap={rounded ? "round" : "butt"}
        strokeWidth={width}
        x1={x1Offset}
        x2={size - x1Offset}
        y1={heightHalf}
        y2={heightHalf}
        onClick={clientXToStateValue}
        onMouseOver={trackHover.on}
        onMouseLeave={trackHover.off}
        onMouseDown={trackActive.on}
        onMouseUp={trackActive.off}
        className={`${modcss.sliderTrack} ${
          isTrackHover ? modcss.trackHover : ""
        } ${isTrackActive ? modcss.trackActive : ""}`}
      />
      {/*  */}
      <AnimatePresence initial={false}>
        {flash && isFlash && (
          <motion.line
            key="Slider.xvoptwhnbqc"
            stroke={color}
            strokeWidth={width}
            x1={pos[0] ?? 0}
            x2={pos[1] ?? 0}
            y1={heightHalf}
            y2={heightHalf}
            className={modcss.sliderTrackFlash}
            initial={{ opacity: flashOpacity }}
            animate={{
              x1: pos[1] ?? 0,
              opacity: 0,
              transition: {
                ...animationType,
                duration: duration / 1000 / 1.23,
              },
            }}
            onAnimationComplete={toggleIsFlash.off}
            //   exit={}
          />
        )}
      </AnimatePresence>
      {/*  */}
      <motion.circle
        ref={refCircle}
        dragConstraints={{
          left: handleOffsetLeft,
          right: handleOffsetRight,
        }}
        dragMomentum={0}
        dragElastic={0}
        drag="x"
        cx={sizeHalf}
        cy={heightHalf}
        r={r}
        fill={color}
        className={`${modcss.sliderThumb} ${
          isThumbHover ? modcss.thumbHover : ""
        } ${isThumbDrag ? modcss.thumbDrag : ""}`}
        onMouseOver={thumbHover.on}
        onMouseLeave={thumbHover.off}
        onDragEnd={() => {
          const sliderLeft = refSliderSvg.current.getBoundingClientRect().left;
          const { left } = refCircle.current.getBoundingClientRect();
          //
          const newPos = Math.round(left - sliderLeft + r);
          //
          setV(t_client_v(newPos));
          thumbDrag.off();
        }}
        // prevent flash @drag
        // reset flash positions
        onDragStart={() => {
          flash && setPos([]);
          //
          thumbDrag.on();
          thumbHover.off();
        }}
        //
        // @init
        initial={{ x: t_vx(value_) }}
        //
        // default animate @value; easeOut.quick
        animate={{
          x: t_vx(v),
          transition: {
            ...animationType,
            duration: duration / 1000,
          },
        }}
        {...rest}
      />
    </svg>
  );
};

export default Slider;
