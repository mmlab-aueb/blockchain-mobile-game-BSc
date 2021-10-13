var io = require('socket.io')(process.env.PORT || 52300);
const net = require("net");
const ABIs = require('./ABIs.json');
var test;
var CardMap = [];
const server = net.createServer(socket => {

    
     
     socket.on("data", data => { //when you accept a socket from java server
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
        const ABI = ABIs["HUMAN"];
        const contractInstance = new web3.eth.Contract(ABI, '0xc1e3931F6c6aE3F5D4570522CeaF4D252fabfD48')
        async function ExecuteContract(contract){

            var token = await contract.methods.balanceOf('0xF2571e4aD42768f904F679d65D85a9967d555B01').call();
            console.log(token); 
            CardMap["Human"] = token
        }
        ExecuteContract(contractInstance);
        
     });
});
 console.log("JsServer is Open");
 server.listen(7666,"localhost")
 
console.log('GameServer has Started');

io.on('connection',function(socket){ //when you accept a socket from unity
    console.log("Connection Made!");

    console.log("Sending data");
    for (const [key, value] of Object.entries(CardMap)) {
        
        socket.emit('send',{WalletMap : key});
        socket.emit('send',{WalletMap : value});
        console.log("I have sent " + value + key + "s!");
      }
    


    socket.on('disconnect',function(socket){
        console.log("Unity Disconnected");
    })
});







