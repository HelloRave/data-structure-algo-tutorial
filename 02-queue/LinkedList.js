class LinkedList {
    constructor(){
        this.head = null
    }

    push(newNode){
        if (!this.head){
            this.head = newNode
        } else {
            let current = this.head 
            while (current.getNext() != null) {
                current = current.getNext()
            }
            current.next = newNode
        }
    }

    print(){
        let current = this.head
        while(current != null){
            console.log(current.getValue());
            current = current.getNext()
        }
    }

    insertAt(index, newNode){
        if (this.head == null) {
            return
        } else {
            let current = this.head
            for (let i = 0; i < index - 1; i++){
                current = current.getNext()
            }
            newNode.setNext(current.getNext()) 
            current.setNext(newNode)
        }
    }

    deleteAt(index){
        if (this.head == null) {
            return
        } 
        if (index == 0) {
            this.head = this.head.getNext()
        } else {
            let current = this.head
            for (let i = 0; i < index - 1; i++){
                current = current.getNext()
            }

            current.setNext(current.getNext().getNext())
        }
    }

    getAt(index) {

        if (this.head == null){
            return null
        }

        let current = this.head 
        for (let i = 0; i < index; i++) {
            current = current.getNext()
        }
        return current
    }
}

module.exports = LinkedList