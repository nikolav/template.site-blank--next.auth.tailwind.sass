import q from "nikolav-q";
import { has } from "./has";
import noop from "./noop";
import prevent from "./prevent";

//
const paste = q.object.paste;
const stripEndSlashes = q.str.stripEndSlashes;
const sortByTimestampDesc = q.array.sortByTimestampDesc;

export { paste, has, noop, prevent, stripEndSlashes, sortByTimestampDesc };
