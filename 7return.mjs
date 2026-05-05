let info =()=>{
    console.log("a");
    return "b";
    console.log("c"); //this will not be executed because of return statement
};
let i=info();
console.log(i)
/*
function without return
fun()
function with return
let f=fun();
*/ 