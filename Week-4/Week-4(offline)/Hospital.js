// Here we are gonna make a simple backend server for a hospital game kind of thing using in memory variable

// we are assuming that there is only 1 user

const express = require("express");
const app = express();

const user = [{
    userName:"John",
    kidneys:[{
        healthy:false
    }]
}]

app.use(express.json()); // this is a middleware for fetching body in post request

// we will create get,post,put,delete methods/handlers

// get will get all the data from server and show it to user
app.get("/",(req,res)=>{
    const TotalKidneys = user[0].kidneys.length;
    //now we want to show how many healthy,unhealthy and total kidneys user have total= kidlist
    const healthy = user[0].kidneys.filter((kidneys)=>{
        if(kidneys.healthy==true){
            return kidneys;
        }
    })
    const healthyKidneys = healthy.length;
    const unhealthyKidneys = TotalKidneys - healthyKidneys;

    res.json({
        TotalKidneys,
        healthyKidneys,
        unhealthyKidneys
    })
}) // working fine


// post will create a new healthy kidney
app.post("/",(req,res)=>{
    //okay so we need to take userinput here.
    const isHealthy = req.body.isHealthy;
    const kidList = user[0].kidneys;
    kidList.push({
        healthy:isHealthy
    })

    res.json({Message:"Done!"})
})

// put will replace all the unhealthy kidneys with healthy kidneys
app.put("/",(req,res)=>{
    const unhealthyKidTohealthy = user[0].kidneys.map((kid)=>{
        if(kid.healthy==false){
            kid.healthy=true;
        }
    })

    res.json({Message:"DONE!"})
})

//delete method deletes all the kidneys

app.delete("/",(req,res)=>{
    user[0].kidneys=[];
    res.json({Msge:"Deleted successfully"})
})
app.listen(3000);
