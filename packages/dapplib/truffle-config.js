require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note ridge purpose gloom kitchen only secret'; 
let testAccounts = [
"0xecfc0d4ccc2ff35c06a1cb056873d7534a7eb63c843deb8d81d83afcb63dc9c8",
"0x050bb5ff2505e222346d9408b34f6c28af5451843eb6795ff5cbd57c075ca37a",
"0x3cd86ec25bef576228b3f0c031a5ff5d37764dd6cc1c093273c9caed4ae0f74c",
"0x7bc73838453d233ccb4f0016e7dcf5f834855c3330032aafc37fb9783783d3a9",
"0xd6cadf440cb1772bf68c3c06c767b974cd6aa33d12f3f0a41d3fa211e839f48c",
"0x9f3f43c31ed26194d2b7947ae82b019ef10d16b0111a4fa3c5f41860f92214cc",
"0xc1b248fe506fc9c9ad310b9a49b5e2da3d07cbc1445b1665130366216b93a6ad",
"0xc3266c8eb8679033adbd915f2da6ad960c83329b8e32805dca63de4f41b5947b",
"0xa6f913a6a634e66f551ab6aa9b3fd95106746a26a01ece74279eba90189fe0e8",
"0x37b47b6bbd28522ee01aad4d1e72844fc5fc10f8ac5a0b13b0a04b53e686d0db"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


