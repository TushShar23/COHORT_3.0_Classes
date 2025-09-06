const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "KJOAHTeihaoghodjaojgojkadgJ@$k";
const app = express();


const users=[];

app.use(express.json());

app.post("/signup",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const age = req.body.age;
    const Dob = req.body.Dob;
    const first_name = req.body.first_name;

    users.push({
        username,
        password,
        first_name,
        age,
        Dob
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
    const Dob = req.body.Dob;
    const first_name = req.body.first_name;
    
    const Userfound = users.find((u)=>{
        if(u.username == username && u.password == password && u.first_name == first_name){
            return u;
        }
    })

    if(Userfound){
        const token = jwt.sign({
            username
        },JWT_SECRET) // we have signed/generated a token with the JWT_Secret key.WE HAVE ONLY ENCODED THE USERNAME BUT WE CAN GIVE AS MUCH PAYLOADS/PROPERTIES WE WANT TO ENCODE AND COZ WE GAVE IT AN OBJECT IT RETURNS AN OBJECT WHEN DECODED.

        res.send({
            token
        })
    }
    else{
        res.send({
            "Message":"Invalid username or password"
        })
    }

    console.log(users)
})


app.get("/me",(req,res)=>{
    // we need to decode the jwt now for authentication
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token,JWT_SECRET);// It returns the object as we provided it an object for encoding

    // we will authenticate user with its username and then returns back its firstname and DOB as response

    const username = decodedInfo.username;
    const userfound = users.find((u)=>{
        if(u.username == username){
            return u;
        }
    })

    if(userfound){
        res.json({
            "username" : userfound.username,
            "First Name" : userfound.first_name,
            "Date Of Birth" : userfound.Dob
        })
    }

})

app.listen(3000,()=>{
    console.log("Server Started\n");
})
