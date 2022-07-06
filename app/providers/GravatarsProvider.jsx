import { useState, useEffect, createContext, useContext } from "react";
import { dbRealtime as db } from "../../firebase";
import { ref, onValue } from "firebase/database";
//
export const GravatarsContext = createContext();
export const useGravatars = () => useContext(GravatarsContext);
//
export default function GravatarsProvider({ children }) {
  const [gravatarsDB, setGravatarsDB] = useState({});
  const refG = ref(db, "gravatar");
  //
  useEffect(
    () =>
      onValue(refG, (res) => {
        setGravatarsDB(res.val() || {});
      }),
    []
  );
  //
  return (
    <GravatarsContext.Provider value={gravatarsDB}>
      {children}
    </GravatarsContext.Provider>
  );
}
