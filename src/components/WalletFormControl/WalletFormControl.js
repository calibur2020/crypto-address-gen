import React from "react";
import classnames from "classnames";

import { WalletFormControl } from "./WalletFormControl.module.scss";

import FormButton from "@/components/FormButton";

export default ({
  title,
  message,
  className,
  disabled,
  children,
  logo,
  onGenerate,
  onReset,
  btn1Text,
  btn2Text
}) => (
  <div className={classnames(className, WalletFormControl)}>
    <div className="title">
      <img src={logo} className="titleLogo"></img>
      <div className="titleText">{title}</div>
    </div>
    {message ? <div className="message">{message}</div> : null}
    <div className="form">{children}</div>
    <div className="walletFormBtnControls">
      <FormButton
        className="walletFormGBtn"
        disabled={!!disabled}
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          onGenerate(e);
          return false;
        }}
      >
        {btn1Text}
      </FormButton>
      <FormButton
        className="walletFormGBtn"
        disabled={!!disabled}
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          onReset(e);
          return false;
        }}
      >
        {btn2Text}
      </FormButton>
    </div>
  </div>
);
