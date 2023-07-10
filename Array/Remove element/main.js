const removeElement = function(nums, val) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }
    return count;
    
};

removeElement([3,2,2,3], 3) // 2, nums = [2,2]
removeElement([0,1,2,2,3,0,4,2], 2) // 5, nums = [0,1,4,0,3]
removeElement([1], 1) // 0, nums = [1]