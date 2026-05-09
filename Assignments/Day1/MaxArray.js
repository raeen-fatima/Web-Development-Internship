//Find Maximum Number Using Reduce()

const Numbers = [2,4,6,8,10,12,14];

const maxNum = Numbers.reduce((max, current) => {
    if(current > max){
        return current;
    }else{
        return max;
    }
});

console.log("Maximum Number: ", maxNum);