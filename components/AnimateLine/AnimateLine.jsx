import React from "react";
import { motion } from "framer-motion";
import { clamp, has } from "../../src/util";

//
const defaultOrigin = "left";
const coords = {
  left: (value) => ({
    x1: 0,
    x2: `${clamp(value, 0, 100)}%`,
  }),
  center: (value) => {
    value = clamp(value, 0, 100) / 2;
    return {
      x1: `calc(50% - ${value}%)`,
      x2: `calc(50% + ${value}%)`,
    };
  },
  right: (value) => ({
    x1: `calc(100% - ${clamp(value, 0, 100)}%)`,
    x2: "100%",
  }),
};
////
////
const AnimateLine = ({
  //
  // [0..100]
  value = 50,
  //
  // left|center|right
  origin = defaultOrigin,
  //
  height = 12,
  //
  width = "100%",
  //
  // default background color
  bg = "lightgray",
  // 
  // rest svg props
  ...rest
}) => {
  if (!has(coords, origin)) origin = defaultOrigin;
  //
  return (
    <svg
      style={{
        backgroundColor: bg,
        height,
        margin: 0,
        padding: 0,
        display: "inline-block",
        width,
      }}
    >
      <motion.line
        y1="50%"
        y2="50%"
        initial={false}
        animate={coords[origin](value)}
        stroke="currentcolor"
        strokeWidth={height}
        {...rest}
      />
    </svg>
  );
};

export default AnimateLine;
