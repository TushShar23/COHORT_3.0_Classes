// create two types called user and admin,create a function that either takes user or admin as an input and returns a string saying "Welcome, [name]"

type User = {
    // type: "user"
    name: string,
    age: number,
    gender: string,
    isLoggedIn: boolean
}

type Admin = {
    // type: "admin"
    name: string,
    age: number,
    gender: string,
    _Id: number,
    permissions: string
}

type person = User | Admin;
// This is UNION(either or all) but when it comes to accessing properties we can access ONLY THOSE PROPERTIES WHICH EXISTS IN BOTH THE TYPES NOT IN ANY.But WE HAVE USED THE union TO DEPICT THE TYPE OF PERSON(user or admin)

const greet = (p: person):void=>{
    console.log(`Hello! ${p.name} and your age is ${p.age}`) // Both are common properties
}

greet({name:"Tushar",age:22,gender:"Male",isLoggedIn:true});// There will be no issue in this while passing the arguments 


// 

