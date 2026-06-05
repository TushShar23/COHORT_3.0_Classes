// Arrays in TS

let numbersArr : number[] = [1,2,3,4,5];
let charArr : string[] = ["Hey","L","k","j","P"];

console.log(numbersArr)
console.log(charArr)

console.log(numbersArr[3]);
console.log(charArr[4]);


// Array as an argument

const maxNum = (arr: number[]):number=>{
    let maxVal: number = -1000000000;
    for(let i: number = 0;i<arr.length;i++){
        if(arr[i] > maxVal){
            maxVal = arr[i];
        }
    }
    return maxVal
}

const res: number = maxNum([1,10,12,45,33,100,200,678]);

console.log(res)

// APPLICATION
// a user can have multiple addresses

interface Address{
    city: string,
    pincode: number
}

interface User{
    name: string,
    age: number,
    address: Address[]
}

let user1: User = {
    name: "Harkirat",
    age: 30,
    address:[
    {
        city: "Delhi",
        pincode: 1100342
    },
    {
        city: "Chandigarh",
        pincode: 1234556
    },
    {
        city: "San Francisco",
        pincode: 12344566
    },
    {
        city: "Kyoto",
        pincode: 9900112
    }
    ]
}

console.log(user1)

//There are ways through which we can declare arrays of unknown size.AND IN TS arrays contains ONLY SAME DATATYPE values unlike JS.