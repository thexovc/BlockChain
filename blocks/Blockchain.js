const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [ new Block() ];
    }

    addBlock(block) {
        block.previousHash = this.chain[(this.chain.length - 1)].toHash()
        this.chain.push(block)
    }

    isValid() {
        let res = false

        for(let i = 1; i < this.chain.length; i++){
            if(this.chain[i - 1].toHash().toString() === this.chain[i].previousHash.toString())
            {
                res = true
            } 
            else {
                res = false
                return
            }
        }

        return res
    }
}

module.exports = Blockchain;
