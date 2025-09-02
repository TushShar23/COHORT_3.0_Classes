// HERE WE WILL SEE WHAT IF AN ERROR HAPPENED INSIDE THE ASYNC FUNCTION WHAT DOES PROMISE DO THEN ? (using readFileasyncPromisified)

const fs = require("fs");
function ReadFilePrmsfd(){
    return new Promise((resolve,reject)=>{
        fs.readFile('random.txt','utf-8',(err,data)=>{
            if(err){
                reject("File not found !");
            }
            else{
                resolve(data); 
            }

            // we are sending some msge in reject function which will be transferred to .catch() but what we should send in resolve() YES the DATA THAT HAS BEEN READ 
        })
    })
};

ReadFilePrmsfd()
.then((data)=>{
    console.log(`File has been read : ${data}`);
})
.catch((error)=>{
    console.log(`Error Occured : ${error}`);
})

// so as we discussed promise constructor takes 2 functions as input resolve and reject.when our async operation completes successfully we call resolve() but what if it doesn't then we call the reject() and reject is handled by .catch() and this takes a function as input too.
