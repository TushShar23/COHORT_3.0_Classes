// Interfaces can use other interfaces

interface Address{
    city: string,
    country: string,
    pincode: number
}

interface User{
    name: string,
    age: number,
    address: Address // here we have used interface in another interface
}

interface Office{
    Floor?: number,
    ParkingAvail?: boolean,
    NoOfEmp?: number,
    address: Address // again we have used interface in another interface
}


// SO DOING THIS WILL NOT VIOLATE THE "DRY(don't repeat yourself)" PRINCIPLE.

