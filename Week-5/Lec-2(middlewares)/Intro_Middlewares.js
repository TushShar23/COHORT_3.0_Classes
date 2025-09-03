const express = require('express');
const app = express();

let requestCounter = 0;

function requestIncreaser(req,res,next){
    requestCounter = requestCounter + 1;
    console.log(`Total no of request that has been served = ${requestCounter}`);

    if(req.params.b > 5){
        next(); // runs only if the second argument is greater than 5.
    }
    else{
        res.json({
            Message : "Request ended"
        })
    }
    // Next() will run the next handler/middleware.In this case getSum().We define some conditions based on which next() runs in real life scenarios.
}

function getSum(req,res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const ans = a+b;

    res.send({
        ans
    })
}

app.get("/sum/:a/:b",requestIncreaser,getSum);

app.listen(3000,()=>{
    console.log("Server is started");
})


