// Whether the user is legal or not
const Islegal = (age) => {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
};
if (Islegal(19)) {
    console.log("Yes!,user is 18+");
}
else {
    console.log("No!,user is underage");
}
export {};
// we can specify the RETURN TYPE OF THE FUNCTION
// (age:number):boolean THIS LINE TELLS THAT THE FUNCTION'S RETURN TYPE IS "Boolean"
