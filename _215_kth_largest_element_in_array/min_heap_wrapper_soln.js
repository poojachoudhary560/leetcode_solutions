class MinHeap {
  constructor() {
    this.values = [];
  }

  add(val) {
    this.values.push(val);
    this.bubbleUp(this.values.length - 1);
  }

  bubbleUp(idx) {
    const parentIdx = Math.floor((idx - 1) / 2);
    let max = idx;
    if (parentIdx >= 0 && this.values[parentIdx] > this.values[max]) {
      max = parentIdx;
    }
    if (max !== idx) {
      this.swap(max, idx);
      this.bubbleUp(max);
    }
  }

  remove() {
    this.swap(0, this.values.length - 1);
    const min = this.values.pop();
    this.trickleDown(0);
    return min;
  }

  swap(i, j) {
    [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
  }

  trickleDown(idx) {
    const leftChildIdx = 2 * idx + 1;
    const rightChildIdx = 2 * idx + 2;
    let min = idx;
    if (
      leftChildIdx < this.values.length &&
      this.values[leftChildIdx] < this.values[min]
    )
      min = leftChildIdx;
    if (
      rightChildIdx < this.values.length &&
      this.values[rightChildIdx] < this.values[min]
    )
      min = rightChildIdx;
    if (min !== idx) {
      this.swap(min, idx);
      this.trickleDown(min);
    }
  }
}

class MinHeapWrapper {
  constructor(capacity) {
    this.capacity = capacity;
    this.minHeap = new MinHeap();
  }
  addWrapper(val) {
    this.minHeap.add(val);
    if (this.minHeap.values.length > this.capacity) {
      this.minHeap.remove();
    }
  }
}
var findKthLargest = function (nums, K) {
  let minHeapWrapper = new MinHeapWrapper(K);
  for (let n of nums) minHeapWrapper.addWrapper(n);
  return minHeapWrapper.minHeap.remove();
};

let nums = [3, 2, 1, 5, 6, 4];
findKthLargest(nums, 2);
