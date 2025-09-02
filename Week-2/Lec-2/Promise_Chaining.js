// callback hell
// Q: Write code that

//     logs hi after 1 second

//     logs hello 3 seconds after step 1

//     logs hello there 5 seconds after step 2

setTimeout(()=>{
    console.log('hi');
    setTimeout(()=>{
        console.log("hello");
        setTimeout(()=>{
            console.log("Hello there");
        },5000)
    },3000)
},1000);

// this above code is callback hell and for that promises were introduced.Promises are not the justified reason but async/await are.You can avoid callback hell for the above example without using promise.THIS INDENTATION IN CALLBACK HELL IS CALLED PYRAMID OF DOOM.

// problem statement states that you need to print hi after 1 sec and then within next 3 sec hello and then within next 5 sec hello there.



// Now promise chaining
function SetTimeoutPrm(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    });
}

SetTimeoutPrm(1000).then(()=>{
    console.log("hi");
    return SetTimeoutPrm(3000);
})
.then(()=>{
    console.log("hello");
    return SetTimeoutPrm(5000);
})
.then(()=>{
    console.log("hello there");
})

// we first call the settimeprm(1000)and it returns a promise and then .then() will execute the function after 1 sec hi printed and then it returns a new promise with 3000 and then .then() prints then hello and so on ....

//this is called promise chaining

 