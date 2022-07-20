import React from "react";
import { motion } from "framer-motion";
import modcss from "./DarkModeToggle.module.css";
import { useStateSwitch } from "../../src/hooks";
import { useColorMode } from "../../app/store";
//
const DarkModeToggle = ({
  //
  width = 42,
  //
  height = 24,
  //
  padding = 2,
  //
  color = "steelblue",
  //
  bg = "lightgray",
  //
  duration = 122,
  //
  className = "",
  //
  ...rest
}) => {
  //
  const c$ = useColorMode();
  const isDark$ = c$.isDark();
  const r = (height - 2 * padding) / 2;
  const x1$ = padding + r;
  const x2$ = width - padding - r;
  const y = height / 2;
  //
  const cx$ = {
    false: x1$,
    true: x2$,
  };
  //
  const { isActive: isCanvasHover, toggle: canvasHover } = useStateSwitch();
  const { isActive: isTrackHover, toggle: trackHover } = useStateSwitch();
  const { isActive: isThumbHover, toggle: thumbHover } = useStateSwitch();
  const { isActive: isThumbActive, toggle: thumbActive } = useStateSwitch();
  //
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`${modcss.modeCanvas} ${className} ${
        isCanvasHover ? modcss.modeCanvasHover : ""
      } ${isDark$ ? modcss.modeCanvasDark : ""}`}
      onClick={c$.toggleColorMode}
      onMouseOver={canvasHover.on}
      onMouseLeave={canvasHover.off}
      width={width}
      height={height}
    >
      <line
        x1={x1$}
        y1={y}
        x2={x2$}
        y2={y}
        stroke={bg}
        strokeWidth={height}
        strokeLinecap="round"
        className={`${modcss.modeTrack} ${
          isDark$ ? modcss.modeTrackDark : ""
        } ${isTrackHover ? modcss.modeTrackHover : ""}`}
        onMouseOver={trackHover.on}
        onMouseLeave={trackHover.off}
      />
      <motion.circle
        className={`${modcss.modeThumb} ${
          isThumbHover ? modcss.modeThumbHover : ""
        } ${isThumbActive ? modcss.modeThumbActive : ""} ${
          isDark$ ? modcss.modeThumbDark : ""
        }`}
        onMouseOver={thumbHover.on}
        onMouseLeave={thumbHover.off}
        onMouseDown={thumbActive.on}
        onMouseUp={thumbActive.off}
        fill={color}
        r={r}
        cy={y}
        //
        animate={{
          cx: cx$[isDark$],
          transition: { type: "spring", duration: duration / 1000 },
        }}
        {...rest}
      />
    </svg>
  );
};

export default DarkModeToggle;
