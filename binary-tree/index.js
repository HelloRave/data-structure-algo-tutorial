class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (val === current.value) return undefined;
                if (val < current.value) {
                    if (!current.left) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else if (val > current.value) {
                    if (!current.right) {
                        current.right = newNode;
                    }
                    current = current.right;
                }
            }
        }
    }

    find(val) {
        if (!this.root) return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (val < current.value) {
                current = current.left;
            } else if (val > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    bfs() {
        let node = this.root;
        let queue = [];
        let data = [];
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    dfsPreOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    dfsPostOrder() {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value)
        }
        traverse(this.root);
        return data
    }

    dfsInOrder() {
        let data = [];
        function traverse(node) {
            node.left && traverse(node.left);
            data.push(node.value);
            node.right && traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log(tree.bfs())
console.log(tree.dfsPreOrder())
console.log(tree.dfsPostOrder())
console.log(tree.dfsInOrder())