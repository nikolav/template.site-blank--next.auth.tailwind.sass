import q from "nikolav-q";
import { has } from "./has";
import noop from "./noop";
import prevent from "./prevent";

//
const paste = q.object.paste;
const stripEndSlashes = q.str.stripEndSlashes;
const sortByTimestampDesc = q.array.sortByTimestampDesc;
const isString = q.test.isString;
const arrayRand = q.array.rand;

export {
  arrayRand,
  has,
  isString,
  noop,
  paste,
  prevent,
  sortByTimestampDesc,
  stripEndSlashes,
};
