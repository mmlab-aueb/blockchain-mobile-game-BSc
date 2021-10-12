var io = require('socket.io')(process.env.PORT || 52300);
const net = require("net");
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
        const ABI = [
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "total",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "tokenOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "tokens",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "tokens",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "delegate",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "delegate",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "numTokens",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "tokenOwner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "internalType": "uint8",
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "receiver",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "numTokens",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "buyer",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "numTokens",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ];
        const contractInstance = new web3.eth.Contract(ABI, '0xc1e3931F6c6aE3F5D4570522CeaF4D252fabfD48')
        async function ExecuteContract(){

            var token = await contractInstance.methods.balanceOf('0xF2571e4aD42768f904F679d65D85a9967d555B01').send({from: '0xF2571e4aD42768f904F679d65D85a9967d555B01', value: 1});
            console.log("test")
            console.log(token);
            return token
               
        }
        var token2 = ExecuteContract();
        //console.log("test")
        //console.log(token2);
        
        //CardMap["Human"] = token
     });
});
 console.log("JsServer is Open");
 server.listen(7666,"192.168.2.5")
 
console.log('GameServer has Started');

io.on('connection',function(socket){ //when you accept a socket from unity
    console.log("Connection Made!");
    CardMap['Elf'] = 20;
    CardMap['Demon'] = 20;

    
    for (const [key, value] of Object.entries(CardMap)) {
        console.log("Sending data");
        socket.emit('send',{WalletMap : key});
        console.log("Sending data");
        socket.emit('send',{WalletMap : value});
      }
    


    socket.on('disconnect',function(socket){
        console.log("Unity Disconnected");
    })
});







