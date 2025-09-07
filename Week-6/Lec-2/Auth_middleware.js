//In lecture assignment to create a auth middleware that ends the request if the user is not logged in.

// sol - we know if a user is signed in means he/she has a token so we will verify the token and on that basis we send the response.


const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const JWT_SECRET = "aklsjdgahogh12341i";
const app = express();

const users=[];

function auth(req,res,next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token,JWT_SECRET);

    if(decodedData.username){
        req.username = decodedData.username;
        // we have added a userId property in req object as we need to pass the same decoded data to the next() means /me handler.SO we manipulate the request object and added a new property 
        next()
    }
    else{
        res.send({
            Message:"User not Logged In"
            // kyoki agar user ka decoded token match nhi hua mtlb user ne signin hi nhi kiya hai.
        })
    }
}

function logger(req,res,next){
    console.log(`${req.method} request came`);
    next() // calls the next middleware.
}
// dekh bhai auth tabhi call hoga jab /me route pe request jaayegi means hume token milega uss user ka aur woh hum yaha pe decode kar lenge.

app.use(express.json());
app.use(cors());


app.post("/signup",logger,(req,res)=>{
    const username = (req.body.username).trim();
    // const password = req.body.password;
    // const userId = req.body.userId;
    const First_name = (req.body.First_name).trim();
    const Last_name = (req.body.Last_name).trim();

    users.push({
        username,
        First_name,
        Last_name
       
    })// we have pushed the user[i] object into the users array of objects.

    res.send({
        Message:"User signed up successfully!"
    })

    console.log(users);
})

// we can also do without CORS 
/* 

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
    // this will serve your html file directly from the backend.This is also a jugaad you can serve your file from backend as well.
})

*/

app.post("/signin",(req,res)=>{
   const username = (req.body.username).trim();
    // const password = req.body.password;
    // const userId = req.body.userId;
    const First_name = (req.body.First_name).trim();
    const Last_name = (req.body.Last_name).trim();

    const userfound = users.find((u)=>{
        if(u.username == username){
            return u;
        }
    })
    console.log(userfound)
    if(userfound){
        const token = jwt.sign({
            username
        },JWT_SECRET)

        res.send({
            token
        })
    }
    else{
        res.send({
            Message:"Invalid username or password"
        })
    }
})

app.get("/me",logger,auth,(req,res)=>{
    
    const userfound = users.find((u)=>{
        if(u.username == req.username){
            return u;
        }
    })
    if(userfound){
        res.send({
            "username":userfound.username,
            "First_name":userfound.First_name,
            "Last_name":userfound.Last_name
        })
    }
})


// console.log(app.router.stack);

app.listen(3000,()=>{
    console.log("Server Started");
})





// here we have created a auth middleware whenever request comes on the /me endpoint first it will be first handled by auth() then comes to the main handler if it allows( in this we have manipulated/updated the req object which is a function of a middleware ).

// THINGS TO NOTICE:

// 1) If a user token is undefined/invalid after signin it gives an error to the user.
//2) auth middleware is checking if a user is logged in or not if it is logged in only then it passes the request to the main handler else stop the req-res cycle.
