const mongoose=require('mongoose');

const usersschema= new mongoose.Schema(
    {
       
       name : String,
       username : String,
       email : String,
       street : String,
       city : String,
       zipcode : String,
       posts : Array,
       tasks : Array 


    },
    {versionKey:false}
);

const user= mongoose.model('user',usersschema);
module.exports=user;