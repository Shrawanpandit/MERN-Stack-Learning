// let info =["nitan",65,false]
let info ={
    name:"nitan",
    weight:65,
    isMarried:false,
};
console.log(info);
console.log(info.name);
console.log(info.weight);
console.log(info.isMarried);
info.weight=60;
console.log(info);
info.address="kathmandu";
console.log(info);

delete info.name;
console.log(info);