import q from "nikolav-q";
import { omit } from "lodash";
import md5 from "md5";
//
const { eventListener, prevent } = q;
const { has, paste } = q.object;
const { isString } = q.test;
const { noop } = q.func;
const { sortByTimestampDesc, rand: arrayRand } = q.array;
const { stripEndSlashes } = q.str;

export {
  arrayRand,
  eventListener,
  has,
  isString,
  md5,
  noop,
  omit,
  paste,
  prevent,
  sortByTimestampDesc,
  stripEndSlashes,
};
