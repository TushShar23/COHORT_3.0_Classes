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


// UNKNOWN SIZE ARRAYS

let UnK_Arr: number[] = [];

// UnK_Arr.push("hey")
// as we have declared a number array we can't put string value in it.

UnK_Arr.push(88);
UnK_Arr.push(10);
UnK_Arr.push(94);
UnK_Arr.push(9);
UnK_Arr.push(3);
UnK_Arr.push(75);

UnK_Arr.pop();

console.log(UnK_Arr);
console.log(UnK_Arr[3]);



//There are ways through which we can declare arrays of unknown size.AND IN TS arrays contains ONLY SAME DATATYPE values unlike JS.