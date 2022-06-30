import React, { useRef, useEffect } from "react";
import PortalOverlays from "../PortalOverlays";
import { motion, AnimatePresence } from "framer-motion";
import { useFlags, FLAG_BLOKUI } from "../../app/store";
////
////
const BlockUI = ({ className = "", children }) => {
  const flags = useFlags();
  const isActive = true === flags(FLAG_BLOKUI);
  const refBlocked = useRef();
  useEffect(() => {
    if (isActive) refBlocked.current.focus();
  }, [isActive]);
  //
  return (
    <PortalOverlays end={true}>
      <AnimatePresence>
        {true === isActive ? (
          <section
            ref={refBlocked}
            style={{ zIndex: 9999 }}
            className={`m-0 p-0 bg-white/10 backdrop-blur-sm flex items-center justify-center fixed inset-0 ${className}`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.2 } }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
            >
              {children ?? <strong className="text-5xl inline-block blockuiSpinner">⏳</strong>}
            </motion.div>
          </section>
        ) : null}
      </AnimatePresence>
    </PortalOverlays>
  );
};

export default BlockUI;
