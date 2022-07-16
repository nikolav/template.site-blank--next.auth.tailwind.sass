import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      x1: `${50 - value}%`,
      x2: `${50 + value}%`,
    };
  },
  right: (value) => ({
    x1: `${100 - clamp(value, 0, 100)}%`,
    x2: "100%",
  }),
};
////
////
const AnimateLine = ({
  //
  //
  isActive = true,
  //
  // [0..100]
  value = 12,
  //
  // left|center|right
  origin = defaultOrigin,
  //
  height = 4,
  //
  width = "100%",
  //
  color = "currentcolor",
  //
  bg = "lightgray",
  //
  duration = 678,
  //
  round = false,
  //
  // svg props
  ...rest
}) => {
  //
  const transition = {
    duration: parseFloat(duration) / 1000,
    ease: "easeOut",
  };
  if (!has(coords, origin)) origin = defaultOrigin;
  //
  const [toValue, setToValue] = useState();
  useEffect(() => {
    isActive && setToValue(value);
  }, [value]);
  //
  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.svg
          key="indicator.uyvihfltttc"
          initial={{ opacity: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.12 } }}
          animate={{ opacity: 1, transition: { duration: 0.23 } }}
          style={{
            backgroundColor: bg,
            height,
            margin: 0,
            padding: 0,
            width,
          }}
        >
          <motion.line
            y1="50%"
            y2="50%"
            initial={false}
            animate={{
              ...coords[origin](toValue),
              transition,
            }}
            stroke={color}
            strokeWidth={height}
            strokeLinecap={true === round ? "round" : "butt"}
            {...rest}
          />
        </motion.svg>
      )}
    </AnimatePresence>
  );
};

export default AnimateLine;
