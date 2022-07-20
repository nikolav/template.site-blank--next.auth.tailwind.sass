import React from "react";
import { motion } from "framer-motion";
import modcss from "./DarkModeToggle.module.css";
import { useStateSwitch } from "../../src/hooks";
import { useColorMode } from "../../app/store";
//
// @todo:
//   paths sun/mon to display @toggle
const DarkModeToggle = ({
  //
  width = 42,
  //
  height = 24,
  //
  padding = 1,
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
      {/*  */}
      {/* sun */}
      <g
        style={{
          transform: "translate(2px, 3.45px) scale(.72)",
        }}
      >
        <path
          fill="white"
          fillOpacity={0.45}
          className={modcss.modeIconSun}
          d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"
        />
      </g>
      {/*  */}
      {/* moon */}
      <g
        style={{
          transform: `translate(${
            width - 2 * r - padding + 3
          }px, 3px) scale(.75)`,
        }}
      >
        <path
          fillOpacity={0.16}
          className={modcss.modeIconMoon}
          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        ></path>
      </g>

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
