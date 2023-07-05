const maxArea = function(height) {
    let max = 0;
    for(let i = 0; i < height.length; i++) {
        for(let j = i+1; j < height.length; j++) {
            let area = Math.min(height[i], height[j]) * (j - i);
            if(area > max) max = area;
        }
    }
    return max;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7])) // 49
console.log(maxArea([1,1])) // 1


// let maxArea=0;
//     let right=height.length-1;
//     let left=0;
//     while(right>left){
//         currentArea=Math.min(height[left],height[right])*(right-left);
//         maxArea=Math.max(maxArea,currentArea);
//         height[left]<=height[right] ? left++ : right--;
//     }
//     return maxArea;