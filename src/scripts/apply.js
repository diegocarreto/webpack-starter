//apply 
let o = {
    personId: 123,
    otro: 10,
    getId: function (title, action) {

        return  `${title} - ${this.personId} - ${action}`;
    }
};

let newPerson = {

    personId: 406,
    otro: 20
};

console.log(o.getId.apply(newPerson,['Person','Oops']));