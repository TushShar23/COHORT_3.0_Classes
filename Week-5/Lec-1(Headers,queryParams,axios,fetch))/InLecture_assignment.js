const express = require('express');
const app = express();

app.get("/sum",(req,res)=>{
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const response = num1+num2;

    res.send({
        response
    })
})

app.get("/subtraction",(req,res)=>{
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const response = num1- num2;

    res.send({
        response
    })
})
app.get("/multiply",(req,res)=>{
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const response = num1*num2;

    res.send({
        response
    })
})
app.get("/division",(req,res)=>{
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const response = num1/num2;
    if(num2 === 0){
        res.json({Message:"Denominator can't be 0"})
    }
    else{
        res.send({
            response
        })
    }
})

app.listen(3000);