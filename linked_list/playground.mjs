import { LinkedList } from "./";

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
