export default {
  namespace: "multiSig",

  subscriptions: {},

  state: {
    message: null,
    address: "",
    n: 0,
    m: 0,
    pubs: ""
  },

  effects: {},

  reducers: {
    setAddress(state, { payload: { address } }) {
      return {
        ...state,
        address,
        message: ""
      };
    },
    resetInput(state) {
      return {
        ...state,
        message: null,
        address: "",
        n: 0,
        m: 0,
        pubs: ""
      };
    },
    setN(state, { payload: { n } }) {
      return {
        ...state,
        n
      };
    },
    setM(state, { payload: { m } }) {
      return {
        ...state,
        m
      };
    },
    setPubs(state, { payload: { pubs } }) {
      return {
        ...state,
        pubs
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
