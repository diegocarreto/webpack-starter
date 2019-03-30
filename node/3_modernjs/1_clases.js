class Person {

    constructor(name) {

        this.name = name;
    }

    greet() {

        console.log(`Hola persona ${this.name}`);
    }
}

class Student extends Person {

    constructor(name, level) {

        super(name);

        this.level = level;
    }

    greet() {

        console.log(`Hola estudiante ${this.name}`);
    }
}

let person = new Person ('PEDRO');
let student1 = new Student ('Diego','10');
let student2 = new Student ('Leo','20');

person.greet();
student1.greet();
student2.greet();

student2.greet = () => console.log('Axity!!');

student2.greet();