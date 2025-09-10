// so here we will be creating all our routes.

const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const {UserModel,TodoModel} = require('./Db');// we exported our models remember.Here we will use those models to represent the specific collection
const JWT_SECRET = "sdjghahgohouhiuoas!@#U*^(&^(&$(HIHFIAH`2"

mongoose.connect("mongodb+srv://Tushar:kxzkEivZeOWOZtso@myprojectscluster.tztrggh.mongodb.net/Todo-app-database")
// till .net/ its your cluster address but after that you need to tell it which database you want to put data and all.

const app = express();

// this is authentication function means it will be called in all the routes/requests after user has signed in.

// we expect the token which we sent to the user when user signed in for future calls and response.
async function authentication(req,res,next){
    // coz we are making db calls so all these functions are async in nature.
    const token = req.headers.token;
    const decodeToken = jwt.verify(token,JWT_SECRET);
    console.log(decodeToken);

    try {
        const user = await UserModel.findOne({
            userId : decodeToken._id
        })

        console.log(user)

        if(user){
            // we have created a new field userId for populating req object
            req.userId = decodeToken._id
            // res.json({
            //     Message:"Inserted"
            // })
            console.log(req.userId)
            next();
        }
        else{
            res.status(403).json({
                Message:"Invalid credentials"
            })}

        } 
    catch (err) {
        console.error("Error:",err)
        res.status(500).json({
            Message:"Something went in authentication process"
        })

    }
    // user has signed in and he is requesting the let say all the todos
    
}

app.use(express.json())
// we will define 4 routes

app.post("/signup",(req,res)=>{

    const username = req.body.username;
    const role = req.body.role;
    const age = parseInt(req.body.age);
    const name = req.body.name;
    // we were first storing the data in the global array which was not the correct way as a BACKEND should be STATELESS.

   // we are using promises here but later we'll use async await

   // as we know database methods return promises so..

    UserModel.insertOne({
        username: username,// we cannot have same username users
        role: role,
        age: age,
        name: name
    })
    .then(()=>{
        res.json({
            Message:"User Signed Up successfully!"
        })
    })
    .catch((err)=>{
        console.error("Signing Up error: ",err);
        res.status(500).json({
            Message:"Something went wrong OR USER ALREADY EXISTS"
        })
    })


});

app.post("/signin",async(req,res)=>{
    // user signed up and now it is signing in means using its credentitals we will check whether user is in DB or not if it is then send TOKEN else not
    
    const username = req.body.username;

    try{

        const user = await UserModel.findOne({
            username: username
        })

        console.log(user);

        if(user){
            const Uid = user._id;// this is the userId but it is an object of class ObjectId of mongoDB we need to convert it to string
            const token = jwt.sign({
                id : Uid.toString()// now we have converted that ObjectId into string

                // this id attribute is nothing but the id provided by the database itself to identify unique user.
                // 
            },JWT_SECRET)
            res.json({
                token : token
            })
        }
        else{
            res.status(403).json({
                Message:"Invalid Credentials"
            })
        }
        
    } 

    catch(err){
        console.error("Signing in Error: ",err)
        res.status(500).json({
            Message:"Something went wrong"
        })
    }

    
});


// user needs to be authenticated first for putting todo.This is authentication request.
app.post("/todo",authentication,async(req,res)=>{
    // insert a todo.
    const title = req.body.title;
    const done = Boolean(req.body.done);
    const userId = req.body.userId 

    try {
        await TodoModel.insertOne({
            title: title,
            done: done,
            userId: userId
        })

        res.json({
            Message:"Todo inserted successfully"
        })

        
    } catch (error) {
        console.error("Error occured while inserting todo: ",err);
        res.json({
            Message:"Something went wrong while inserting todo"
        })
    }

    
})

// // user needs to be authenticated first for seeing all the todos.This is authenticated request
app.get("/todos",authentication,async(req,res)=>{
    const results = await TodoModel.find({
        uId: req.userId
    })

    res.json({
        results
    })
    
})

// In endpoints where we are authenticating user first AND ALSO IN AUTH MIDDLEWARE    WE NEED TO USE THE ORIGINAL ID THAT IS ObjectId datatype of mongoDb.See when we are SIGNING JWT we need to convert ObjectId into STRING but when we are authenticating WE NEED TO USE THE ORIGINAL ObjectId object else auth middleware gives error and SO in (REQ.USERID = DECODETOKEN._id),_id is the ORIGINAL ID given by the mongoDb to the user.



app.listen(3000,()=>{
    console.log("server started");
})