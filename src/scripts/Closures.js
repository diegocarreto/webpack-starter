//Closures 
// let app = (function () {

//     let personId = 123;

//     return function (num) {

//         return personId + num;
//     };

// })();

// console.log(app(1));


function sumarIva(change) {

    return function name(amount) {

        return change * amount;
    };
}

let iva = sumarIva(.16);

console.log(iva(20));
console.log(iva(30));
console.log(iva(40));