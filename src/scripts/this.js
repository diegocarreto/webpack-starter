//this 
let o = {
    personId: 123,
    getId: function(){

        return this.personId;
    }
};

console.log(o.getId());