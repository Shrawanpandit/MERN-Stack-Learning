//map loop
let ar1=[10,20,30]
let ar=ar1.map((item,i)=>{
return item*i;

});
console.log(ar)

//
let a2=[10,20,30];
let a3=a2.map((item,i)=>{
    return item*2;
});
console.log(a3);


//[20,30,10,5]-> [40,60,0,0]
let a4=[20,30,10,5];
let a5=a4.map((item,i)=>{
    if(item>18){
        return item*2;
    }else{
        return item*0;
    }});
console.log(a5);