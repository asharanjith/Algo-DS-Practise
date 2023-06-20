const finalValueAfterOperations = function(operations) {
    let result = 0;
    for(let i=0; i<operations.length; i++){
        if(operations[i] === "++X" || operations[i] === "X++"){
            result++;
        }else{
            result--;
        }        
    }
    return result;
};

console.log(operations(["--X","X++","X++"])) //1
console.log(operations(["++X","++X","X++"])) //3
console.log(operations(["X++","++X","--X","X--"])) //0