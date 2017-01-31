function Stack() {
  let myStack = [];

  this.add = function (item) {
    myStack.push(item);
    return myStack;
  }

  this.remove = function (item) {
    myStack.pop();
    return myStack;
  }
}

class Queue {
  constructor() {
    this.queue = [];
  }
  add(item) {
    this.queue.push(item);
    return this.queue;
  }
  remove() {
    this.queue.shift();
    return this.queue;
  }
}

let newQueue = new Queue;
newQueue.add("first");
newQueue.add("second"); // ["first", "second"]
newQueue.remove(); // returns ["second"]
let newStack = new Stack();
newStack.add("first");
newStack.add("second"); // ["first", "second"]
newStack.remove(); // returns ["first"]

// Definitions:
// Stack: Stores data so that when you remove an item, it will be the last one you added.
// Queue: Stores data so that when you remove an item, it will be the first one you added. Like a line-up. Probably why it's called a queue...


//
