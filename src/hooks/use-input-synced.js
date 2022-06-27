import { useState } from "react";
export default function useInputSynced(initial = {}) {
  const [inputs, setInput] = useState(initial);
  const setInput_ = (name, value) =>
    setInput((inputs) => ({ ...inputs, [name]: value }));
  const sync = ({ target }) => setInput_(target.name, target.value);
  //
  return { sync, inputs, setInput: setInput_ };
}
