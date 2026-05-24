function login (name, callback){ //main function
    console.log("Hello " + name);
    callback() //executes passed function
} 
function dashboard() { //callback function
    console.log("Wecome to the Dashboared");
}

login("Raeen" , dashboard);