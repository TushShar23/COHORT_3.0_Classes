// Functions in TS

function ChaiOrder(type: string, cups: number){
    console.log(`Make ${cups} cups of ${type} Chai`);
}

ChaiOrder("Masala",2);

function getChaiPrice(type: string): number{
    if(type === 'Masala'){
        return 20;
    }
    else if(type === 'Lemon'){
        return 25;
    }
    else{
        return 30;
    }
}

const LemonChaiPrice: number = getChaiPrice("Lemon");
const GreenTeaPrice: number = getChaiPrice("Green Tea");

console.log(LemonChaiPrice);
console.log(GreenTeaPrice);

// Not specified the return type of the function coz we are returning TWO TYPES null and string.SO HOW DO WE KNOW WHICH WILL BE RETURNED.

//  we can use type for this but..(type RetType = null | string;)

function makeOrder(order: string){
    if(!order) return null;
    return order;
}

//Logger function

function logChai(): void{
    console.log("Hello,Chai is ready");
}

logChai();


// DEFAULT AND OPTIONAL PARAMETER

// 1. use "?" to make optional
function Myorder(type?: string){
    return type;
}

// 2 giving DEFAULT VALUE
function Myorder2(type: string = "Masala"){
    return type;
}
// Here if we don't provide any type's value then the DEFAULT VALUE will be "MASALA"

Myorder();
Myorder("Green Tea");

// DIFFERENT WAY 

function CreateChai(order: {
    type: string,
    _no_of_Sugar: number,
    size: "Small" | "Large" // default parameter
}): number{
    return 4;
}

// OR

type Order = {
    type: string,
    _no_of_Sugar: number,
    size: "Small" | "Large"
}

function CreateChai2(order: Order): Order{
    return order;
}

const numberOrder: number = CreateChai({type: "Masala", _no_of_Sugar: 2, size: "Small"});
console.log(numberOrder);

const ObjOrder = CreateChai2({type: "Green Tea", _no_of_Sugar: 2, size: "Large"});
// By TS inference ObjOrder's Type is "Order"
console.log(ObjOrder);