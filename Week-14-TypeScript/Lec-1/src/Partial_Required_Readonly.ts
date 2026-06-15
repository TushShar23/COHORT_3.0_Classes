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

// See WE HAVENT PUT "?" optional sign but ALL THE PROPERTIES OF Chai has become  OPTIONAL.EVEN we can pass AN EMPTY OBJECT.



