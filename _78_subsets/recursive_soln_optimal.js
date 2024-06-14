/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var helper = function(nums, index, subset, res) {
    if(index === nums.length) {
        res.push([...subset]);
        return;
    }
    subset.push(nums[index]);
    helper(nums, index+1, subset, res);

    subset.pop();
    helper(nums, index+1, subset, res);
}
var subsets = function(nums) {
    let subset = [];
    let res = [];
    helper(nums, 0, subset, res);
    return res;
};