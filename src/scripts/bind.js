//bind 
let o = {
    personId: 123,
    otro: 10,
    getId: function (p1, p2) {

        return  `${p1} - Hola: ${this.personId} - ${p2}`;
    }
};

let newPerson = {

    personId: 406,
    otro: 20
};

let newFn = o.getId.bind(newPerson, 'uno', 'dos');

console.log(newFn());