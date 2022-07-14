import { useRef, createContext, useContext } from "react";
import { eventListener } from "../util";

export const AppEventsContext = createContext();
const useAppEvents = () => useContext(AppEventsContext);

export const AppEventsProvider = ({children}) => {
  const e = useRef(eventListener()).current;
  //
  return (
    <AppEventsContext.Provider
      value={{
        on: e.addEventListener,
        off: e.removeEventListener,
        fire: e.triggerEvent,
      }}
    >
      {children}
    </AppEventsContext.Provider>
  );
};

export default useAppEvents;
