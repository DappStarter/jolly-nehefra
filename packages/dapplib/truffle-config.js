require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture street crawl pave proud include another army genuine'; 
let testAccounts = [
"0x7c8e02da1db0a731d009b9718d50a2bd8f6184ab78ef8b8061748ed02584455f",
"0xaf1deaa2bc758471ba5d4ede51ca57a506cdd0bfe8efc5cabd3e31a1818cb593",
"0xe93be664b0c49b707d2ec5fc0135436518e5c5b7a9226280727d43348f94921c",
"0x4038bcbdddfb9e333b5369a871ecc14e06e42a6d9bce7ab4f5750024b10e31d9",
"0xf69c2c593355e2ce17d2e0bd9f3825973e75c2c5cacf6013676ffa9c35e7211e",
"0x4131acd24c7fdcf61ba9f8b178e29f96e35448e475b59441a6b2f7d4a49de339",
"0x05395301ca8e97d041c9f626b6b32700ff6a2c4c8bcfc25c99ca5e344a7bc44f",
"0x4f7ae33085d52f991b95ca9b267d32772c7e781bb68c8bf769328ea83b209407",
"0x3104ca43a2c06214059787bd55d80b02459b4f406d6530a5516cb76285d580ca",
"0xaf3cc13edf1614f2b42bc24803b22ca712ba927c82d2347ed89e5f5fe883f89b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

