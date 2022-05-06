// 169. Majority Element
// Moore's Voting Algorithm

class Solution {
    public int majorityElement(int[] nums) {
        int count = 0;
        int candidate = 0;
        for(int num: nums) {
            if(count == 0) {
                candidate = num;
            }
            if(candidate == num) count += 1;
            else count -= 1;
        }
        return candidate;
    }
}