export default {
  namespace: "segWit",

  subscriptions: {},

  state: {
    wallet: null,
    seed: "",
    path: "",
    privateKey: "",
    address: "",
    message: "",
    messageSeedPath: "",
    purpose: "44",
    cointype: "0",
    account: "0",
    change: "0",
    addrIndex: "0"
  },

  effects: {},

  reducers: {
    setWallet(state, { payload: { wallet, privateKey, address } }) {
      return {
        ...state,
        wallet,
        privateKey,
        address
      };
    },
    resetInput(state) {
      return {
        ...state,
        wallet: null,
        seed: "",
        path: "",
        mnemonic: "",
        privateKey: "",
        address: "",
        message: ""
      };
    },
    setAddress(state, { payload: { address } }) {
      return {
        ...state,
        address
      };
    },
    setMnemonic(state, { payload: { mnemonic } }) {
      return {
        ...state,
        mnemonic
      };
    },
    setSeed(state, { payload: { seed } }) {
      return {
        ...state,
        seed
      };
    },
    setAccount(state, { payload: { account } }) {
      return {
        ...state,
        path: `m/${state.purpose}'/${state.cointype}'/${state.change}'/${account}/${state.addrIndex}`,
        account
      };
    },
    setChange(state, { payload: { change } }) {
      return {
        ...state,
        path: `m/${state.purpose}'/${state.cointype}'/${change}'/${state.account}/${state.addrIndex}`,
        change
      };
    },
    setAddrIndex(state, { payload: { addrIndex } }) {
      return {
        ...state,
        path: `m/${state.purpose}'/${state.cointype}'/${state.change}'/${state.account}/${addrIndex}`,
        addrIndex
      };
    },
    setPath(state, { payload: { path } }) {
      return {
        ...state,
        path
      };
    },
    syncPath(state, { payload: {} }) {
      return {
        ...state,
        path: `m/${state.purpose}'/${state.cointype}'/${state.change}'/${state.account}/${state.addrIndex}`
      };
    },

    setMessage(state, { payload: { message } }) {
      return {
        ...state,
        message: message
      };
    }
  }
};
