const threeSum = function(nums){
    let result = []
    nums.sort((a,b) => a-b)
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0) break
        if(i > 0 && nums[i] === nums[i-1]) continue
        let j = i + 1
        let k = nums.length - 1
        while(j < k){
            let sum = nums[i] + nums[j] + nums[k]
            if(sum === 0){
                result.push([nums[i], nums[j], nums[k]])
                while(j < k && nums[j] === nums[j+1]) j++
                while(j < k && nums[k] === nums[k-1]) k--
                j++
                k--
            }else if(sum < 0){
                j++
            }else{
                k--
            }
        }
    }
    return result

}

console.log(threeSum([-1,0,1,2,-1,-4])) // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([])) // []
console.log(threeSum([0])) // []
console.log(threeSum([0,0,0])) // [[0,0,0]]


//let result=[];
// nums.sort((a,b) => a-b)
// for(let i=0;i<nums.length;i++){
    
//     for(let j=i+1;j<nums.length;j++){
//         for(let k=nums.length-1;k>j;k--){
//             let temp=[];
//             if(nums[i]+nums[j]+nums[k] === 0){
//                 temp.push(nums[i],nums[j],nums[k])
//             }
//             if(temp.length !== 0){
//                 result.push(temp)
//             }
//         }
//     }
// }
// result = [...new Set(result.map(e => JSON.stringify(e)))].map(e => JSON.parse(e))
// return result;