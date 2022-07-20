import React from "react";
import modcss from "./Body.module.css";

const Body = ({ children, ...rest }) => {
  //
  return (
      <body className={`dark:text-gray-100 ${modcss.body}`} {...rest}>
        {children}
      </body>
  );
};

export default Body;
