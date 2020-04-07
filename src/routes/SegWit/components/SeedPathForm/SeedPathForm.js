import React from "react";
import { connect } from "dva";
import { addrGenerator } from "@/wallet";

import WalletFormControl from "@/components/WalletFormControl";
import WalletFormField from "@/components/WalletFormField";
import logo from "@/assets/images/crypto-com-mco-logo.svg";

const SeedPathForm = ({
  dispatch,
  mnemonic,
  purpose,
  cointype,
  className,
  account,
  change,
  addrIndex,
  message
}) => {
  const handleSeedAndMnemonicGeneration = () => {
    const { seed, mnemonic } = addrGenerator.generateSeedAndMnem(256);
    dispatch({ type: "segWit/setMnemonic", payload: { mnemonic } });
    dispatch({ type: "segWit/setSeed", payload: { seed } });
    dispatch({ type: "segWit/syncPath", payload: {} });
  };

  const handlePathAccountChange = e => {
    dispatch({
      type: "segWit/setAccount",
      payload: { account: e.target.value }
    });
  };
  const handlePathChangeChange = e => {
    dispatch({ type: "segWit/setChange", payload: { change: e.target.value } });
  };
  const handlePathAddressIndexChange = e => {
    dispatch({
      type: "segWit/setAddrIndex",
      payload: { addrIndex: e.target.value }
    });
  };

  return (
    <WalletFormControl
      title="Seed Path Generator"
      className={className}
      logo={logo}
      onGenerate={handleSeedAndMnemonicGeneration}
      onReset={() => {
        dispatch({ type: "segWit/resetInput" });
      }}
      message={message}
      btn1Text="Generate Seed And Path"
      btn2Text="Reset"
    >
      <WalletFormField
        label="Mnemonic(Entropy: 256bit, 24 words)"
        value={mnemonic}
        type="textarea"
        disabled={true}
      />
      <WalletFormField
        label="Purpose(hardened)"
        value={purpose}
        type="input"
        disabled={true}
      />
      <WalletFormField
        label="Coin type: bitcoin"
        value={cointype}
        type="input"
        disabled={true}
      />
      <WalletFormField
        label="Account(hardened)"
        value={account}
        onChange={handlePathAccountChange}
        type="input"
      />
      <WalletFormField
        label="Change"
        value={change}
        onChange={handlePathChangeChange}
        type="input"
      />
      <WalletFormField
        label="Address index"
        value={addrIndex}
        onChange={handlePathAddressIndexChange}
        type="input"
      />
    </WalletFormControl>
  );
};

const mapStateToProps = state => {
  const segWit = state.segWit;
  return {
    mnemonic: segWit.mnemonic,
    message: segWit.messageSeedPath,
    purpose: segWit.purpose,
    cointype: segWit.cointype,
    account: segWit.account,
    change: segWit.change,
    addrIndex: segWit.addrIndex
  };
};
export default connect(mapStateToProps)(SeedPathForm);
