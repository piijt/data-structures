export class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  /**
   * Create a LinkedList.
   * @constructor
   */
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Checks if the linked list is empty (i.e., has no nodes).
   * @returns size of the list
   */
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      ++count;
      node = node.next;
    }
    return count;
  }

  /**
   * Clears the linked list by removing all nodes.
   * @returns void
   */
  clear() {
    this.head = null;
    this.tail = null;
  }

  /**
   * returns the first node in the linked list
   * @returns void
   */
  getHead() {
    return this.head;
  }
  /**
   * returns the last node in the linked list
   * @returns
   */
  getTail() {
    return this.tail;
  }

  /**
   * appends a node to the linked list
   * @param {*} data
   * @returns void
   */
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

  /**
   * prepends a node to the linked list
   * @param {*} data
   * @returns void
   */
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

  /**
   * deletes a node with the given data
   * @param {*} data
   * @returns boolean
   */
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

  /**
   * Converts the linked list into an array, allowing easy iteration and manipulation.
   * @returns array
   */
  toArray() {
    const array = [];
    let node = this.head;
    while (node !== null) {
      array.push(node.data);
      node = node.next;
    }
    return array;
  }
  /**
   * returns the index of the data in the linked list
   * @param {*} data
   * @returns index
   */
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

  /**
   * Inserts node with the data provided at the index provided
   * @param {*} data
   * @param {*} index
   * @returns
   */
  insertAtIndex(data, index) {
    if (index < 0 || index > this.size()) {
      return false; // index is out of bounds;
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

  /**
   * Retrieves the data value at the specified index in the linked list.
   * @param {*} index
   * @returns
   */
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

  /**
   * Updates the data value at the specified index in the linked list.
   * @param {*} data
   * @param {*} index
   * @returns
   */
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

  /**
   * Reverses the order of nodes in the linked list.
   * @returns
   */
  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.head = prevNode;
    return true;
  }

  /**
   * Searches for a node that satisfies the given condition specified by the callback function.
   * @param {*} callback
   * @returns
   */
  find(callback) {
    let currentNode = this.head;
    while (currentNode) {
      if (callback(currentNode.data)) {
        return currentNode.data;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }

  /**
   * Removes duplicate nodes from the linked list, keeping only the first occurrence of each unique data value.
   * @returns
   */
  removeDuplicates() {
    const uniqueValues = new Set();
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode) {
      if (uniqueValues.has(currentNode.data)) {
        // remove the current node from the list by updating the next pointer of the previous node.
        prevNode.next = currentNode.next;
      } else {
        uniqueValues.add(currentNode.data);
        prevNode = currentNode;
      }
      currentNode = currentNode.next;
    }
    return true;
  }

  /**
   * Creates a new linked list containing a subset of nodes from the original list, starting from the node at the startIndex and ending at the node before the endIndex.
   * @param {*} startIndex
   * @param {*} endIndex
   * @returns
   */
  slice(startIndex, endIndex) {
    if (startIndex < 0 || endIndex < startIndex || endIndex > this.size()) {
      return null;
    }

    const newList = new LinkedList();
    let currentIndex = 0;
    let currentNode = this.head;

    while (currentIndex < startIndex) {
      currentNode = currentNode.next;
      ++currentIndex;
    }

    while (currentNode && currentIndex < endIndex) {
      newList.append(currentNode.data);
      currentNode = currentNode.next;
      ++currentIndex;
    }

    return newList;
  }

  /**
   * Concatenates another linked list to the end of the current list, effectively appending all nodes from the other list.
   * @param {LinkedList} otherList
   * @returns {LinkedList}
   */
  concat(otherList) {
    if (!otherList || !otherList.size() || !otherList.head) {
      return this;
    }
    let otherNode = otherList.head;
    while (otherNode) {
      this.append(otherNode.data);
      otherNode = otherNode.next;
    }
    return this;
  }

  /**
   * Executes a provided function once for each node in the linked list.
   * @returns Array
   */
  toString() {
    let result = "";
    let currentNode = this.head;
    while (currentNode) {
      result += currentNode.data;
      if (currentNode.next) {
        result += `, `;
      }
      currentNode = currentNode.next;
    }
    return `[${result}]`;
  }

  /**
   * Executes a provided function once for each node in the linked list.
   * @param {*} callback
   * @returns
   */
  forEach(callback) {
    let currentNode = this.head;
    while (currentNode) {
      const update = callback(currentNode.data);
      currentNode.data = update;
      currentNode = currentNode.next;
    }
    return true;
  }

  /**
   * Creates a new linked list with the results of calling a provided function on every node in the linked list.
   * @param {*} callback
   * @returns
   */
  map(callback) {
    const list = new LinkedList();
    let currentNode = this.head;
    while (currentNode) {
      const data = callback(currentNode.data);
      list.append(data);
      currentNode = currentNode.next;
    }
    return list;
  }

  /**
   * Creates a new linked list containing nodes that satisfy the condition specified by the callback function.
   * @param {*} callback
   * @returns
   */
  filter(callback) {
    const list = new LinkedList();
    let currentNode = this.head;
    while (currentNode) {
      const filter = callback(currentNode.data);
      if (filter) {
        list.append(currentNode.data);
      }
      currentNode = currentNode.next;
    }
    return list;
  }

  /**
   * Applies a function against an accumulator and each node in the linked list to reduce it to a single value.
   * @param {*} callback
   * @param {*} initialValue
   * @returns
   */
  reduce(callback, initialValue) {
    let acc = initialValue;
    let currentNode = this.head;
    while (currentNode) {
      acc = callback(acc, currentNode.data);
      currentNode = currentNode.next;
    }
    return acc;
  }

  /**
   * Sorts the elements of the linked list using a specified sorting algorithm.
   * @param {Function} compareFn - A function used to compare elements for sorting.
   */
  sort(compareFn) {
    // Implementation of sorting algorithm (e.g., bubble sort, merge sort)
  }

  /**
   * Splits the linked list into two separate lists at a specified index.
   * @param {number} index - The index at which to split the list.
   * @returns {LinkedList[]} - An array containing the two separate lists.
   */
  split(index) {
    // Implementation
  }

  /**
   * Merges two sorted linked lists into a single sorted linked list.
   * @param {LinkedList} list1 - The first sorted linked list.
   * @param {LinkedList} list2 - The second sorted linked list.
   * @returns {LinkedList} - The merged sorted linked list.
   */
  static merge(list1, list2) {
    // Implementation
  }

  /**
   * Rotates the elements of the linked list by a specified number of positions.
   * @param {number} positions - The number of positions to rotate the list.
   */
  rotate(positions) {
    // Implementation
  }

  /**
   * Detects if the linked list contains a cycle.
   * @returns {boolean} - True if the linked list contains a cycle, false otherwise.
   */
  hasCycle() {
    // Implementation
  }

  /**
   * Finds the intersection point of two linked lists.
   * @param {LinkedList} list1 - The first linked list.
   * @param {LinkedList} list2 - The second linked list.
   * @returns {ListNode} - The intersection point, or null if there is no intersection.
   */
  static findIntersection(list1, list2) {
    // Implementation
  }

  /**
   * Flattens the linked list if it supports nested lists.
   */
  flatten() {
    // Implementation
  }
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append("foo#bar"), list.append(["foo", "bar"]);
list.append({ foo: "bar", bar: "foo" });
list.append(6);

const otherList = new LinkedList();
otherList.append("#1");
otherList.append("#2");
otherList.append("#3");
otherList.append("#4");
otherList.append("#5");

/**
 * methods implementation
 */
console.log({
  getHead: list.getHead(),
  getTail: list.getTail(),
  indexOf: list.indexOf([1, 2, 3]),
  size: list.size(),
  indexAt: list.getAtIndex(1),
  insertAtIndex: list.insertAtIndex(123123, list.size()),
  setAtIndex: list.setAtIndex(42, 1),
  // reverse: list.reverse(),
  removeDuplicates: list.removeDuplicates(),
  find: list.find((data) => cb(data, 42)),
  forEach: list.forEach(_cb),
  map: list.map(_cb),
  mapfx: list.map(_cb).toArray(),
  filter: list.filter((data) => {
    if (Number(data)) {
      return data;
    }
  }),
  reduce: list.reduce((acc, currentValue) => acc + currentValue, 0),
  toString: list.toString(),
  slice: list.slice(0, 2).toArray(),
  concat: list.concat(otherList),
});

console.log(list.toArray());

function cb(data, target) {
  return data === target;
}

function _cb(data) {
  if (Number(data)) {
    return data;
  }
  return data;
}
