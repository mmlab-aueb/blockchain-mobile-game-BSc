const HDWalletProvider = require("@truffle/hdwallet-provider");
const provider = new HDWalletProvider('page appear grunt subway indoor next pride boring universe limit uncle husband', // 12 word code for
 'https://rinkeby.infura.io/v3/59a3349980734b09b5a8bca63ecebfd0'); //rinkeby address from infura
const Web3 = require('web3');
const web3 = new Web3();
web3.setProvider(provider);
const ABI = '[{"constant":false,"inputs":[{"internalType":"string","name":"_x","type":"string"}],"name":"change","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"_x","type":"string"}],"name":"payableChange","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"read","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"x","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]'
const contractInstance = new web3.eth.Contract(JSON.parse(ABI), '0x9fb36464f75319c75a2e2f85c5de5e09b56a7184') // contract address from etherscan

const net = require("net")

const server = net.createServer(socket => {
    socket.on("data", data => {
    contractInstance.methods.payableChange(data.toString()).send({from: '0xDD5B26f0ecb1F7d501a77168752Dc7e72D04ea54', value: 1}).then(function(receipt) {
        console.log(receipt)
        
    });

    })
})

server.listen(7666,"192.168.2.6")
