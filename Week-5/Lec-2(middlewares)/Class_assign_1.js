// Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console.

const express = require('express');
const app = express();

function logger(req,res,next){
    console.log(`Request method is : ${req.method}`);
    console.log(`Request URL is : ${req.url}`);
    console.log(`Request Host is : ${req.hostname}`);
    console.log(`Reques time is : ${new Date().getMinutes()}`);

    next();
}
app.use(logger);

app.get("/",(req,res)=>{
    res.send({
        Message:"Hello,your request has been served"
    })
})

app.listen(3000);


// Request method is : GET
// Request URL is : /
// Request Host is : localhost ( local server)
// Reques time is : 8