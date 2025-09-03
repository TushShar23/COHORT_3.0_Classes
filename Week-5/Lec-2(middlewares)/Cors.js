const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors());
app.use(express.json());

app.post("/sum",(req,res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    const ans = a + b;
    console.log(ans);
    res.json({
        ans
    })
})

app.listen(3000,()=>{
    console.log("server started");
})