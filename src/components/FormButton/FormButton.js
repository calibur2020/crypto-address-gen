import React from "react";
import classnames from "classnames";
import { FormBtn } from "./FormButton.module.scss";

export default ({ children, className, ...props }) => (
  <button className={classnames(className, FormBtn)} {...props}>
    {children}
  </button>
);
