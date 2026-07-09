// GENERICS : kind of GENERAL FUNCTION


function WrapInArray<T>(item: T): T[]{
    return [item];
}

// string type
const r1 = WrapInArray("Masala");
const r2 = WrapInArray("Chai");
// const r7 = WrapInArray("Hello","World") ** THIS WILL GIVE ERROR coz we are returing only 1 item and same for the following cases.

// number type
const r3 = WrapInArray(23);
const r4 = WrapInArray(25);

// Object type
const r5 = WrapInArray({Flavor: "Ginger"});
const r6 = WrapInArray({Flavor: "Lemon"});

console.log(r1,r2,r3,r4,r5,r6);

// ye sab sirf ek hi value return karenge kyoki humne sirf ek item return ki hai.YE ADD NHI HOGA.IT IS JUST A SIMPLE ARRAY OF ONE ITEM



// MULTIPLE ITEMS

function pair<A,B>(a: A,b: B): [A,B]{
    return [a,b];
    /// CANNOT WRITE [b,a] COZ WE HAVE ALREADY SPECIFIED the return format [A,B]
}
// BOTH DATATYPES CAN BE SAME.

const p1 = pair("Key","value");
const p2 = pair("Masala",20);
const p3 = pair("Tea",{flavor: "Ginger"});
// const p3 = pair("Tea",{flavor: "Ginger"},30); INCORRECT coz we are returning only TWO THINGS.

console.log(p1,p2,p3);



