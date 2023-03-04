const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x00000fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    // TODO: add transaction to mempool
    mempool.push(transaction)
}

function mine() {
    // TODO: mine a block
    let minObj = {
        id: blocks.length
    }

    let transac = []

    for (let i = 0; i < mempool.length; i++){
        if(i < MAX_TRANSACTIONS){
            transac.push(mempool[i])
        }
    }

    mempool.splice(0, transac.length)


    minObj["transactions"] = transac

    minObj["nonce"] = 0

    let hash = SHA256(JSON.stringify(minObj))

    while(BigInt(`0x${hash}`) > TARGET_DIFFICULTY){
        minObj["nonce"] += 1
        hash = SHA256(JSON.stringify(minObj))
    }

    minObj["hash"] = hash

    blocks.push(minObj)
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};