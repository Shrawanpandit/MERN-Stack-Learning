let ar1=[9,10,11.12];
let ar2=[12,13];
// ... is spread operator also known as wrapper opener
let ar3=[8,...ar1];
console.log(ar3);

let ar4=[...ar1,...ar2];
console.log(ar4);

let  info1={name:"nitan",age:30};
let info2={address:"ktm"}
let info ={...info1,...info2}
    console.log(info);

