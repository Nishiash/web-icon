const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useUnifiedTopology:true,useNewUrlParser:true});

const fruitSchema=new mongoose.Schema({
    name:{
        type:String,
        required:(true,"please specify a name!")
    },
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review:String
});
const Fruit=mongoose.model("Fruit",fruitSchema);
const fruit=new Fruit({
    
    rating:7,
    review:"Good"
});
//fruit.save();
  

const personSchema=new mongoose.Schema({
    name:String,
    age:Number,
    favouriteFruit:fruitSchema
});
const Person=mongoose.model("Person",personSchema);
const pineapple=new Fruit({
    name: "Pineapple",
    rating:10,
    review:"yummy"
});
pineapple.save();
const person=new Person({
    name:"Amy",
    age:20,
    favouriteFruit: pineapple
});
person.save();


Fruit.find(function(err,fruits){
    if(err){
        console.log(error);
    }
    else{
        mongoose.connection.close();
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
});
 
//Fruit.deleteOne({name:"Apple",function(err){
//if(err){
  //      console.log(error);
// }
 //else{
    // console.log("successful");
   // }}});
Fruit.deleteMany({name:"Apple"},function (err) {
    if(err){
        console.log(err);
    }
    else{
        console.log("successful");
    }
    
});