const mongoose=require('mongoose');

const tasksschema= new mongoose.Schema(
    {   
        
        username :String,
        title : String,
        completed : Boolean,
        


    },
    {versionKey:false}
);

const task= mongoose.model('task',tasksschema);
module.exports=task;