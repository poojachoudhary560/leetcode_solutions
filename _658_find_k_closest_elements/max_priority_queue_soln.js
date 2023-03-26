/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
class MaxPriorityQueue1 {
  constructor() {
    this.values = [];
  }

  add(data) {
    this.values.push(data);
    this.bubbleUp(this.values.length - 1);
  }

  bubbleUp(idx) {
    let maxId = idx;
    let parentIdx = Math.floor((idx - 1) / 2);
    if (
      parentIdx >= 0 &&
      this.values[parentIdx].priority < this.values[maxId].priority
    ) {
      maxId = parentIdx;
    }
    if (maxId !== idx) {
      this.swap(maxId, idx);
      this.bubbleUp(maxId);
    }
  }

  remove() {
    this.swap(0, this.values.length - 1);
    let maxEl = this.values.pop();
    this.trickleDown(0);
    return maxEl;
  }

  swap(i, j) {
    [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
  }

  trickleDown(idx) {
    let leftChildIdx = 2 * idx + 1;
    let rightChildIdx = 2 * idx + 2;
    let maxId = idx;
    if (
      leftChildIdx < this.values.length &&
      this.values[leftChildIdx].priority > this.values[maxId].priority
    ) {
      maxId = leftChildIdx;
    }
    if (
      rightChildIdx < this.values.length &&
      this.values[rightChildIdx].priority > this.values[maxId].priority
    ) {
      maxId = rightChildIdx;
    }
    if (idx !== maxId) {
      this.swap(idx, maxId);
      this.trickleDown(maxId);
    }
  }
}

class Wrapper {
  constructor(capacity) {
    this.capacity = capacity;
    this.minPQ = new MaxPriorityQueue1();
  }
  addWrapper(item) {
    this.minPQ.add(item);
    if (this.minPQ.values.length > this.capacity) {
      this.minPQ.remove();
      console.log(this.minPQ);
    }
  }
  getData() {
    return this.minPQ.values.map((item) => item.val);
  }
}

var findClosestElements = function (arr, k, x) {
  let wrapper = new Wrapper(k);
  for (let i = 0; i < k; i++) {
    wrapper.addWrapper({
      val: i,
      priority: Math.abs(arr[i] - x),
    });
  }
  for (let i = k; i < arr.length; i++) {
    let diff = Math.abs(arr[i] - x);
    if (wrapper.minPQ.values[0].priority > diff) {
      wrapper.minPQ.remove();
      wrapper.addWrapper({
        val: i,
        priority: diff,
      });
    }
  }
  let indexes = wrapper.getData();
  let res = indexes.sort((a, b) => a - b);
  return res.map((i) => arr[i]);
};
