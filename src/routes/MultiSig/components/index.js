import React, { useState } from "react";
import { connect } from "dva";
import { pageWrapper } from "./index.module.scss";
import { addrGenerator } from "@/wallet";
import WalletFormControl from "@/components/WalletFormControl";
import WalletFormField from "@/components/WalletFormField";
import logo from "@/assets/images/crypto-com-mco-logo.svg";

const MultiSigPage = ({ message, n, m, pubs, dispatch, address }) => {
  //    const publicKeyList = [
  //   "034246130970bad2bcc24331c88c33476bab3f70051c1f74d80e07c644ea146026",
  //   "022e56d85e214480de72de7d888ec027db1171361f44ce5fe9141cf34aa2e6ee73",
  //   "026c749a23e76a436bc0d2300e158df62aee243fe932c8dcd277e455a08252ca91",
  //   "036320bc6300948039141a5945126d6ee2b462c7b5344af0934b33eb3ac6a0b5d6"
  // ];
  const parsePublicKeys = () => {
    return pubs
      .trim()
      .split(",")
      .map(k => k.trim());
  };
  const isValidNumPair = () => {
    if (n <= 0 || m <= 0) {
      dispatch({
        type: "multiSig/setMessage",
        payload: { message: "please input positive n and m" }
      });
      return false;
    }
    if (n > m) {
      dispatch({
        type: "multiSig/setMessage",
        payload: { message: "n should not be greater than m" }
      });
      return false;
    }
    if (pubs.trim().split(",").length !== parseInt(m)) {
      dispatch({
        type: "multiSig/setMessage",
        payload: { message: `please provide exact ${m} public keys` }
      });
      return false;
    }
    return true;
  };

  const handleGenerateAddress = () => {
    if (isValidNumPair()) {
      try {
        const address = addrGenerator.generateMultisigP2SHAddr(
          n,
          parsePublicKeys()
        );
        dispatch({
          type: "multiSig/setAddress",
          payload: {
            address
          }
        });
      } catch (e) {
        dispatch({
          type: "multiSig/setMessage",
          payload: { message: e.message }
        });
      }
    }
  };
  return (
    <div className={pageWrapper}>
      <WalletFormControl
        title="n-out-of-m multi-sig P2SH"
        className="formControlCenter"
        onGenerate={handleGenerateAddress}
        logo={logo}
        onReset={() => {
          dispatch({ type: "multiSig/resetInput" });
        }}
        message={message}
        btn1Text="Generate Address"
        btn2Text="Clear"
      >
        <WalletFormField
          label="n"
          value={n}
          type="input"
          onChange={e => {
            dispatch({
              type: "multiSig/setN",
              payload: {
                n: isNaN(parseInt(e.target.value))
                  ? 0
                  : parseInt(e.target.value)
              }
            });
          }}
        />
        <WalletFormField
          label="m"
          value={m}
          type="input"
          onChange={e => {
            dispatch({
              type: "multiSig/setM",
              payload: {
                m: isNaN(parseInt(e.target.value))
                  ? 0
                  : parseInt(e.target.value)
              }
            });
          }}
        />
        <WalletFormField
          label="public keys(example: key1,key2)"
          value={pubs}
          type="textarea"
          onChange={e => {
            dispatch({
              type: "multiSig/setPubs",
              payload: {
                pubs: e.target.value
              }
            });
          }}
        />
        <WalletFormField
          label="Address:"
          value={address}
          type="input"
          disabled={true}
        />
      </WalletFormControl>
    </div>
  );
};

const mapStateToProps = state => {
  const multiSig = state.multiSig;
  return {
    n: multiSig.n,
    m: multiSig.m,
    pubs: multiSig.pubs,
    address: multiSig.address,
    message: multiSig.message
  };
};
export default connect(mapStateToProps)(MultiSigPage);
