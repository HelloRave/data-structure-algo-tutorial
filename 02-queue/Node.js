class Node {
    constructor(value, next){
        this.value = value
        this.next = next
    }

    setValue(value){
        return this.value = value
    }

    getValue(){
        return this.value
    }

    getNext(){
        return this.next
    }

    setNext(next){
        this.next = next
    }
}

module.exports = Node