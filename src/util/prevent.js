import noop from "./noop";
//
export default function prevent(callback = noop, ...rest) {
  return function (evt) {
    evt.preventDefault();
    return callback.apply(this, rest);
  };
}
