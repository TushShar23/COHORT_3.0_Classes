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

// what if on some handler i dont want to use middleware or requestIncreaser() function

app.get("/admin",(req,res)=>{
    res.json({
        Message:"Hello admin"
    })
});

app.use(requestIncreaser);// now the function has been registered in middleware stack and whenever request comes it checks first then pass it to handler
// after this app.use() every request will pass through this middleware thatswhy i wrote /admin before it coz i dont want to increaserequest count

app.get("/sum/:a/:b",requestIncreaser,getSum);


app.listen(3000,()=>{
    console.log("Server is started");
})


// It wont work coz middleware is first registered before getting request so express does not know which handler is requested thatswhy in Increase() it is giving empty object.So thatswhy we see request ended always

// THIS PROGRAM IS JUST FOR DEMONSTRATING THE USE OF APP.USE() AND THE USECASE /ADMIN 
