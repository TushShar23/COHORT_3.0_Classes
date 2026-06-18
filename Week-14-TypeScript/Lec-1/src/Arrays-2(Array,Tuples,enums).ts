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

