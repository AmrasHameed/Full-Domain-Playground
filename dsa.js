// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor () {
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     prepend(value) {
//         const node = new Node(value)
//         if(this.head === null) {
//             this.head = node
//             this.tail = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append(value) {
//         const node = new Node(value)
//         if(this.head === null) {
//             this.head = node
//             this.tail = node
//         } else {
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++
//     }

//     removeFromFront() {
//         if(this.head === null) {
//             return null
//         }
//         let temp = this.head
//         this.head = this.head.next
//         temp = null
//         this.size--
//     }

//     removeFromEnd() {
//         if(this.head === null) {
//             return null
//         }
//         if(this.size === 1) {
//             this.head = null
//             this.tail = null
//         } else {
//             let prev = this.head
//             while(prev.next !== this.tail) {
//                 prev = prev.next
//             }
//             prev.next = null
//             this.tail = prev
//         }
//         this.size--
//     }

//     reverse() {
//         let prev = null
//         let curr = this.head
//         while(curr) {
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.head = prev
//     }

//     insert(value, index) {
//         const node = new Node(value)
//         if(index < 0 || index > this.size) {
//             return
//         }
//         if(index === 0) {
//             if(this.head === null) {
//                 this.head = node
//             } else {
//                 node.next = this.head
//                 this.head = node
//             }
//             this.size++
//         } else {
//             let prev = this.head
//             for(let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

//     remove(value) {
//         if(this.head.value === value) {
//             this.head = this.head.next
//             this.size--
//             return
//         }
//         let prev = this.head
//         while(prev && prev.next.value !== value) {
//             prev = prev.next
//         }
//         prev.next = prev.next.next
//         this.size--
//     }

//     search(value) {
//         if(this.size === 0) {
//             return
//         }
//         let i = 0
//         let curr = this.head
//         while(curr) {
//             if(curr.value === value) {
//                 return i
//             }
//             curr = curr.next
//             i++
//         }
//     }

//     print() {
//         if(this.head === null) {
//             console.log("List empty")
//             return
//         }
//         let curr = this.head
//         let list = ''
//         while(curr) {
//             list += `${curr.value} `
//             curr = curr.next
//         }
//         console.log(list)
//     }
// }

// const list = new LinkedList()
// list.print()
// list.prepend(1)
// list.prepend(2)
// list.prepend(3)
// list.prepend(4)
// list.prepend(5)
// list.print()
// // list.insert(0,5)
// list.append(10)
// list.append(20)
// list.print()
// console.log(list.search(3))

// class Stack {
//     constructor() {
//         this.stack = []
//     }

//     push(value) {
//         this.stack.push(value)
//     }

//     pop() {
//         this.stack.pop()
//     }

//     peek() {
//         return this.stack[this.stack.length - 1]
//     }

//     print() {
//         console.log(this.stack.toString())
//     }
// }

// const stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(4)
// stack.push(5)
// stack.push(6)
// stack.print()
// console.log(stack.peek())

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   enqueue(value) {
//     let node = new Node(value);
//     if (this.head === null) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node
//       this.tail = node
//     }
//     this.size++;
//   }

//   dequeue() {
//     if (this.head === null) {
//       return;
//     }
//     this.head = this.head.next;
//     this.size--;
//   }

//   print() {
//     if (this.head === null) {
//       console.log("List Empty");
//       return;
//     }
//     let curr = this.head;
//     let list = "";
//     while (curr) {
//       list += `${curr.value} `;
//       curr = curr.next;
//     }
//     console.log(list);
//   }
// }

// const list = new LinkedList();
// list.print()
// list.enqueue(1)
// list.enqueue(2)
// list.enqueue(3)
// list.enqueue(4)
// list.enqueue(5)
// list.enqueue(6)
// list.print()

// list.print()


// class Queue {
//     constructor(capacity) {
//         this.item = new Array(capacity)
//         this.capacity = capacity
//         this.currentLength = 0
//         this.front = -1
//         this.rear = -1
//     }

//     isFull() {
//         return this.currentLength === this.capacity
//     }

//     enqueue(value) {
//         if(!this.isFull()) {
//             this.rear = (this.rear + 1) % this.capacity
//             this.item[this.rear] = value
//             this.currentLength += 1
//             if(this.front === -1) {
//                 this.front = this.rear
//             }
//         }
//     }

//     dequeue() {
//         if(this.currentLength === 0) {
//             return
//         }
//         this.item[this.front] = null
//         this.front = (this.front + 1) %this.capacity
//         this.currentLength -= 1
//         if(this.currentLength === 0) {
//             this.front = -1
//             this.rear = -1
//         }
//     }

//     print() {
//         if(this.currentLength === 0) {
//             console.log('Empty')
//             return
//         } 
//         let i;
//         let str = ''
//         for(i = this.front; i !== this.rear; i = (i + 1)% this.capacity) {
//             str += this.item[i] + ' '
//         }
//         str += this.item[i]
//         console.log(str)
//     }
// }



// const q = new Queue(5)
// q.print()
// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
// q.enqueue(4)
// q.enqueue(5)
// q.print()
// q.dequeue()
// q.enqueue(5)
// q.print()
// q.enqueue(6)
// q.print()


// class Node {
//     constructor(value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearchTree {
//     constructor(){
//         this.root = null
//     }

//     insert(val) {
//         const node = new Node(val)
//         if(this.root === null) {
//             this.root = node
//         } else {
//             this.insertNode(this.root, node)
//         }
//     }

//     insertNode(root, node) {
//         if(node.value < root.value) {
//             if(root.left === null) {
//                 root.left = node
//             } else {
//                 this.insertNode(root.left, node)
//             }
//         } else {
//             if(root.right === null) {
//                 root.right = node
//             } else {
//                 this.insertNode(root.right, node)
//             }
//         }
//     }

//     inOrder(root) {
//         if(!root) return
//         this.inOrder(root.left)
//         console.log(root.value)
//         this.inOrder(root.right)
//     }

//     levelOrder() {
//         let queue = [this.root]
//         while(queue.length > 0) {
//             let curr = queue.shift()
//             console.log(curr.value)
//             if(curr.left) {
//                 queue.push(curr.left)
//             }
//             if(curr.right) {
//                 queue.push(curr.right)
//             }
//         }
//     }

//     search(root, value) {
//         if(!root) {
//             return false
//         } else {
//             if(root.value === value) {
//                 return true
//             } else if(root.value > value) {
//                 return this.search(root.left, value)
//             } else {
//                 return this.search(root.right, value)
//             }
//         }
//     }

//     max(root) {
//         if(!root.right) {
//             return root.value
//         }
//         return this.max(root.right)
//     }

//     min(root) {
//         if(!root.left) {
//             return root.value
//         }
//         return this.min(root.left)
//     }

//     isValid(root) {
//         if(root === null) {
//             return true
//         }
//         if(root.left && this.max(root.left) > root.value) {
//             return false
//         }
//         if(root.right && this.min(root.right) < root.value) {
//             return false
//         }
//         if(!this.isValid(root.left) || !this.isValid(root.right)) {
//             return false
//         }
//         return true
//     }

//     delete(root,value) {
//         if(!root) {
//             return root
//         }
//         if(root.value > value) {
//             root.left = this.delete(root.left, value)
//         } else if(root.value < value) {
//             root.right = this.delete(root.right, value)
//         } else {
//             if(!root.right) {
//                 return root.left
//             }
//             if(!root.left) {
//                 return root.right
//             } else {
//                 root.value = this.min(root.right)
//                 root.right = this.delete(root.right, root.value)
//             }
//         }
//         return root
//     }

//     height(root) {
//         if(!root) {
//             return 0
//         }
//         let left = this.height(root.left)
//         let right = this.height(root.right)
//         return Math.max(root.left,root.right) + 1
//     }
// }

// class HashTable {
//     constructor(size) {
//         this.table = new Array(size) 
//         this.size = size
//     }

//     hash(key) {
//         let result = 0
//         for(let i = 0; i< key.length; i++) {
//             result += key.charCodeAt(i)
//         }
//         return result % this.size
//     }

//     set(key, value) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(!bucket) {
//             this.table[index] = [[key,value]]
//         } else {
//             const same = bucket.find(item => item[0] === key)
//             if(same) {
//                 same[1] = value
//             } else {
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket) {
//             let same = bucket.find(item => item[0] === key)
//             if(same) {
//                 return same[1]
//             }
//         }
//         return undefined
//     }

//     remove(key) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket) {
//             let same = bucket.find(item => item[0]===key)
//             if(same) {
//                 bucket.splice(bucket.indexOf(same), 1)
//             }
//         }
//     }

//     display() {
//         for(let i = 0; i < this.table.length; i++) {
//             if(this.table[i]) {
//                 console.log(i , this.table[i])
//             }
//         }
//     }
// }

// const table = new HashTable(50)

// table.set('name','bruce')
// table.set('nmea','Amras')
// table.display()

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if(!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)) {
            return true
        }
        return false
    }

    removeEdge(vertex1,vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            return
        }
        for(let adjVertex of this.adjacencyList[vertex]) {
            this.removeEdge(adjVertex, vertex)
        }
        delete this.adjacencyList[vertex]
    }

    display() {
        for(let vertex in this.adjacencyList) {
            console.log(vertex + ' ==> ' + [...this.adjacencyList[vertex]])
        }
    }
}

const graph = new Graph()
graph.addEdge('A','B')
graph.addEdge('B','C')
graph.addEdge('C','D')
graph.addEdge('D','A')
graph.display()
graph.removeVertex('B')
console.log("sdkjfnlsdknflsd")
graph.display()
