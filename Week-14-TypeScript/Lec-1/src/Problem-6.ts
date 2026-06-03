// Make a field OPTIONAL in INTERFACE

interface User{
    name: string,
    age: number,
    address?:{
        city: string,
        country: string,
        pincode: number
    }
}
// IF you are making a whole field optional EITHER DON'T DEFINE IT or DEFINE IT FULLY as we can see in the address field we have made THE WHOLE ADDRESS FIELD OPTIONAL not its keys.IF WE try to put value in only 1 or 2 field compiler will GENERATE ERROR COZ either you define it fully or don't define at all.YOU CAN'T DO IT PARTIALLY until you define all the keys as OPTIONAL.

const printDet = (obj: User): void=>{
    console.table([obj.name,obj.age,obj.address])
}

// NOW MAKING INTANCES OF THIS INTERFACE

let user1: User = {
    name:"Tushar",
    age:22,
    address:{
        city:"Delhi",
        country:"India",
        pincode:123455
    }
}

let user2: User={
    name:"Naman",
    age:22
}

printDet(user1)
printDet(user2)



// " ? " AFTER A FIELD NAME depicts that the field is OPTIONAL
