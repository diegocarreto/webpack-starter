//Array

//***********Reduce

// var result = [1,2,3,4,5,6].reduce((before, after) => before + after);

// console.log(result);

//***************** */

let persons = [
    { personId: 123, age: 10, name: 'Javier' },
    { personId: 321, age: 20, name: 'Rodriguez' },
    { personId: 231, age: 30, name: 'Olvera' }
];

// persons.forEach(p => console.log(p));

// let result = persons.filter(p => p.age > 10);

// console.log('result', result);

// *******************************

// let result = persons.map(p => {
//     p.age = p.age * 10;

//     return p;
// });

// console.log('result', result);

// ********************************

// let result = persons.find(p => p.age > 10);

// console.log('result', result);

// ********************************

// let result = persons.every(p => p.age > 0);

// console.log('result', result);


// ********************************

let result = persons.filter(p => p.age > 10)
                    .map(p => {
                        p.age = p.age * 10;

                        return p;
                    })
                    .find(p => p.age > 10);

console.log('result', result);

