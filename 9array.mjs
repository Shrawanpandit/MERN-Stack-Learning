let info =["nitan","ram","roshan",30,false];
// index 0,1,2,3,4
console.log(info);
console.log(info[  0]);
console.log(info[1]);
console.log(info[2]);
console.log(info[3]);
console.log(info[4]);

// we can add the value in the array at the begining and at the end of the array
info[2]="roshani"
console.log(info);
info.push("a")
info.push("b")
console.log(info);
// 
info.pop() // it will remove the last element of the array
console.log(info);

info.unshift("z") // it will add the element at the begining of the array
console.log(info);

info.shift() // it will remove the first element of the array
console.log(info);