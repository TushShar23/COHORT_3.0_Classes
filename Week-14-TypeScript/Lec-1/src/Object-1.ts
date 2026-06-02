//OBJECT as an ARGUMENT 



const greet = (user:
    {   name:string,
        age:number
    }
):void=>{
    console.log(`Hello my name is ${user.name} and my age is ${user.age}`)
}

greet({name:"Tushar",age:22})



// OR

let user : {name:string,age:number} = {
    name:"Parth",
    age:22
}

// we have first defined the type of user explicitly(which is an object) after that we have defined the instance of that type

//now we can simply pass the user object

greet(user)

// These are not recommended ways but you can use the first one