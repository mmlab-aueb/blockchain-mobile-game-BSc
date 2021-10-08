var io = require('socket.io')(process.env.PORT || 52300);
const net = require("net");

const server = net.createServer(socket => {

    socket.on('connection',function(socket){
        console.log("Mpika");
    })
     
     socket.on("data", data => {
         console.log("Mpika");
         const WalletProvider = require("@truffle/hdwallet-provider");
         const androidData = data.toString().split(":");
         console.log(androidData);
         const mnemonicphrase = androidData[1];
         const provider = new WalletProvider(mnemonicphrase, // 12 word code for
         'https://rinkeby.infura.io/v3/59a3349980734b09b5a8bca63ecebfd0'); //rinkeby address from infura
         const Web3 = require('web3');
         const web3 = new Web3();
         web3.setProvider(provider);
         
 
     })
 })
 console.log("JsServer is Open");
<<<<<<< HEAD
 server.listen(7666,"192.168.2.5")
=======
 server.listen(52300,"localhost")
>>>>>>> b78a16b1240956ed148018652f5622a4467d699c
 
console.log('GameServer has Started');

io.on('connection',function(socket){
    console.log("Connection Made!");

});



