function addTraditional (var1, var2) {
    return var1 + var2;
}


// console.log(addTraditional(2,));

// ES6+ features
const add = (var1, var2) => {
   return (
        var1 + var2
   ); 
}

const addSingle = (var1, var2) => var1 + var2;

console.log(add(2,3));

const numSquare = num => num * num;

console.log(numSquare(5));