import { useEffect } from "react";
import useIsMounted from "./use-is-mounted";
//
const useClickAway = (ref, handle, isActive$ = true) => {
  const m$ = useIsMounted();
  const document_ = ref?.current?.ownerDocument;
  //
  const handle_ = (evt) =>
    ref?.current && !ref.current.contains(evt.target) && handle(evt);
  //
  const cleanup = () => document_ && document_.removeEventListener("click", handle_);
  //
  useEffect(() => {
    isActive$ && m$ && document_ && document_.addEventListener("click", handle_);
    return cleanup;
  }, [m$, document_, isActive$]);
  //
  return cleanup;
};

export default useClickAway;
