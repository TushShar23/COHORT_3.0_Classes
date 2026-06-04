// You can have default implementation of a method(s) inside an abstract class but not in an interface


 abstract class User{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    abstract greet():string// greet():string

    PrintDet(){
        console.log(this.name);
        console.log(this.age);
    }
 }

// class can only extends another class be it an abstract class
class Employee extends User{
    constructor(name: string,age: number){
        super(name,age)
    }

    /*
    If the parent class constructor already sets name and age, then you do not need to do it again in the child class.

    super(...) already initializes the parent fields
        ↓
    Don't assign them again

    If the parent constructor handles the initialization, let it do the work. That's one of the main benefits of inheritance.

    When would you need this.name = name?

    Only if the parent constructor doesn't initialize those properties.
    
    
    */

    greet(): string {
        return (`Hello! ${this.name}`);
    }
}


let u1 = new Employee("Tushar",22);
console.log(u1);

u1.PrintDet()

const msge: string = u1.greet()
console.log(msge);


