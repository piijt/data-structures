const list_example = {
  head: {
    value: 6,
    next: {
      value: 10,
      next: {
        value: 12,
        next: {
          value: 3,
          next: null,
        },
      },
    },
  },
};

// node struct
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //  Checks if the linked list is empty (i.e., has no nodes).
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      ++count;
      node = node.next;
    }
    return count;
  }

  // Clears the linked list by removing all nodes.
  clear() {
    this.head = null;
    this.tail = null;
  }

  // returns the first node in the linked list
  getFirst() {
    return this.head;
  }

  // appends a node to the linked list
  append(data) {
    const node = new ListNode(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  // prepends a node to the linked list
  prepend(data) {
    const node = new ListNode(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  // deletes a node with the given data
  delete(data) {
    let node = this.head;
    let prevNode = null;
    while (node !== null) {
      if (JSON.stringify(node.data) === JSON.stringify(data)) {
        if (prevNode) {
          prevNode.next = node.next;
        } else {
          this.head = node.next;
        }
        node = null;
        return true;
      }
      prevNode = node;
      node = node.next;
    }
    return false;
  }

  // Converts the linked list into an array, allowing easy iteration and manipulation.
  toArray() {
    const array = [];
    let node = this.head;
    while (node !== null) {
      array.push(node.data);
      node = node.next;
    }
    return array;
  }

  indexOf(data) {
    let index = 1;
    let node = this.head;
    while (node !== null) {
      if (JSON.stringify(node.data) === JSON.stringify(data)) {
        return index;
      }
      node = node.next;
      ++index;
    }
    return -1;
  }

  // Inserts a new node with the given data at the specified index in the linked list.
  insertAtIndex(data, index) {
    if (index < 0 || index > this.size()) {
      return -1; // index is out of bounds;
    }

    const node = new ListNode(data);

    // inserting at the beginning
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    }
    let currentNode = this.head;
    let prevNode = null;
    let currentIndex = 0;

    // traverse the list to find the node at the specified index
    while (currentIndex < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      ++currentIndex;
    }

    // insert the new node between prevNode and currentNode
    prevNode.next = node;
    node.next = currentNode;

    return node;
  }

  // Retrieves the data value at the specified index in the linked list.
  getAtIndex(index) {
    if (index < 0 || index > this.size()) {
      return false; // index is out of bounds;
    }
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentNode = currentNode.next;
      ++currentIndex;
    }
    return currentNode.data;
  }

  // Updates the data value at the specified index in the linked list.
  setAtIndex(data, index) {
    if (index < 0 || index > this.size()) {
      return -1; // index is out of bounds;
    }

    if (index === 0) {
      this.head.data = data;
      return true;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      currentNode = currentNode.next;
      ++currentIndex;
    }

    currentNode.data = data;
    return true;
  }

  // Reverses the order of nodes in the linked list.
  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while(currentNode) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }
    this.head = prevNode;
    return true;
  }

  //  Searches for a node that satisfies the given condition specified by the callback function.
  find(callback) {
    let currentNode = this.head;
    while(currentNode) {
        if(callback(currentNode.data)) {
            return currentNode.data;
        }
        currentNode = currentNode.next
    }
    return -1
  }

  // Removes duplicate nodes from the linked list, keeping only the first occurrence of each unique data value.
  removeDuplicates() {
    const uniqueValues = new Set()
    let currentNode = this.head;
    let prevNode = null;

    while(currentNode) {
        if(uniqueValues.has(currentNode.data)) {
            // remove the current node from the list by updating the next pointer of the previous node.
            prevNode.next = currentNode.next;
        } else {
            uniqueValues.add(currentNode.data)
            prevNode = currentNode
        }
        currentNode = currentNode.next
    }
    return true
  }

  // Creates a new linked list containing a subset of nodes from the original list, starting from the node at the startIndex and ending at the node before the endIndex.
  slice(startIndex, endIndex) {}

  // Concatenates another linked list to the end of the current list, effectively appending all nodes from the other list.
  concat(otherList) {}

  // Returns a string representation of the linked list, useful for debugging and logging.
  toString() {}

  // Executes a provided function once for each node in the linked list.
  forEach(callback) {
    let currentNode = this.head;
    while(currentNode) {
        const update = callback(currentNode.data)
        currentNode.data = update
        currentNode = currentNode.next
    }
    return true
  }

  //  Creates a new linked list with the results of calling a provided function on every node in the linked list.
  map(callback) {}

  // Creates a new linked list containing nodes that satisfy the condition specified by the callback function.
  filter(callback) {}

  // Applies a function against an accumulator and each node in the linked list to reduce it to a single value.
  reduce(callback, initialValue) {}
}

const list = new LinkedList();
list.append(2);
list.append(2);
list.append(2);
list.append(2);
list.append(3);
list.append("some string data")
list.append([1, 2, 3]);
list.append(1);


// list.insertAtIndex(123, 1);

// // methods
console.log({
  getFirst: list.getFirst(),
  indexOf: list.indexOf([1, 2, 3]),
  size: list.size(),
  indexAt: list.getAtIndex(1),
  insertAtIndex: list.insertAtIndex(123123, list.size()),
  setAtIndex: list.setAtIndex(42, 1),
  // reverse: list.reverse(),
  removeDuplicates: list.removeDuplicates(),
  find: list.find(data => cb(data, 42)),
  forEach: list.forEach(anotherCB)
});

console.log(list.toArray());

function findCriteria(data, target) {
    return JSON.stringify(data) === JSON.stringify(target)
} 

function cb(data, target) {
    return data===target
}

function anotherCB(data) {
    if(Number(data)) {
        return data**2
    } 
    return data
}

