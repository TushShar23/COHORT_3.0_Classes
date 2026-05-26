// Function that takes another function as input and run it after 1s
const DelayedCall = (fn) => {
    setTimeout(() => {
        fn();
    }, 1000);
};
DelayedCall(() => {
    console.log("Hey there,I am an async function!!");
});
export {};
// fn:()=>void THIS is how we give a function as an input to another function.This means that this function expects a function as an input which returns nothing(void)
