// Destructuring  Objects
let person = {
    id: 10,
    name: 'Axity'
};

let id, name;

({ id: ids, name } = person);

console.log('ids', ids);
console.log('name', name);