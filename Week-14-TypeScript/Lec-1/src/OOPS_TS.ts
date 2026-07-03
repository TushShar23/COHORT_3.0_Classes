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
// INHERITANCE in TS

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

    // get and set are KEYWORDS.

}
// GETTERS and SETTERS are majorly used when we need to ACCESS VALUES which we can't DIRECTLY ACCESS.

const mc1 = new ModernChai();
mc1.Sugar = 4;
console.log(mc1);




// STATIC MEMBERS
// STATIC MEMBERS are accessed using CLASSNAME.Static members are associated with THE CLASS NOT with the OBJECT OF the class.

class StatExamp{
    static shopName = "ChaiCoffee Corner";

    constructor(public flavour: string){}
}

console.log(StatExamp.shopName);


// COMPOSITION IN TS.

class Heater{
    heat():void{}
}

class MakeChai{
    constructor(private heater: Heater){}

    make(){
        this.heater.heat()
    }
}

// heater's type is HEATER(class).SO whereever we use this member "heater" we can use the method of that class(HEATER)


// POLYMORPHISM
// Polymorphism is the ability of the same method or function to perform different actions depending on the object or arguments.

// 2 types 


// 1. METHOD OVERRIDING
class Animal{
    speak(): void{
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal{
    speak(): void{
        console.log("Dog Barks!");
    }
}

class Cat extends Animal{
    speak(): void {
        console.log("Cat Meows!");
    }
}

const d = new Dog();
d.speak();

const C = new Cat();
C.speak();
//Method overriding occurs when a subclass provides its own specific implementation of a method that is already defined in its parent class.


// 2. Method Overloading
//JavaScript does not support true method overloading, but it can be simulated by handling different numbers or types of arguments within a single function

class Calculator{
    add(a: number, b:number): number{
        if(b === undefined || a === undefined ){
            return a + a;
        }
        return a + b;
    }
}

const calc = new Calculator();
// console.log(calc.add(2)); 

// THIS IS NOT POSSIBLE IN TS AS we need to DEFINE THE TYPE OF OUR PARAMETERS.








