const express=require('express');
const app=express();
app.listen(3000,()=>{
    console.log("Server running");
});
app.get('/home',(req,res)=>{
    res.send("WELCOME TO EVERYONE");
});