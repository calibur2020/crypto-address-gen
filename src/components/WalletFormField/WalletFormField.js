import React from "react";
import { walletFormField } from "./WalletFormField.module.scss";

export default ({ disabled, label, type, value, onChange }) => (
  <label className={walletFormField}>
    <div className="affLabel">{label}</div>
    <div className="affInputCon">
      {type === "textarea" ? (
        <textarea
          className={disabled ? "affInputTextAreaDisabled" : "affInputTextArea"}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      ) : (
        <input
          type={type || "text"}
          className={disabled ? "affInputDisabled" : "affInput"}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      )}
    </div>
  </label>
);
