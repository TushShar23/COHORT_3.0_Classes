//<T> is a generic placeholder that allows you to write code which works with any type while preserving type safety.

// partial,required,readonly and pick

// PARTIAL
// PARTIAL constructs a type with ALL properties of Type set to OPTIONAL. 

type Chai = {
    name: string,
    price: number,
    IsHot: boolean
}

const UpdateChai = (updates: Partial<Chai>)=>{
    console.log("Updating Chai with ",updates);
}

UpdateChai({name: "Masala", price: 25, IsHot: true});
UpdateChai({price: 25, IsHot: true});
UpdateChai({price: 25});
UpdateChai({name: "Ginger", price: 25});
UpdateChai({IsHot: false});
UpdateChai({})

// See WE HAVENT PUT "?" optional sign but ALL THE PROPERTIES OF Chai has become  OPTIONAL for THIS METHOD.EVEN we can pass AN EMPTY OBJECT.

// REQUIRED
// Constructs a type consisting of all properties of Type set to required. The opposite of Partial.

type ChaiOrder = {
    name?: string,
    quantity?: number
}

const PlaceOrder = (order: Required<ChaiOrder>)=>{
    console.log(order);
}

PlaceOrder({name: "Masala", quantity: 2});

// SEE we have put "?"(optional sign) in the TYPE CHAIORDER BUT "REQUIRED" keyword made ALL THE PROPERTIES NECESSARY/REQUIRED for this method.


//READONLY
//Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.

type Todo  ={
    _id: number
    title: string,
    _IsDone: boolean,
}

const todo1: Readonly<Todo> = {
    _id: 10,
    title: "Make notes",
    _IsDone: false
}

// todo1.title = "Complete homework"; this will give error coz we have ALREADY INITIALISED all the properties and now WE CANNOT REASSIGNED.


// PICK
// Pick<T, K> creates a new type containing only the selected properties.Mainly we use this for further creating NEW TYPES(from selecter properties which we have defined in the Pick<T, K> here k = union of properties )
type NewChai = {
    name: string,
    price: number,
    _IsHot: boolean,
    Ingredients: string[]
}

type BasicChaiInfo = Pick<NewChai,"name" | "price">;

const ChaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 20,
}

// mostly yahi use hote hai bs

/**
 
Partial
↓
Keep ALL fields
Make them OPTIONAL


Pick
↓
Choose SOME fields
Keep them REQUIRED



 */


//OMIT
// just the opposite of PICK.Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals) "mtlb humne jo specify ki property woh nhi select karni aur sab karni hai lekin"

type ChaiNew = {
    name: string,
    price: number,
    _IsHot: boolean,
    SecretIngredients: string[]
}

type PublicChai = Omit<ChaiNew, "SecretIngredients">;

const SabkiChai: PublicChai = {
    name: "Masala Chai",
    price: 20,
    _IsHot: true,
    // SecretIngredients: ["jdkgalg",ajag] this will give error
}
console.log(SabkiChai);

// We cannot put SECRETIngredients PROPERTY inside this COZ we have omitted that property in our new TYPE PUBLICCHAI







