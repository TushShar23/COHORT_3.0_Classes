// A greet function taking name as an input call after 1s
const DelayedCall = (fn) => {
    setTimeout(() => {
        fn();
    }, 1000);
};
const Greet = (FirstName) => {
    console.log(`Hey! ${FirstName}`);
};
DelayedCall(Greet("Tushar"));
export {};
