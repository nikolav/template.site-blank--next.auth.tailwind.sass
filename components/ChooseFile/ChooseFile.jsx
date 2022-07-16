import React, { useEffect } from "react";
import { useFileReader, useIsMounted } from "../../src/hooks";
import { useAppData } from "../../app/store";
//
export default function ChooseFile({
  //
  id,
  //
  // pass app cache key to store file data under
  // {
  //   file: File{};
  //   data: string.dataUrl;
  // }
  FILE = "wzcagoycqzyfxwfqrewzur",
  //
  children,
  //
  ...rest
  //
}) {
  const isMounted = useIsMounted();
  const appdata = useAppData();
  const ID = `ChooseFile.${id || appdata.id()}`;
  //
  const __ = useFileReader();
  const onChange = (evt) => {
    const file = evt?.target?.files[0];
    //
    // evt.target.value doesnt change when component removes image
    // and if re-choosing the same image it wont work
    // .. handle .value somehow; send {file, target} to `.set`
    // .. so that it can be removed with `evt.target.value = ""`
    //
    if (isMounted && file) {
      appdata.set(FILE, { file });
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
        onChange={onChange}
        type="file"
        id={ID}
        name={ID}
        className="sr-only !hidden"
      />
    </label>
  );
}
