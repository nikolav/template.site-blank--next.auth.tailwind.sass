import { createContext, useContext, useState, useEffect } from "react";
import factoryJQuery from "../jquery/factory";
import useStateSwitch from "./use-state-switch";
import { useWindow } from "./use-window";
//
export const JQueryContext = createContext();
export const useJQuery = () => useContext(JQueryContext);
//
export const JQueryProvider = ({ children }) => {
  const w$ = useWindow();
  const [jquery, setJQuery] = useState({ jQuery: null });
  const { isActive: isReady, toggle: toggleIsReady } = useStateSwitch();
  //
  useEffect(() => {
    w$ && setJQuery({ jQuery: factoryJQuery(w$) });
  }, [w$]);
  //
  useEffect(() => {
    jquery.jQuery && jquery.jQuery(toggleIsReady.on);
  }, [jquery.jQuery]);
  //
  const jq = {
    jQuery: jquery.jQuery,
    ready: isReady,
  };
  //
  return <JQueryContext.Provider value={jq}>{children}</JQueryContext.Provider>;
};
