// OBJECT

// PLAIN OBJECT

let tea: {
    name: string,
    price: number,
    isHot: boolean
}

// let myTea: tea = {

// }
// we cannot do this it will create error ==> {'tea' refers to a value, but is being used as a type here. Did you mean 'typeof tea'?} "hum tea ko datatype ki tarah use nhi kar sakte kyoki woh ek object hai"

tea = {
    name: "ginger tea",
    price: 25,
    isHot: true
}

// TYPE and OBJECT

type Tea = {
    name: string,
    price: number,
    ingredients: string[]
}

const myTea: Tea = {
    name: "Adrak chai",
    price: 30,
    ingredients: ["ginger","tea leaves"]
}

console.log(myTea);

// STRUCTURAL TYPING
type Cup = {
    size: string
}

let smallCup: Cup = {size: "200ml"}

let BigCup = {size: "500ml", material: "Steel"};

console.log(smallCup);

smallCup = BigCup; // assigned an undefined object to a defined(type) object

console.log(BigCup);
console.log(smallCup);

// THIS IS WHAT STRUCTURAL TYPING IS.

// Cup structure is MAINTAINED in BigCup(size is present means structure is maintained) and doesn't matter at all what other properties we have added in that.BARE MINIMUM PROPERTY(s) is/are present in BigCup.BUT WE CANNOT GIVE THAT TYPE TO THE OBJECT/VARIABLE we are defining coz it has a structure AND WE ARE ADDING NEW PROPERTIES IN OUR OBJECT which will give error

type User = {
    username: string,
    password: string
}

// let u1: User = {
//     username: "Gagan"
// } this will give error coz BARE MINIMUM properties are not satisfied/defined

let u2: User = {
    username: "Tushar",
    password: "234"
}
// No error

console.log(u2);

let u3 ={
    username: "Naman",
    password: "445566",
    age: 23,
    Gender: "Male"
}

console.log(u3);

let u4: User ={
    username: "Naman",
    password: "445566",
}

console.log(u4);

u4 = u3 ; // NO ERROR coz bare minimum properties are there.Assigned an undefined OBbject into a defined(type) object.

console.log(u4);


// DATA SPILTTING
// This is just a practise which engineers/developers do for clarity

type Item = {name: string, quantity: number};
type Address = {Street: string, Pin: number};

type Order = {
    _Id: number,
    _items: Item[],
    Del_Address: Address
}

const o1: Order = {
    _Id: 994123,
    _items: [{name: "Chicken Kurkure Momos", quantity: 2},{name: "Chicken Shawarma", quantity: 5},{name: "Lebanese Chicken", quantity: 4}],
    Del_Address: {Street: "24 street,near cambridge apartments", Pin: 908234}
}

function showOrder(order: Order){
    console.log(order);
}
showOrder(o1);


