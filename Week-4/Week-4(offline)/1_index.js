//simple http server

const express = require("express");

const app = express();

function Sum(n){
    let ans=0;
    for(let i =1;i<=n;i++){
        ans = ans+i;
    }
    return ans;
}

app.get("/",(req,res)=>{
    const inp = req.query.inp;
    const ans = Sum(inp);
    res.send(ans);
})



app.listen(3000);

// Listening ports should be unique for every task