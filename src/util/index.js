import q from "nikolav-q";
import omit from "lodash/omit";
import pick from "lodash/pick";
import merge from "lodash/merge";
import md5 from "md5";
//
const { eventListener, prevent, ready, s: select } = q;
const { has, paste } = q.object;
const { isString } = q.test;
const { noop } = q.func;
const { sortByTimestampDesc, rand: arrayRand } = q.array;
const { stripEndSlashes } = q.str;
const { add: addClass, rm: removeClass } = q.class;

//
const True = () => true;
const False = () => false;

export {
  addClass,
  arrayRand,
  eventListener,
  False,
  has,
  isString,
  md5,
  merge,
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
  True,
};
