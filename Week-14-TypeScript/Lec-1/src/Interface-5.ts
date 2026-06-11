// we can implement type with class

type TeaRecipe= {
    water: number;
    milk: number;
}

class myChai implements TeaRecipe{
    water = 2;
    milk = 3;
}
// see no error 

// Error comes when we have defined a custom datatype in a type

type CupSize = "small" | "large"; // union type

// class meriChai implements CupSize{
//     // A class can only implement an object type or intersection of object types with statically known members. THIS ERROR IS COMING
// }

interface cupSize{
    size: "small" | "large";
}

class meriChai implements cupSize{
    size: "small" | "large" = "small" ; // now its OK
}

// ALWAYS USE "interfaces" with classes

// UNION AND INTERSECTION

// union
type TeaType = "masala" | "ginger" | "black"; // These are called "literal types"

function TeaOrder(t:TeaType){
    console.log(t);
}

// intersection
type BaseChai = {No_tea_leaves: number};
type ExtraIngrd = {masalaPouch: number};

type myTea = BaseChai & ExtraIngrd;

const tea: myTea={
    No_tea_leaves: 2,
    masalaPouch: 1
}

console.log(tea);

// OPTIONAL VALUES

type User={
    username: string,
    bio?: string,
}

const u1: User = {username:"George"}
const u2: User = {username:"Philip",bio:"philip.ai"}
// Both works

console.log(u1,u2);


// ********** MOST IMPORTANT **************

// READ ONLY VALUES

type config={
    readonly appName: string
    version: number
}

const cfg: config={
    appName: "MyApp",
    version: 1
}

// cfg.appName = "myApp2" 

// will give error coz we are assigning value into read only type
// WE CAN ASSIGN A VALUE in READ ONLY TYPE ONLY "ONCE"






