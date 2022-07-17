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
    //   name:          string
    //   size:          bytes
    //   type:          string
    //   lastModified:  timestamp
    //   file:          File{}
    //   data:          dataUrl
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
