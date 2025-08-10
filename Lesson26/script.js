class student {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let OBJ1 = new student("Riya", 2014);
let OBJ2 = new student("Ryan", 2008);

document.getElementById("student1").innerHTML =
    "My name is " + OBJ1.name + ". I was born in " + OBJ1.year + ". And my age is " + OBJ1.age();

document.getElementById("student2").innerHTML =
    "My name is " + OBJ2.name + ". I was born in " + OBJ2.year + ". And my age is " + OBJ2.age();