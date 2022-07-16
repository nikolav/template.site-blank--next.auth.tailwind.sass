import q from "nikolav-q";
import omit from "lodash/omit";
import pick from "lodash/pick";
import pickBy from "lodash/pickBy";
import isFunction from "lodash/isFunction";
import merge from "lodash/merge";
import clamp from "lodash/clamp";
import random from "lodash/random";
import isString from "lodash/isString";
import md5 from "md5";
import { nanoid } from "nanoid";
//
const { eventListener, prevent, ready, s: select } = q;
const { has, paste } = q.object;
const { isEmail } = q.test;
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
  clamp,
  eventListener,
  False,
  has,
  isEmail,
  isFunction,
  isString,
  md5,
  merge,
  nanoid,
  noop,
  omit,
  paste,
  pick,
  pickBy,
  prevent,
  random,
  ready,
  removeClass,
  select,
  sortByTimestampDesc,
  stripEndSlashes,
  True,
};
