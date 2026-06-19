// ARRAYS,ENUMS,TUPLES

// Array

// 1 simple array

const ChaiNames: string[] = ["Masala","Adrak"];
console.log(ChaiNames);
ChaiNames.push("Lemon");
console.log(ChaiNames);

const chaiPrices: number[] = [25,30,20];
console.log(chaiPrices);
chaiPrices.push(40);
console.log(chaiPrices);

// 2 Array of objects(mostly used)
type Regions = {
    City_name: string,
    area: string
}

const PunjabRegions: Regions[] = [
    {City_name: "Phagwara", area: "Malwa"},
    {City_name: "Amritsar" , area: "Majha"},
    {City_name: "Tarn Taran", area: "Majha"},
    {City_name: "Khemkaran Sahib" , area: "Majha"},
    {City_name: "Jalandhar", area: "Doaba"}
]

console.log(PunjabRegions);
PunjabRegions.push({City_name: "Beas" , area: "Doaba"});
PunjabRegions.push({City_name: "Moga", area: "Malwa"});
console.log(PunjabRegions);

// 3 In built Array object
const Ratings: Array<number> = [3.5,4.8,5.0,4.2];
console.log(Ratings);
Ratings.push(3.8);
console.log(Ratings);



// 4.READONLY ARRAY(can be defined but cannot be reassigned)

const cities: readonly string[] = ["Amritsar","Delhi"];
console.log(cities);
// cities.push("Pune") // This will give ERROR

// 5.Having two or three types of values in an array
type MyType = string | number;
const MixArr: MyType[] = ["Hello",2,89,"Tushar","Bonjour",23];
console.log(MixArr);
// MixArr.push(true);
// will not work coz MYType can ONLY HAVE EITHER "STRING" or "NUMBER"

MixArr.push("Hola!","Amigos");
MixArr.push(69,11);
console.log(MixArr);

// 6. MULTI DIMENSIONAL Array
const nums: number[][] = [
    [1,2,3],
    [4,5,6],
    [10,22,1]
]

console.log(nums);

// 7.Unknown size array
const noSize: number[] = [];
console.log(noSize);
noSize.push(12);
noSize.push(1);
noSize.push(32);
noSize.push(99);
noSize.push(84);
console.log(noSize);
noSize.push()
console.log(noSize);



// TUPLES
// a tuple is an array with fixed size and known datatypes."Mtlb ke agar humne likha hai ki [string,number,string] toh ORDER WISE 1st pe string value 2nd pe number value and 3rd pe string value bs 3 hi define kari hai toh 3 hi values aayengi"

// Declaration
const primaryColors: [string,string,string] = ["red","green","blue"];
console.log(primaryColors);
console.log(primaryColors[1]);
// "agar humne 3 types define ki hai ek tuple mei toh CORRESPONDING 3 values hi aayengi na zyada na kam"

const MixTup: [string,number] = ["Okinawa",101];
console.log(MixTup);
MixTup.push("Hello");
console.log(MixTup);

// console.log(MixTup[2]); 
// WE CANNOT ACCESS THE EXTRA ELEMENT BUT WE CAN PUT AN EXTRA ELEMENT IN A TUPLE BUT IT DOES NOT EXIST IN MEMORY 

let chaiTuple: [string,number];
chaiTuple = ["Masala",20]; // VALID ORDER
// chaiTuple = [25,"green"]; // Invalid ORDER

// OPTIONAL VALUE IN TUPLE
let userInfo: [string, number, boolean?];
userInfo = ["hitesh",42];
userInfo = ["Tushar",23,true];
// Boolean value is OPTIONAL 

// READONLY TUPLE
const location: readonly [number,number] = [38.67,23.88];
// location.push(90.76) we cannot do this coz its a readonly tuple

// NAMED TUPLE
const ChaiItems: [name: string, price: number] = ["Masala",20];
console.log(ChaiItems);
ChaiItems.push("Green",25);
console.log(ChaiItems);
// console.log(ChaiItems[2]); In memory there is nothing like ("Green" and 25)







