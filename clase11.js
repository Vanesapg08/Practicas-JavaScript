let a = [0,1,"k","r",7,9,"j",0,9,7,4,1,1]; // [0,1,4,7,9]

a.sort(); 
console.log(a);

a.splice(2,4);
console.log(a);

a.splice(5,4);
console.log(a);

a.fill(1,1,2);
console.log(a);

a.fill(4,2,3);
console.log(a);
