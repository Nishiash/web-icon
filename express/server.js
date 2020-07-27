const express=require("express");
const app=express();
app.get("/",function(request,response){
    response.send("<h1>Hello world!</h1>");
})
app.get("/contact",function(req,res){
    res.send("Contact me at nishi@gmail.com");
})
app.get("/about",function(req,res){
    res.send("<p>I am a web developer.</p>");
})
app.listen(3000,function(){
    console.log("Server is starting at the port 3000");
});