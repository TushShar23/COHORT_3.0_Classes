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
// 3. PROTECTED(mainly use in Inheritance)/STAFF DOOR ENTRY

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

const val = c.reveal(); // c can't access this property directly but there is a method inside the class which can access this property and object can access this method.
console.log(val);


// PROTECTED

class Shop{
    protected shopName = "ChaiCorner";

}

class myShop extends Shop{
    getName(){
        return this.shopName;
    }
}

const s1 = new myShop();
const res = s1.getName();
console.log(res);



// TS SUPPORTS JS FORMATS

// # = represents private field in JS but TS also supports this

class Wallet{
    #balance = 1000;

    getBalance(){
        return this.#balance; // THIS is how we access private fields declared using "#"
    }
}

const w = new Wallet();
const bal = w.getBalance();
console.log(bal);

// RECOMMENDED to use "traditional access modifiers like PUBLIC,PRIVATE and PROTECTED"

// READONLY PROPS

class Cup{
    readonly Capacity: number = 250;

    constructor(capacity: number){
        this.Capacity = capacity;
    }
}

const cupSize = new Cup(500);
console.log(cupSize);

// why i am able to reassign IN READONLY PROPERTY ?
// The property can be assigned only once — either at declaration or inside the constructor.

/*

Why is constructor assignment allowed?

Because when the object is being created:

const cup = new Cup(500);

the property hasn't been finalized yet.

TypeScript allows:

constructor(capacity: number) {
    this.Capacity = capacity;
}

as the initial assignment.

After construction finishes:

cup.Capacity = 1000;

❌ Not allowed.


*/


// GETTERS and SETTERS(Gateways)
class ModernChai{
    private _Sugar = 2; // its a convention to use _ with private field
    
    get Sugar(){
        return this._Sugar;
    }

    set Sugar(value: number){
        if(value > 5) throw new Error("Too Sweet! Not good for health"); // IT will throw an error when the "value" exceeds 5
        this._Sugar = value;
    }

}

const mc1 = new ModernChai();
mc1.Sugar = 4;
console.log(mc1);






