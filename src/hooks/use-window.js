import { useEffect, useState } from "react";

/*

useWindowAddEvents({
    e: `e`,
    run: <func>,
})
*/

// schedule callback to run in window .env
// take additionl flag to handle component window init @mount
//   e: string.event-name; 
//   run: (evt: Event) => any; evt-handler
//   isActive: boolean; schedule @active
export const useWindowAddEvents = (e, run, isActive$ = true) => {
  const w$ = useWindow();
  const cleanup = () => w$ && w$.removeEventListener(e, run);
  //
  useEffect(() => {
    isActive$ && w$ && w$.addEventListener(e, run);
    //
    return cleanup;
  }, [w$, isActive$]);
  //
  return cleanup;
};
//
export const useWindow = () => {
  const [w$, setW] = useState(null);
  const isWindow = "undefined" !== typeof window;
  //
  useEffect(() => {
    isWindow && setW(window);
  }, [isWindow]);
  //
  return w$;
};

