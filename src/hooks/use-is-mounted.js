import React, { useEffect } from "react";
import useStateSwitch from "./use-state-switch";
//
export default function useIsMounted() {
  const isWindow = "undefined" !== typeof window;
  const { isActive: isMounted, toggle: toggleMounted } = useStateSwitch();
  useEffect(() => {
    toggleMounted.on();
    return toggleMounted.off;
  }, []);
  //
  return isWindow && isMounted;
}
