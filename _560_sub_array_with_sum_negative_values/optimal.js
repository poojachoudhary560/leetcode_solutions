// class Solution {
//     public int subarraySum(int[] nums, int k) {
//         HashMap<Integer, Integer> map = new HashMap<>();
//         int current_sum = 0;
//         int count = 0;
//         for(int num : nums) {
//             current_sum += num;

//             if(current_sum == k) {
//                 count++;
//             }
//             if(map.containsKey(current_sum - k)) {
//                 count += map.get(current_sum - k);
//             }
//             if(map.containsKey(current_sum)) {
//                 map.put(current_sum, map.get(current_sum) + 1);
//             } else {
//                 map.put(current_sum, 1);
//             }
//         }
//         return count;
//     }

// }
