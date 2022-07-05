import { useEffect, useState } from "react";
import { dbRealtime as db } from "../../firebase";
import { onValue, set, ref } from "firebase/database";
import useIsMounted from "./use-is-mounted";
//
export const localId = (id) => `yxgfnyzciku.${id}`;
//@@
const useSocialLike = (id) => {
  //
  const LIKECACHE = localId(id);
  const isMounted = useIsMounted();
  //
  const [likeCount, setLikeCount] = useState(0);
  const itemRefLike = ref(db, `like/${id}`);

  useEffect(
    () =>
      onValue(itemRefLike, (snapshot) =>
        setLikeCount((old_) => snapshot.val() ?? old_)
      ),
    []
  );

  return { like, likeCount };

  function like() {
    if (!isMounted) return;

    if (null != localStorage.getItem(LIKECACHE)) return unlike_();

    localStorage.setItem(LIKECACHE, 1);
    set(itemRefLike, likeCount + 1);
  }

  function unlike_() {
    localStorage.removeItem(LIKECACHE);
    set(itemRefLike, likeCount - 1);
  }
};

export default useSocialLike;
