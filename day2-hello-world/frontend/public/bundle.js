const helloWorldABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "hello",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    }
];
const helloWorldAddress = '0xFcE3B143e938bFc45912f6305cfDAe55b27415ff';
const web3 = new Web3('http://localhost:9545');
const helloWorld = new web3.eth.Contract(helloWorldABI, helloWorldAddress);

document.addEventListener('DOMContentLoaded', () => {
    helloWorld.methods.hello().call()
        .then(result => {
            document.getElementById('hello').innerHTML = result;
        });
});
