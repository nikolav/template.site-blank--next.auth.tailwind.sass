import q from "nikolav-q";
import { has } from "./has";
import noop from "./noop";
import prevent from "./prevent";
import isString from "./is-string";

//
const paste = q.object.paste;
const stripEndSlashes = q.str.stripEndSlashes;
const sortByTimestampDesc = q.array.sortByTimestampDesc;

export {
  has,
  isString,
  noop,
  paste,
  prevent,
  sortByTimestampDesc,
  stripEndSlashes,
};
