import { useEffect, useState, createContext, useContext } from "react";
import ready from "../util/ready";

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
//
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
export const WindowDocumentContext = createContext();
export const useWindowDocument = () => useContext(WindowDocumentContext);

export const WindowDocumentProvider = ({ children }) => {
  const w$ = useWindow();
  const [doc$, setDoc] = useState(null);
  const [isReady$, setIsReady] = useState(null);

  useEffect(() => {
    if (w$ && w$?.document) {
      setDoc(w$.document);
      ready(w$, w$.document)(() => setIsReady(true));
    }
  }, [w$, w$?.document]);

  const g = {
    window: w$,
    document: doc$,
    isReady: isReady$,
  };

  return (
    <WindowDocumentContext.Provider value={g}>
      {children}
    </WindowDocumentContext.Provider>
  );
};
