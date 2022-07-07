import { useState } from "react";
export default function useInputSynced(initial = {}, middleware = null) {
  const [inputs, setInput] = useState(initial);
  const setInput_ = (name, value) => {
    const input_ = { name, value };
    const newInput = null != middleware ? middleware(input_) : input_;
    setInput((inputs) => ({ ...inputs, [newInput.name]: newInput.value }));
  };
  const sync = ({ target }) => setInput_(target.name, target.value);
  //
  return { sync, inputs, setInput: setInput_ };
}
/*

// middleware demo; numbers only
const reNums = /^\d+$/;
const nums = (text) => Array.prototype.filter.call(text, ch => reNums.test(ch)).join("");
const { inputs, sync } = useInputSynced(
  { amount: 0 }, 
  ({name, value}) => ({name, value: nums(value) }));
//


*/
