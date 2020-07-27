const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})


app.post("/",function(req,res){
    var firstName=req.body.firstName;
    var lastName=req.body.lastName;
    var email=req.body.email;
    console.log(firstName ,lastName,email);

    var data={
    members:[
        {
        email_address: email,
        status:"subscribed",
        merge_fields:{
            FNAME:firstName,
            LNAME:lastName
        }
    }
    ]
};
var jsonData=JSON.stringify(data);
var options={
    url:"https://us4.api.mailchimp.com/3.0/lists/0beb05b30c",
    method:"post",
    headers:{
        "Authorization":"nisha1 6b2ce6967556bd3824f151a53270238c-us4",
    },
    body: jsonData
};

request(options,function(error,response,body){
    if(error){
        res.sendFile(__dirname+"/failure.html");

    }
    else{
        if(response.statusCode===200)
        {
            res.sendFile(__dirname+"/success.html");

        }
        else{
            res.sendFile(__dirname+"/failure.html");
        }
    }
});
});
app.post("/failure",function(req,res){
    res.redirect("/");
});











app.listen(process.env.PORT||3000,function(){

    console.log("server is running on port 3000");
})

//6b2ce6967556bd3824f151a53270238c-us4
//0beb05b30c