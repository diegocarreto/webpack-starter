//Arrow functions 

let getId1 = () => 10 + 10;

let getId2 = (param) => {
    return 10 + 10 + param;
};

let getId3 = param => 10 + 10 + param;
let getId4 = (param1, param2 = 100) => 10 + 10 + param1 + param2;
let getId5 = (param = 10) => 10 + 10 + param;

console.log(getId1());
console.log(getId2(10));
console.log(getId3(50));
console.log(getId4(50));
console.log(getId5());