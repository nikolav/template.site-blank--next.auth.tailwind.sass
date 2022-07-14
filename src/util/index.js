import q from "nikolav-q";
import { omit, pick } from "lodash";
import md5 from "md5";
//
const { eventListener, prevent, ready, s: select } = q;
const { has, paste } = q.object;
const { isString } = q.test;
const { noop } = q.func;
const { sortByTimestampDesc, rand: arrayRand } = q.array;
const { stripEndSlashes } = q.str;
const { add: addClass, rm: removeClass } = q.class;

export {
  addClass,
  arrayRand,
  eventListener,
  has,
  isString,
  md5,
  noop,
  omit,
  paste,
  pick,
  prevent,
  ready,
  removeClass,
  select,
  sortByTimestampDesc,
  stripEndSlashes,
};
