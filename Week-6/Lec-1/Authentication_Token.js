// Here we are doing real authentication we have created signup/,signin/ and a get request route.When user signups then signs in.When sign in user gets a token back from the server and then on get request we will show the username and its password using that token.

//TOKEN VS JWTs

const express = require('express');
const app = express();

function getToken(){
    let token = "";

    const options =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"]

    // 32 chars long token

    for(let i=1;i<=32;i++){
        token = token + options[Math.floor(Math.random() * options.length)]
    }

    return token;
}

const users = [];

app.use(express.json()) // coz we send data in body and post request will not able to parse the data if don't use body parser.

app.post("/signup",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const age = req.body.age;

    users.push({
        username,
        password,
        age
    })

    res.send({
        "Message":"Signed up successfully !"
    })

    console.log(users);
})

app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const age = req.body.age;

    const userFound = users.find((u)=>{
        if(u.username == username && u.password == password && u.age == age){
            return u;
        }
    })

    if(userFound){
        const userToken = getToken();
        userFound.token = userToken;
        
        res.json({
            userToken
        })
    }
    else{
        res.json({
            "Message":"Invalid username or password"
        })
    }
    
    console.log(users)

})

app.get("/me",(req,res)=>{
    // we send tokens in headers
    const token = req.headers.token;
    const Ufound = users.find((u)=>{
        if(u.token == token){
            return u;
        }
    })
    console.log(Ufound)

    if(Ufound){
        res.json({
            Username : Ufound.username,
            Password : Ufound.password
        })
    }
})

app.listen(3000);