import React, { useEffect, forwardRef } from "react";
import { useFileReader } from "../../src/hooks";
import { useAppData } from "../../app/store";
import { pick } from "../../src/util";

//
export default forwardRef(ChooseFile);
function ChooseFile(
  {
    // pass app cache key to store file data under
    // {
    //   data:          dataUrl
    //   name:          string
    //   type:          string
    //   size:          bytes
    //   lastModified:  timestamp
    // }
    FILE = "wzcagoycqzyfxwfqrewzur",
    //
    children,
    //
    ...rest
    //
  },
  ref
) {
  const appdata = useAppData();
  const ID = `ChooseFile.${appdata.id()}`;
  //
  const __ = useFileReader();
  const onChange = ({ target }) => {
    const file = target?.files[0];
    //
    // evt.target.value doesnt change when component removes image
    // and if re-choosing the same image it wont work
    // .. handle .value somehow; send {file, target} to `.set`
    // .. so that it can be removed with `evt.target.value = ""`
    //
    if (file) {
      appdata.set(FILE, {
        ...pick(file, ["name", "lastModified", "size", "type"]),
        file,
      });
      __.read(file);
    }
  };
  //
  useEffect(() => {
    if (!__.error && !__.loading && __.data) {
      appdata.set(FILE, { ...appdata(FILE), data: __.data });
    }
  }, [__.error, __.loading, __.data]);
  //
  return (
    <label htmlFor={ID} {...rest}>
      {children}
      <input
        ref={ref}
        onChange={onChange}
        type="file"
        id={ID}
        name={ID}
        className="sr-only !hidden"
      />
    </label>
  );
}
