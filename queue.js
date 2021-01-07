class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(val) {
    // to tail
    let node = new Node(val);
    if (!this.head) {
      //if queue is empty, point head and tail to this new node
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node; // make new node as tail
    }
  }
  dequeue() {
    //  from head
    if (this.head) {
      let val = this.head.value;
      this.head = this.head.next;
      return val;
    } else {
      return 'Queue is empty';
    }
  }
}

let q1 = new Queue();

q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);

console.log(q1.dequeue()); // 1
console.log(q1.dequeue()); // 2
console.log(q1.dequeue()); // 3
console.log(q1.dequeue()); // Queue is empty
