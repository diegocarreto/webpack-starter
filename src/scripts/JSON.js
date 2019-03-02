//JSON

let person = [{

    id: 100,
    age: 33
},
{
    id: 102,
    age: 34
}];

let json = JSON.stringify(person);

console.log(json);

let obj = JSON.parse('[{"id":100,"age":33},{"id":102,"age":34}]');

console.log(obj);