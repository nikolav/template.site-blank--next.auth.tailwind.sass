import { nanoid } from "nanoid";
import md5 from "md5";
import q from "nikolav-q";
import clamp from "lodash/clamp";
import isFunction from "lodash/isFunction";
import isString from "lodash/isString";
import map from "lodash/map";
import merge from "lodash/merge";
import omit from "lodash/omit";
import pick from "lodash/pick";
import pickBy from "lodash/pickBy";
import random from "lodash/random";
import reduce from "lodash/reduce";
import each from "lodash/each";
import filter from "lodash/filter";
//
const { add: addClass, rm: removeClass } = q.class;
const { eventListener, prevent, ready, s: select, type } = q;
const { has, paste } = q.object;
const { isEmail } = q.test;
const { noop } = q.func;
const { sortByTimestampDesc, rand: arrayRand } = q.array;
const { stripEndSlashes } = q.str;

//
const True = () => true;
const False = () => false;

export {
  addClass,
  arrayRand,
  clamp,
  each,
  eventListener,
  False,
  filter,
  has,
  isEmail,
  isFunction,
  isString,
  map,
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
  reduce,
  removeClass,
  select,
  sortByTimestampDesc,
  stripEndSlashes,
  True,
  type,
};
