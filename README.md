## Crypto Address Generator

demo link: https://calibur2020.github.io

### Tech stack and core libs used

```
Techstack: React(dva.js) + Node.js
Libraries: bitcoinlib-js, bip39, bip32
```

### Installation

```bash
yarn
yarn start
```

### Functions

1. Generate a HD SegWit Bitcoin address from a given seed and path.
2. Generate an n-out-of-m multi-sig P2SH bitcoin address.

-   What's more, I added mnemonic word list generator and a customized path composer for convenience getting the seed and path value. token type is hardcoded to bitcoin, so it will always generate paths for bitcoin address.

### Further improvement

-   Add support for other coin types.
-   Allow user to choose numer of words for the mnemonics.

### Summary

It's been wonderful experience working on this project, during which I have learned a lot nitty-gritty of BIPs(BIP32, BIP39, BIP44) and also got a better understanding of how bitcoin address works. Enjoyed the journey working on this project, and hope can do more interesting stuff with the team.

### Reference Link

My typescript npm package:
[ts-mongoose-pagination](https://www.npmjs.com/package/ts-mongoose-pagination)
