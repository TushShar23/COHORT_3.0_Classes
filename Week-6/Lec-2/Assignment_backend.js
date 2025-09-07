const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "123jwjdhfa0tu113qjhf2342@$$@@$@%@%@e";

const app = express();


const users=[];


//signup,signin(send token),me,auth

function auth(req,res,next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token,JWT_SECRET);

    if(decodedData.username){
        req.username = decodedData.username;
        req.First_name = decodedData.First_name;
        req.Last_name = decodedData.Last_name;
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
    next();
}


app.use(express.json());
app.use(cors());


//signup
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


// signin
app.post("/signin",logger,(req,res)=>{
   const username = (req.body.username).trim();
    // const password = req.body.password;
    // const userId = req.body.userId;
    const First_name = (req.body.First_name).trim();
    const Last_name = (req.body.Last_name).trim();

    const userfound = users.find((u)=>{
        if(u.username == username && u.First_name == First_name && u.Last_name == Last_name){
            return u;
        }
    })
    console.log(userfound)
    if(userfound){
        const token = jwt.sign({
            username,
            First_name,
            Last_name
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
        if(u.username == req.username && u.First_name == req.First_name && u.Last_name == req.Last_name){
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
    else{
        res.send({
            "Message":"Invalid First or Last name"
        })
    }
})


app.delete("/logout",(req,res)=>{
    const token = req.headers.token;
    const decodedTokenforDeletion = jwt.verify(token,JWT_SECRET);

    users = users.filter((user)=>{
        user.username !== decodedTokenforDeletion.username
    })
    // this will create a new array in which all the data will be pushed except that user who logged out.

    res.send({
        "Message":"User Logged Out!"
    })

    console.log(users)
})


app.listen(3000,()=>{
    console.log("Server Started");
})


// Edge cases

/*

1) we do not only check the username we should also check the name else anyone with the same username(for this app only) can see the other users infor with same username.

2) There could be 2 cases when signin whether the user signed up or not OR might be putting wrong credentials.



*/