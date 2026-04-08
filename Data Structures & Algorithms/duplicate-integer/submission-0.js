class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsLength = nums.length;
        const numsSet = new Set(nums);

        return numsSet.size !== numsLength;
    }
}
