// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.getAt(0);
  }

  getLast() {
    return this.getAt(this.size() - 1);
    /*
    let counter = 0;
    let node = this.head;
    while (node && node.next) {
      node = node.next;
    }
    return node;
    */
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) { // length is 1
      this.head = null;
      return;
    }
    let node = this.head;
    let previousNode = null;
    while (node.next) {
      previousNode = node;
      node = node.next; // will be last one
    }
    previousNode.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    const node = new Node(data);
    if (!last) {
      this.head = node;
      return;
    }
    last.next = node;
  }

  getAt(i) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === i) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(i) {
    if (!this.head) {
      return;
    }
    if (i === 0) {
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(i - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, i) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (i === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const previous = this.getAt(i - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };