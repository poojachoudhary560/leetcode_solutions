class MinHeap {
  constructor(capacity) {
    this.values = [];
    this.capacity = capacity;
  }

  add(val) {
    this.values.push(val);
    this.bubbleUp(this.values.length - 1);
    if (this.values.length > this.capacity) {
      this.remove();
    }
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

var findKthLargest = function (nums, K) {
  let minHeap = new MinHeap(K);

  for (let n of nums) minHeap.add(n);

  return minHeap.remove();
};
