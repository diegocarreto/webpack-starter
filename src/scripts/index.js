//ECMA ES6

// class Person {

//     constructor(id, name) {

//         this.id = id;
//         this.name = name;
//     };

//     getName(suffix){

//         return `${suffix} ${this.name}`;
//     }
// };

// let person = new Person(1, 'diego');

// console.log(person);
// console.log(person.getName('Hola'));

/****************** Herencia ****************** */

// class Engine {

//     constructor() {

//         this.type = 'Hibrid';
//     }
//     start() {

//         return `Starting: ${this.type}`
//     }
// }

// class Car extends Engine {

//     constructor() {

//         super();
//     }

//     start() {

//         return super.start(); // `Car to start ${this.type}`
//     }
// }

// let car = new Car();

// console.log(car.start());