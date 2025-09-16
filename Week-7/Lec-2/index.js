const express = require('express');
const jwt= require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const {UserModel,TodoModel} = require('./db1');
const JWT_SECRET = "@#$%%&YTHLKHOALIHGFOHAIO*())()*(!@#@&*$&*$12424515";

mongoose.connect("mongodb+srv://Tushar:kxzkEivZeOWOZtso@myprojectscluster.tztrggh.mongodb.net/Todo-app-database")

const app = express();


async function authentication(req,res,next){
    const token = req.headers.token;
    const TokenDecode = jwt.verify(token,JWT_SECRET);
    
    const user = await UserModel.findOne({
        _id:TokenDecode.id
    })
    console.log(user)
    
    if(user){
        req.userId = TokenDecode.id
        console.log(req.userId)
        // we have populated req object with userId property.
        next()
    }
    else{
        res.status(403).json({
            Message:"Invalid Credentials"
        })
    }
}


app.use(express.json());

app.post("/signup",async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    // we have 2 methods in bcrypt for hashing password - hash(),genSalt(plaintext,hashing rounds,callback(err,salt))

    //using promisified approach
    // bcrypt.genSalt(5)
    // .then((salt)=>{
    //     console.log(`${salt}`);  
    //     return bcrypt.hash(password,salt)            
    // })
    // .then(async(hashedPassword)=>{
    //     await UserModel.insertOne({
    //     email: email,
    //     password: hashedPassword,
    //     name: name
    //  })
    //  // here we have made the callback an async function coz of DB call
    // })
    // .catch((err)=>{
    //     console.error(err);
    // })

    try {
        const hashedPassword = await bcrypt.hash(password,5); // autogenerates the hash and salt

        await UserModel.insertOne({
            email: email,
            password: hashedPassword,
            name: name
        })
        // though writing this is not a good practise.
        res.json({
            Message:"User signed up successfully"
        })
        
    } catch (error) {
        console.error("Error while putting data into DB.");
    }

    
   
    

    // we can use try catch to handle errors while using async/await


    // PASSWORD IS STORED IN THE HASH FORM.
    
})

app.post("/signin",async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    // we are using password coz we are demonstrating the use of bcrypt algo

    const response = await UserModel.findOne({
        email: email
    })
    console.log(response);

    if(!response){
        res.status(403).json({
            Message:"User does not exist in our DB"
        })
        return
    }
    else{
        const passwordMatch = await bcrypt.compare(password,response.password);

        if(passwordMatch){
            const token = jwt.sign({
                id: response._id.toString() // as we are signing a jwt
            },JWT_SECRET)
            res.json({
                token: token
            })
        }
        else{
            res.json({
                Message:"Incorrect Credentials"
            })
        }
    }

    // This route is working too.Returning us the token

})

app.post("/createTodo",authentication,async(req,res)=>{
    const title = req.body.title;
    const done = Boolean(req.body.done);
    const userId = req.body.userId;

    await TodoModel.insertOne({
        title: title,
        done: done,
        userId : userId
    })
    res.json({
        Message:"Todo inserted successfully!"
    })
})



app.get("/todos",authentication,async(req,res)=>{
    const userTodos = await TodoModel.find({
        userId: req.userId
    })
    
    res.json({
        userTodos
    })

    console.log(userTodos)
})


app.listen(3000,()=>{
    console.log("Server Started")
})



// see use the same field names you have defined in the collection else there will be some glitch not error.