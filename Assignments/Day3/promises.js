const result = new Promise((resolve, reject)=>{
    let marks = 75;
   if(marks > 40){
    resolve(" marks is greater then 40");
   }
   else {
    reject("marks is less then 40")
   }

});

result.then((message) =>{
    console.log(message);
})
.catch((error) => {
    console.log(error)
})