// Interface and functions


interface People{
    name: string,
    age: number,
    greet: ()=>string // this is how we declare a function inside an interface with its signature
}

let person: People = {
    name:"Harkirat",
    age:30,
    greet:()=>{
        // console.log("Hey there!!") this line will generate error coz return type is string not VOID
        return "Hey there!"
    }
}
const msge: string = person.greet()

console.log(msge,person,typeof(person));
