import { createContext, useContext, useState, useEffect } from "react";
import useIsMounted from "./use-is-mounted";
import factoryJQuery from "../jquery/factory";
//
export const JQueryContext = createContext();
export const useJQuery = () => useContext(JQueryContext);

export const JQueryProvider = ({ children }) => {
  const isMounted = useIsMounted();
  const [jquery, setJQuery] = useState({ jQuery: null });

  useEffect(() => {
    if (isMounted) {
      setJQuery({ jQuery: factoryJQuery(new Function("return this")()) });
    }
  }, [isMounted]);

  return (
    <JQueryContext.Provider value={jquery.jQuery}>
      {children}
    </JQueryContext.Provider>
  );
};
