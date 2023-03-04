const SHA256 = require('crypto-js/sha256');

class Block {
    toHash() {
        let hash = SHA256("Hello world")
        return hash
    }
}

module.exports = Block;

