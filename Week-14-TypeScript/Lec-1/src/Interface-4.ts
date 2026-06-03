// Interface and classes

interface User{
    name: string;
    age: number;
}

class Manager implements User{
    name: string;
    age: number;
    department?: string;

    constructor(name: string,age: number, department: string){
        this.name = name;
        this.age = age;
        this.department = department
    }
}

//When you are implementing an interface to a class the MEMBERS OF THE INTERFACE HAS TO BE PRESENT IN THE CLASS,YOU CAN ADD MORE MEMBERS but THE INTERFACE MEMBERS HAS TO BE PRESENT in the CLASS.


let m1 = new Manager("Raman",34,"IT");
let m2 = new Manager("Deepika",42,"Sales");

console.table([m1,m2])