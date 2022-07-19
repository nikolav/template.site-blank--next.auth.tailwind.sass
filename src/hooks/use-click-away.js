import { useEffect } from "react";
import useIsMounted from "./use-is-mounted";

const useClickAway = ({ ref, handle }) => {
  const m = useIsMounted();
  const document_ = ref?.current?.ownerDocument;
  const handle_ = (evt) =>
    ref?.current && !ref.current.contains(evt.target) && handle(evt);
  //
  useEffect(() => {
    if (m && document_) {
      document_.addEventListener("click", handle_);
      return () => document_.removeEventListener("click", handle_);
    }
  }, [m, document_]);
};

export default useClickAway;
