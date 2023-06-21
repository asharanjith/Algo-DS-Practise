const maximumWealth = function(accounts) {
    let wealth=0;
    for(let i=0; i<accounts.length; i++){
        let sum=0;
        for(let j=0;j<accounts[i].length;j++){
            sum+=accounts[i][j];
        }
        if(sum>wealth){
            wealth=sum;
        }
    }
    return wealth;
};

console.log(maximumWealth([[1,5],[7,3],[3,5]])); // 10
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]])); // 17
console.log(maximumWealth([[1,2,3],[3,2,1]])); // 6