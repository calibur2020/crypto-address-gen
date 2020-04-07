import React from "react";
import { connect } from "dva";
import { pageWrapper } from "./index.module.scss";
import { addrGenerator } from "@/wallet";
import WalletFormControl from "@/components/WalletFormControl";
import WalletFormField from "@/components/WalletFormField";
import SeedPathForm from "./SeedPathForm";
import logo from "@/assets/images/crypto-com-mco-logo.svg";
const SegWitPage = ({ dispatch, seed, path, message, address }) => {
  const handleGenerateAddress = () => {
    try {
      const address = addrGenerator.generateSegWitAddrBySeedAndPath(seed, path);
      dispatch({
        type: "segWit/setAddress",
        payload: {
          address
        }
      });
    } catch (e) {
      dispatch({
        type: "segWit/setMessage",
        payload: { message: e.message }
      });
    }
  };
  const handleSeedChange = e => {
    const seed = e.target.value;
    dispatch({ type: "segWit/setSeed", payload: { seed } });
  };
  const handlePathChange = e => {
    const path = e.target.value;
    dispatch({ type: "segWit/setPath", payload: { path } });
  };
  return (
    <div className={pageWrapper}>
      <SeedPathForm className="formControlCenter"></SeedPathForm>
      <WalletFormControl
        title="SegWit Wallet Generator"
        className="formControlCenter"
        logo={logo}
        onGenerate={handleGenerateAddress}
        onReset={() => {
          dispatch({ type: "segWit/resetInput" });
        }}
        message={message}
        btn1Text="Generate Address"
        btn2Text="Clear"
      >
        <WalletFormField
          label="Seed"
          value={seed}
          onChange={handleSeedChange}
          type="input"
        />
        <WalletFormField
          label="Path"
          value={path}
          onChange={handlePathChange}
          type="input"
        />
        <WalletFormField
          label="Address"
          value={address}
          type="input"
          disabled={true}
        />
      </WalletFormControl>
    </div>
  );
};

const mapStateToProps = state => {
  const segWit = state.segWit;
  return {
    wallet: segWit.wallet,
    seed: segWit.seed,
    path: segWit.path,
    message: segWit.message,
    privateKey: segWit.privateKey,
    address: segWit.address
  };
};
export default connect(mapStateToProps)(SegWitPage);
