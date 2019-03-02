//Prototype
function person(id) {

    this.personId = id;  
};

person.prototype.register = function () {
    
    console.log(`Register ${this.personId}`);
}; 

let person1 = new person(123);

person1.register();