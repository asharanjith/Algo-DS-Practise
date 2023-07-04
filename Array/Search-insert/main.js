const searchInsert = function(nums, target) {
    let index=nums.length;
    for(let i=0;i<nums.length;i++){
        if(target===nums[i] || nums[i]>target){
            index=i;
            break;
        }   

    }

    return index;
};

console.log(searchInsert([1,3,5,6], 5)); // 2
console.log(searchInsert([1,3,5,6], 2)); // 1
console.log(searchInsert([1,3,5,6], 7)); // 4