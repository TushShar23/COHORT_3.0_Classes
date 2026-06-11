// we can define our own types using UNION

let subs: number | string = "1M";
subs = 1000;

// both will work


let apiRequestStatus: 'pending' | 'success' | 'error';
// we can give value at the time of declaration too.

apiRequestStatus = 'success';
// apiRequestStatus = 'done' this will give error coz we have only 3 valid types and "done" is not one of those.

console.log(apiRequestStatus);


let airLineSeat: 'aisle' | 'window' | 'middle' = "aisle";
// current type of airLineSeat is "aisle"

airLineSeat = 'window';
console.log(airLineSeat);

// ANY 

const orders = ['12','28','11','40','88'];

let currentOrder: string | undefined; // here if we don't define the type it takes as "ANY" which is a problematic thing

for (let order of orders) {
    if(order === '28'){
        currentOrder = order;
    }
}

console.log(currentOrder); // and here if we don't define the type above it takes as "strting | undefined" which is a problematic thing


// let currentOrder: string | undefined;

// This means that we are telling TS compiler ke "ya toh string aayegi ya undefined".WHY UNDEFINED ? WHAT IF THE GIVEN VALUE WILL NOT FOUND ? "then our variable contains UNDEFINED but we have already told TS that it's gonna be a string so that is why we need to give UNDEFINED type too"

