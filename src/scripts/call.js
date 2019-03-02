//call 
let o = {
    personId: 123,
    otro: 10,
    getId: function () {

        return this.personId + this.otro;
    },
    getOtro: function () {
        
        return this.personId;
    }
};

let newPerson = {

    personId: 406,
    otro: 20
};

console.log(o.getId.call(newPerson));
console.log(o.getOtro.call(newPerson));