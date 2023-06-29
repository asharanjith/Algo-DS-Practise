const combinationSum = function(candidates, target){
    let result = [];
    let current = [];
    let index = 0;
    candidates.sort((a,b) => a-b);
    backtrack(candidates, target, index, current, result);
    return result;

}

const backtrack = function(candidates, target, index, current, result){
    if(target === 0){
        result.push([...current]);
        return;
    }
    if(target < 0){
        return;
    }
    for(let i = index; i < candidates.length; i++){
        current.push(candidates[i]);
        backtrack(candidates, target - candidates[i], i, current, result);
        current.pop();
    }
}


console.log(combinationSum([2,3,6,7], 7)); //[[2,2,3],[7]]
console.log(combinationSum([2,3,5], 8)); //[[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1)); //[]