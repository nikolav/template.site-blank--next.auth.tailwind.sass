import { useState, useEffect, useCallback } from "react";
import { noop, prevent } from "../util";
//
// validation: object
// @required; field--validation.func mappings
//   { [key: string.input-name]: (value: string.input-value) => boolean.isValid }
// {
//   userName: (value) => 0 < value.length,
//   email: (value) => isEmail(value),
// }
export default function useInputSynced(validation, onSubmit = noop) {
  //
  const fields = Object.keys(validation);
  const initialValues = blankInitialValues_();
  //
  const [ok, setOk] = useState(null);
  const [inputs, setInput] = useState(initialValues);
  const [valid, setValid] = useState(initialValues);
  //
  const setInput_ = (name, value) => {
    setInput((inputs) => ({ ...inputs, [name]: value }));
  };
  //
  // event{}
  const sync = ({ target }) => setInput_(target.name, target.value);
  //
  useEffect(() => {
    setValid(fields.reduce(validateFields_, {}));
    setOk(fields.every(validate_));
  }, [inputs]);
  //
  return {
    //
    // handle .onChange: Function
    sync,
    //
    // input values: object
    values: inputs,
    //
    // validated input values: object
    valid,
    //
    // all fields valid: boolean
    ok,
    //
    // set field/value manualy
    setInput: setInput_,
    //
    // handle form.onSubmit
    // @return: boolean to form.clear
    handle: prevent(
      async () => ok && (await onSubmit.call(null, inputs)) && reset_()
    ),
    //
    reset: reset_,
  };
  //
  function validateFields_(v, field) {
    v[field] = validate_(field);
    return v;
  }
  function validate_(field) {
    return validation[field](inputs[field]);
  }
  function blankInitialValues_() {
    return fields.reduce((v, name) => {
      v[name] = "";
      return v;
    }, {});
  }
  function reset_() {
    setInput(initialValues);
  }
}
