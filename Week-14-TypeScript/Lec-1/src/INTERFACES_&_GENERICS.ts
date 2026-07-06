// INTERFACES

interface Chai{
    flavour: string,
    price: number,
    milk?: boolean
}

const Mychai: Chai = {
    flavour: "Masala",
    price: 30,
    milk: true
}

const OtherChai:  Chai = {
    flavour: "Green",
    price: 40
}

interface shop{
    readonly ShopNo: number,
    name: string
}

const s: shop = {
    ShopNo: 2331,
    name: "Mahasheya di hatti"
}
// s.ShopNo = 1234 this will generate error


// FUNCTIONS AND INTERFACES
// we cannot define any function inside the INTERFACE but we can DECLARE inside it

// 1.
interface DiscountCalc{
    (price: number): number
}

const apply50: DiscountCalc = (p) => {
    return (p * 0.5)

}

const discPrice = apply50(30);
console.log(discPrice);


// 2.
interface TeaMachine{
    start(): void,
    stop(): void
}

const MyteaMach: TeaMachine = {
    start(){
        console.log("start");
    },
    stop(){
        console.log("stop");
    }
}
/*

This does not create an object.

It only says:

"Any object of type TeaMachine must have these methods."


An interface only defines the contract (method signatures), while the object or class provides the actual implementation of those methods.


const MyTeaMach: TeaMachine = {
    start() {
        console.log("start");
    },
    stop() {
        console.log("stop");
    }
};

Here you're saying:

"Create an object and make sure it satisfies the TeaMachine interface."

TypeScript checks:

Does it have start()? ✅
Does it have stop()? ✅

So it's valid.


An interface is conceptually very similar to an abstract class, but there are differences.

Interface
↓
Defines the contract

Abstract Class
↓
Defines the contract + can provide shared code

Polymorphism
↓
Different classes/objects follow the same contract but behave differently




So yes, interfaces and abstract classes are both tools used to achieve polymorphism, but they are not the same thing. The interface defines what must be done, while polymorphism is the ability to use different implementations through that common contract.

abstract class TeaMachine {
    abstract start(): void;
    abstract stop(): void;
}

This also forces child classes to implement these methods.

But an abstract class can also provide some implementation:

abstract class TeaMachine {
    abstract start(): void;

    clean() {
        console.log("Cleaning...");
    }
}

Interfaces cannot do that.

Interface      = Rules only
Abstract Class = Rules + Some Code
Polymorphism   = Same interface, different behavior


*/