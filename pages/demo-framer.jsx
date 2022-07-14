import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  AnimateSharedLayout,
  useViewportScroll,
  useTransform,
  useMotionValue,
  animate,
} from "framer-motion";
import Effect from "../components/Effect/Effect";
import { useStateSwitch } from "../src/hooks";
import DrawerDrag from "../components/DrawerDrag/DrawerDrag";
//
const DemoFramerMotion = () => {
  const { isActive, toggle } = useStateSwitch();
  const { isActive: isActive_d, toggle: toggle_d } = useStateSwitch();
  //
  return (
    <div>
      
      <button onClick={toggle_d.on} className="p-4 bg-slate-500 text-white">
        open
      </button>
      <DrawerDrag isActive={isActive_d} onClose={toggle_d.off}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          assumenda, esse aut suscipit dolorem saepe voluptatibus fugiat ratione
          nulla ea voluptas ducimus a, facere, vero explicabo? Sed vero quam
          neque.
        </p>
      </DrawerDrag>
      <AnimateSharedLayout>
        <motion.div
          layoutId="header.1"
          onClick={toggle.on}
          className="bg-gray-500 hover:bg-gray-600 group cursor-pointer py-2 px-5 flex items-center justify-center"
          initial={{ borderRadius: 24 }}
        >
          <motion.span
            className="text-white/80 group-hover:text-white inline-block"
            layoutId="header.text"
          >
            login
          </motion.span>
        </motion.div>
        <AnimatePresence>
          {isActive && (
            <motion.div
              layoutId="header.1"
              exit={{ borderRadius: 0 }}
              className="fixed inset-0 p-4 bg-slate-800 z-10"
            >
              <div className="flex items-center justify-center">
                <motion.strong
                  animate={{ y: 24, scale: 2.22 }}
                  className="text-white inline-block"
                  layoutId="header.text"
                  onClick={toggle.off}
                >
                  login
                </motion.strong>{" "}
              </div>
              <motion.div
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
              >
                <p className="mt-32 text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laudantium eveniet reiciendis id saepe molestiae officia!
                  Labore, quia enim soluta quo veniam dicta rerum recusandae
                  minima nisi autem minus consectetur expedita?
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
};

export default DemoFramerMotion;
