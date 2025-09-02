// whenever we say that make this functionality promisified it means just wrap the actual function inside a promise and then execute that thing.Ek function/async function ko cleaner,syntactically sugary way mei dikha diya bs.

// *********************** whenever we define or make a promise object we pass the callback to it which is mandatory that callback is the main function which is doing the async task mtlb ki us callback mei hmara main operation ho raha hai/chal raha hai.uske baad jo bhi hoga woh hum resolve ya reject mei bhejh denge ********************.

// resolve and reject are predefined functions provided by js engine.we don't need to write all this but we can.what ever we pass in resolve or reject data as argument it will be printed/get to the callback(in .then(),.catch())

// we can define the anonymous callback function inside or outside the promise constructor but outside it will not be an anonymous function anymore.


// Promisified versionof readfile function

//readfile(file,encode,callback which shows the extracted data)
const fs = require("fs");
const rdline = require("readline");

function readData(resolve){
    const val = fs.readFile('random.txt','utf-8',(err,data)=>{
        if(err){
            resolve(`File not found ! : ${err}`);
        }
        else{
            resolve(data);
        }
    })
}

function readFilePromisified(){
    return new Promise(readData);// readData is a callback
}

function ShowContent(data){
    console.log(data);
}



const pr = readFilePromisified();

pr.then(ShowContent);


// settimeout promisified

function readdata(resolve){
    setTimeout(resolve);//means after 3 seconds settimeout calls the resolve function and resolve transfer it to the callback which we want to run.
}

function setTimeoutPromisified(){
    return new Promise(readdata);//this function contains the real operation
}

function callback(){
    console.log("SettimeoutPromisified runs after 3 seconds");
}

const Nprm = setTimeoutPromisified();
Nprm.then(callback);






// we can also make it TIME GENERIC
function genericsettime(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    });
}
function callback2(){
    console.log("This is a generic time promisified version of setTimeOut");
}

const NewGenPrm = genericsettime(5000);
NewGenPrm.then(callback2);





