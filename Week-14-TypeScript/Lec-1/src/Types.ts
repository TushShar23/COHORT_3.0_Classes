// types are like interfaces but they will let you do a few other things too(like union,intersectoin)

import { templateLiteral } from "zod";

type user = {
    Fname:string,
    Lname:string,
    age:number
}

const greet = (obj : user):void =>{
    console.log(`Hey! ${obj.Fname}${obj.Lname},you are ${obj.age} years old`);
}
// in this function we have

greet({Fname:"Bat",Lname:"man",age:22})





// 1. UNIONS(union types allow a value to be one of several types (an OR relationship))
type SumInput = string | number;

function sum(a:SumInput, b:SumInput):SumInput{
    if(typeof(a)==="number" && typeof(b)==="number"){
        return a+b;
    }
    else{
        return String(a)+String(b)
    }
}
// Because TS do not know which will be the type of a and b at runtime that's why it was giving error when we were returning it simply ( return a+b ).We need to put conditions or need to do it some other way.
//TypeScript does not allow the "+" operator on a UNION TYPE unless it can prove the operation is safe.
//TypeScript forces you to remove the ambiguity first.This type-checking is one of the reasons TypeScript catches many bugs that plain JavaScript would allow.
// TYPESCRIPT SAYS : "If I'm not sure which type it is, I won't let you use operations that depend on knowing the type."

// THERE IS A DEDICATED WAY TO DO THE ABOVE WITHOUT CONDITIONAL CHECKS




// 2. INTERSECTION(intersection types combine multiple types into one (an AND relationship))
interface Employee{
    name:string,
    startDate:Date 
}
interface Manager{
    name:string,
    department:string
}

type TeamLead = Employee & Manager

let t:TeamLead = {
    name:"Harkirat",
    startDate:new Date(),
    department:"Human resources"
}

console.log(t,typeof(t))


// type of t : object of type TEAMLEAD
// Here Type TeamLead took the properties of both Employee and Manager


// WE CAN HAVE RECURSIVE TYPES TOO
type USER = {
    username:string,
    siblings:USER[]
}
