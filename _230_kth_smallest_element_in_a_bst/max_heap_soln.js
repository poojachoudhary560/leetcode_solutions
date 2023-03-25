/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
class MaxHeap {
  constructor() {
    this.values = [];
  }

  add(val) {
    this.values.push(val);
    this.bubbleUp(this.values.length - 1);
  }

  bubbleUp(idx) {
    let max = idx;
    let parentIdx = Math.floor((idx - 1) / 2);
    if (parentIdx >= 0 && this.values[parentIdx] < this.values[max]) {
      max = parentIdx;
    }
    if (max !== idx) {
      this.swap(max, idx);
      this.bubbleUp(max);
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
      this.values[leftChildIdx] > this.values[maxId]
    ) {
      maxId = leftChildIdx;
    }
    if (
      rightChildIdx < this.values.length &&
      this.values[rightChildIdx] > this.values[maxId]
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
    this.maxHeap = new MaxHeap();
  }

  addWrapper(item) {
    this.maxHeap.add(item);
    if (this.maxHeap.values.length > this.capacity) {
      this.maxHeap.remove();
    }
  }
}
var helper = function (node, wrapper) {
  if (node === null) return;
  wrapper.addWrapper(node.val);
  if (wrapper.maxHeap.values.length > wrapper.capacity) {
    wrapper.maxHeap.remove();
  }
  helper(node.left, wrapper);
  helper(node.right, wrapper);
};

var kthSmallest = function (root, k) {
  let wrapper = new Wrapper(k);

  helper(root, wrapper);
  return wrapper.maxHeap.remove();
};
