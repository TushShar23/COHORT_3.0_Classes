// so here we will be creating all our routes.

const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const {UserModel,TodoModel} = require('./Db');// we exported our models remember.Here we will use those models to represent the specific collection

const app = express();

app.use(express.json())
app.use(cors())
// we will define 4 routes

app.post("/signup",async(req,res)=>{
    const username = req.body.username;
    const role = req.body.role;
    const age = parseInt(req.body.age);
    const name = req.body.name;
    // we were first storing the data in the global array which was not the correct way as a BACKEND should be STATELESS.

});

app.post("/signin",);


// user needs to be authenticated first for putting todo
app.post("/todo",)

// user needs to be authenticated first for seeing all the todos
app.get("/todos",)