import q from "nikolav-q";
import { has } from "./has";
import noop from "./noop";
import prevent from "./prevent";
//
import { omit } from "lodash";
import md5 from "md5";
import { eventListener, listener, listenerOne } from "./event-listener";
//
const paste = q.object.paste;
const stripEndSlashes = q.str.stripEndSlashes;
const sortByTimestampDesc = q.array.sortByTimestampDesc;
const isString = q.test.isString;
const arrayRand = q.array.rand;

export {
  arrayRand,
  eventListener,
  has,
  isString,
  listener,
  listenerOne,
  md5,
  noop,
  omit,
  paste,
  prevent,
  sortByTimestampDesc,
  stripEndSlashes,
};
