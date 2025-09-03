// Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it

const express = require('express');
const app = express();

let counter=0;

function IncreaseRequestCounter(req,res,next){
    counter = counter + 1;
    next();
}


app.get("/requestcount",(req,res)=>{
    res.send({
        Message : `No.of requests that has been served : ${counter}`
    })
})

app.use(IncreaseRequestCounter);

app.listen(3000);

// so whenever we hit the localhost requestcounter will increase but when we hit /requestcount route only then the no.of requests will be shown coz i wrote the app.use() after the route.