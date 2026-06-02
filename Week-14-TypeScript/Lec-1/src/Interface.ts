// Intro to interfaces

import { number } from "zod"

// Interfaces are mainly used to create a custom datatype other than the primitives

interface UserObj{
    First_name:string,
    Last_name:string,
    IsLoggedIn:boolean,
    age:number
}

const ShowDet = (user:UserObj):void=>{
    if(user.IsLoggedIn){
        console.log(`${user.First_name} ${user.Last_name} is Logged in whose age is ${user.age}`)
    }
    else{
        console.log(`${user.First_name} ${user.Last_name} is not Logged in whose age is ${user.age}`)
    }
}

const greet = (user:UserObj):void=>{
    console.log(`Hello,${user.First_name} ${user.Last_name}`)
}


ShowDet({First_name:"Tushar",Last_name:"Sharma",IsLoggedIn:true,age:22})
greet({First_name:"Tushar",Last_name:"Sharma",IsLoggedIn:true,age:22})

ShowDet({First_name:"Rahul",Last_name:"Bhadana",IsLoggedIn:false,age:22})
greet({First_name:"Rahul",Last_name:"Bhadana",IsLoggedIn:true,age:22})




