import { createContext, useContext, useState, useEffect } from "react";
import factoryJQuery from "../jquery/factory";
import { useWindow } from "./use-window";
//
export const JQueryContext = createContext();
export const useJQuery = () => useContext(JQueryContext);
//
export const JQueryProvider = ({ children }) => {
  const w$ = useWindow();
  const [jquery, setJQuery] = useState({ jQuery: null });
  //
  useEffect(() => {
    w$ && setJQuery({ jQuery: factoryJQuery(w$) });
  }, [w$]);
  //
  return <JQueryContext.Provider value={jquery.jQuery}>{children}</JQueryContext.Provider>;
};
