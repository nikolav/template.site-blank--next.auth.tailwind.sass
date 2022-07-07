import { useEffect, useState } from "react";
import useIsMounted from "./use-is-mounted";
import { paste } from "../util";
//
export const DEFAULT_STORAGE_NAME = ".APPDATA.kcnzwxtuwqn";
//
export default function useLocalStorage(name = DEFAULT_STORAGE_NAME) {
  const isMounted = useIsMounted();
  //
  const [value, setValue] = useState(() =>
    isMounted ? localStorage.getItem(name) : null
  );
  const handle = paste(
    (...args) => (args.length ? setValue_(name, ...args) : value),
    {
      clear: () => setValue_(name, null),
    }
  );
  //
  useEffect(() => {
    if (isMounted) setValue_(name, value);
  }, [name, value]);
  useEffect(() => {
    if (isMounted) setValue(localStorage.getItem(name));
  }, [isMounted]);
  //
  //
  return handle;
  //
  function setValue_(name, value) {
    localStorage.setItem(name, value);
    setValue(value);
  }
}
