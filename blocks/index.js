const SHA256 = require('crypto-js/sha256');

class Block {

    constructor (data){
        this.data = data
    }

    toHash() {
	this.previousHash = ""
        let hash = SHA256(this.data + this.previousHash)
        return hash
    }

}

module.exports = Block;

