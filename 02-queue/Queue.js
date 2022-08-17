const LinkedList = require('./LinkedList')
const Node = require('./Node')

class Queue {
    constructor() {
        this.data = new LinkedList()
    }

    enqueue(newData){
        this.data.push(new Node(newData))
    }

    dequeue(){
        const front = this.data.getAt(0)
        this.data.deleteAt(0)
        return front.getValue()
    }

    peek(){
        return this.data.getAt(0)?.getValue() //optional chaining
    }
}

module.exports = Queue