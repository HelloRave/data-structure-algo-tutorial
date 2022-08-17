const Node = require('./Node')
const LinkedList = require('./LinkedList')

let numberList = new LinkedList()
numberList.push(new Node(101))
numberList.push(new Node(102))
numberList.push(new Node(103))
numberList.push(new Node(104))
numberList.print()

numberList.insertAt(1, new Node(99))
numberList.print()

numberList.deleteAt(2)
numberList.print()