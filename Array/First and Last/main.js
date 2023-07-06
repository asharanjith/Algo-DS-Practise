const searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left + right) / 2);
    let result = [-1, -1];
    while (left <= right) {
        if (nums[mid] === target) {
            result = [mid, mid];
            while (nums[result[0] - 1] === target) {
                result[0] -= 1;
            }
            while (nums[result[1] + 1] === target) {
                result[1] += 1;
            }
            return result;
        } else if (nums[mid] > target) {
            right = mid - 1;
            mid = Math.floor((left + right) / 2);
        } else {
            left = mid + 1;
            mid = Math.floor((left + right) / 2);
        }
    }
    return result;
}

console.log(searchRange([5,7,7,8,8,10], 8)) // [3,4]
console.log(searchRange([5,7,7,8,8,10], 6)) // [-1,-1]
console.log(searchRange([], 0)) // [-1,-1]


// let result=[-1,-1];
//     let count=0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]===target && count===0){
//             result[0]=i;
//             count++;
//         }
//         if(nums[i]===target && count>0){
//             count++;
//         }
//     }
//     if(count>0){
//         result[1]=result[0]+count-2;
//             }
//             return result;