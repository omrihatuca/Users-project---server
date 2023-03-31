
const tasksmodel = require('./tasksmodel');

const getalltasks = () => {
    return tasksmodel.find({});
  };
  
  const getalltasksbyname = (username) => {
    return tasksmodel.find({ "username" : username});
  };
  
  
  const gettasksbyid= (id) => {
    return tasksmodel.findById({ '_id':id });
  };
  
  const addtask = async (obj) => {
    const task = new tasksmodel(obj);
    await task.save();
    return 'Created!';
  };
  
  const updatetask = async (id) => {  

    await tasksmodel.findByIdAndUpdate(id, {completed : true} );
    return 'Updated!';
  };
  
  const deletetask = async (id) => {
    await tasksmodel.findByIdAndDelete(id);
    return 'Deleted!';
  };

  module.exports={getalltasks,getalltasksbyname,gettasksbyid,addtask,updatetask,deletetask}