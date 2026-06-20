// OOPS IN TS

// CLASSES

class Chai{
    flavour: string;
    price: number;

    constructor(flavour: string, price: number){
        this.flavour = flavour;
        this.price = price;

        console.log(this);
    }
}

const masalaChai = new Chai("Masala",20); // new object created
console.log(masalaChai);

