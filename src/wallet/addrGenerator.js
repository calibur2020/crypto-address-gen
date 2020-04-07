const bitcoinLib = require("bitcoinjs-lib");
const bip32 = require("bip32");
const bip39 = require("bip39");
const DEFAULT_NETWORK = bitcoinLib.networks.bitcoin;

exports.generateSeedAndMnem = () => {
  const mnemonic = bip39.generateMnemonic(256);
  const seed = bip39.mnemonicToSeedSync(mnemonic).toString("hex");
  return {
    seed,
    mnemonic
  };
};

exports.generateMultisigP2SHAddr = (num, publicKeys) => {
  const publicKeysHex = publicKeys.map(hex => Buffer.from(hex, "hex"));
  const { address } = bitcoinLib.payments.p2sh({
    redeem: bitcoinLib.payments.p2ms({
      m: num,
      pubkeys: publicKeysHex
    })
  });
  return address;
};

exports.generateSegWitAddrBySeedAndPath = (
  seed,
  path,
  network = DEFAULT_NETWORK
) => {
  const seedBuffer = Buffer.from(seed, "hex");
  const root = bip32.fromSeed(seedBuffer);
  const child = root.derivePath(path);
  const { address } = bitcoinLib.payments.p2wpkh({
    pubkey: child.publicKey,
    network: network
  });
  return address;
};
