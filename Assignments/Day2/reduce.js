let num = [1,2,3,4,5];

//sum of array 

const sum = num.reduce((sum, current) => {
    return sum + current;
})
console.log(sum);