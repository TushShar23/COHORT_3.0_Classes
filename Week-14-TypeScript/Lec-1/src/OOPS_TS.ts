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


// Access Modifiers in TS
// They are also available in JS

// 1. PUBLIC(access anywhere)
// 2. PRIVATE(limited to class ONLY)
// 3. PROTECTED(mainly use in Inheritance)

class MeriChai{
    public flavor: string = "Masala";

    private SecretIngredient: string = "Cardamom";

    // PRIVATE MEMBER cab only be accessed WITHIN THE SAME CLASS and for that we create a method inside the same class so that user can use that METHOD.

    reveal(){
        return this.SecretIngredient;
    }

    protected ShopName: string = "ChaiCorner";

}

const c = new MeriChai(); // We are not taking any value from user so thatswhy no need to pass any value.

const val = c.reveal(); // c can't access this property but there is a method inside the class which can access this property and object can access this method.
console.log(val);
