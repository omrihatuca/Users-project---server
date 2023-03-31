const mongoose=require('mongoose');

const postsschema= new mongoose.Schema(
    {
        
        username :String,
        title : String,
        body : String,
        


    },
    {versionKey:false}
);

const post= mongoose.model('post',postsschema);
module.exports=post;