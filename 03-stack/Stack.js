const Node = require('./Node')
const LinkedList = require('./LinkedList')

class Stack {
    constructor(){
        this.data = new LinkedList()
    }

    push(data){
        this.data.insertAt(0, new Node(data))
    }

    pop(){
        const removed = this.data.peek(0)

        if(removed){
            this.data.deleteAt(0)
        }
        return removed
    }

    peek(){
        const top = this.data.getAt(0)
        if (top) {
            return top.getValue()
        } else {
            return null
        }
    }
}

module.exports = Stack