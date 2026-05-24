function loaded(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Loaded")
        },2000); //data will printed after 2 sec
    })
}  

async function dataLoaded(){
    const data = await loaded(); //wait for result
    console.log(data);
}
dataLoaded();