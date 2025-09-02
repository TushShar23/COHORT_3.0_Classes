const express = require("express");
const fs = require("fs");
const { json } = require("stream/consumers");
const app = express();

app.use(express.json());
const todos = []

app.get("/",(req,res)=>{
    fs.readFile("mem.txt",'utf-8',(err,data)=>{
        if(err){
           res.status(404).send({
            "Error:":err
           })
        }
        else{
            res.send(JSON.parse(data))
        }
    })
})

app.get("/specifictodo/:newid",(req,res)=>{
    fs.readFile("mem.txt",'utf-8',(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(data);
            console.log(typeof(data));
            const newdata = JSON.parse(data)
            console.log(newdata)
            console.log(typeof(newdata))
            console.log(newdata.length)
            console.log(newdata[1]["id"])
            const newID = parseInt(req.params.newid);
            console.log(newID);
            
            newdata.filter((element)=>{
                if(element.id === newID){
                    res.send(element)
                }
            })
        }
    })
})


// so what i was doing i have created .txt file to save data which is ok but the data i am saving is JSON so when i was fetching the data it was doing OK but was creating that JSON into string version and in between fetching and sending the data i was not converting that data back into JSON.Thatswhy i was not getting the appropriate data format.

app.post("/",(req,res)=>{
    const todo = req.body.todo;
    const id = req.body.id;

    todos.push({
        todo,
        id
    })
    
    fs.writeFile("mem.txt",JSON.stringify(todos),(err)=>{
        if(err){
            res.json({
                err
            })
        }
        else{
            res.json({
                "Message:":"TODO ADDED SUCCESSFULLY !"
            })
        }
    })

})
app.listen(3000);