// simple demonstration how JWT works.
// here we storing users in memory

// when we signup it means user has been registered.When we signin backend send us a token which is like our identity card which we have to store secretly.In every request from a user that token is passed in request headers(cookies,token etc) to the backend and thatshow backend differentiates between the users.

const express = require('express');
const app = express();

const users = [];

function getToken(){
    let token="";

    const options =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"]

    for(let i=1;i<=32;i++){
        token=token+options[Math.floor(Math.random()*options.length)]
        // math.random generates a random number between 0 and 1 * options.length will generates number between 0 to length in decimals and then we took the floor value of that number.Ex - 22.11334 gives 22 only
    }
    //why 32 ? Because i want a 32 characters token.You can set any number according to the need but this logic is very naive for generating tokens.

    return token;
}

app.use(express.json())// used for parsing body data as post requests cannot access body data.

app.post("/signup",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username,
        password
    })

    res.json({
        "Message":"Signed Up successfully !"
    })

    console.log(users);

})

app.post("/signin",(req,res)=>{

    const username = req.body.username;
    const password = req.body.password;

    const userfound = users.find((u)=>{
        if(((u.username === username) && (u.password === password))){
            return u;
        }
    })//find will the return the whole object
    console.log(userfound)

    if(userfound){
        const userToken = getToken();
        userfound.token = userToken;// coz object is not freeze yet so can add as much properties we want to add.
        // we have pushed the token into that PARTICULAR USER OBEJCT.And now backend will send back the unique token of that user.

        res.json({
            "token":userToken
        })

        console.log(users);
    }
    else{
        res.send({
            "Message":"Invalid Username or Password"
        })
    }

})

// we will improve input validation through ZOD.

app.listen(3000);


