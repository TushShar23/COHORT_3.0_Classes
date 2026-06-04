
type GoodUser = {
    name: string;
    gift: string;
}

type BadUser = {
    name: string;
    IP_add: number;
}

type User = GoodUser | BadUser ;

let u1: User = {
    name:" Harkirat",
    gift: "Goodies",
    IP_add: 1235566
}



/*

Union (|)
= At least one of the types must match (one two or ALL)

Not:

Exactly one type must match
That's the key reason your code doesn't produce an error.



*/

// IF I WANT EXACTLY ONE TYPE

type GoodUser1 = {
    type: "good";
    name: string;
    gift: string;
}

type BadUser1 = {
    type: "Bad";
    name: string;
    gift: number;
}

type User2 = GoodUser1 | BadUser1; 

let u2: User2 = {
    type: "good",
    name: "Harkirat",
    gift: "Goodies",
    // IP_add: 1233454  ==> Object literal may only specify known properties, and 'IP_add' does not exist in type 'GoodUser1'
}
// WE HAVE USED "type" either good or bad in both the TYPES.THROUGH this we can select any one type of user.