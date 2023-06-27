const differenceOfSum = function(nums) {
    let total=0;
    let numberSum=0;
    for(let i=0;i<nums.length;i++){
        total=total+nums[i];
        let output = [];
        let sNumber = nums[i].toString();
        for (let j = 0, len = sNumber.length; j < len; j += 1) {
            output.push(+sNumber.charAt(j));
        }
        let sum = 0
        for (let k = 0; k < output.length; k++){
            sum+=output[k];
        }
        numberSum+=sum;
    }
    let diff=Math.abs(total-numberSum);
    return diff;
};

console.log(differenceOfSum([123, 6, 7, 12, 5, 89, 2])); // 101
console.log(differenceOfSum([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 45
console.log(differenceOfSum([12, 13, 14])); // 12
console.log(differenceOfSum([10, 20])); // 1