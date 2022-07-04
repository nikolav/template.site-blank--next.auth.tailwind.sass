import { useEffect, useState } from "react";
import { dbRealtime as db } from "../../app/firebase";
import { onValue, set, ref, push, remove } from "firebase/database";
import { sortByTimestampDesc, paste } from "../util";
//
export const localId = (id) => `jqimqtyiwma.${id}`;
export const CREATED_AT = "_@";
//@@@
export const useSocialComments = (entityId) => {
  //
  const dbPath = `comments/${entityId}`;
  const itemRefComments = ref(db, dbPath);
  //
  const [commentsDB, setCommentsDB] = useState({});
  //
  const comments = paste(() => commentsDB, {
    // { uid: ID, user: string, comment: string }
    add: (comment = {}) => {
      const refNewPost = push(itemRefComments);
      set(refNewPost, {
        key: refNewPost.key,
        [CREATED_AT]: Date.now(),
        ...comment,
      });
    },
    //
    rm: (key) =>
      remove(ref(db, `${dbPath}/${key}`)).then(
        (_) => 1 === Object.keys(commentsDB).length && setCommentsDB({})
      ),
    //
    ls: () =>
      Object.keys(commentsDB)
        .map((key) => commentsDB[key])
        .sort(sortByTimestampDesc(CREATED_AT)),
    //
    len: () => Object.keys(commentsDB).length,
  });
  //
  useEffect(
    () =>
      onValue(itemRefComments, (snapshot) =>
        setCommentsDB((current) => snapshot.val() ?? current)
      ),
    []
  );
  //
  return comments;
  //
};
