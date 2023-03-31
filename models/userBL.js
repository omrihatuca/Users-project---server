const usersmodel = require('./usersmodel');
const tasksmodel = require('./tasksmodel');
const postsmodel = require('./postsmodel');


let users ;
const getalldata= async () =>
{
     users=[];

    let resp1 = await usersmodel.find({})
    let resp2 = await postsmodel.find({})
    let resp3 = await tasksmodel.find({})

    resp1.forEach(data => 
    {
        let obj={};
        obj.id = data._id;
        obj.name=data.name;
        obj.username=data.username;
        obj.email=data.email;
        obj.street=data.street;
        obj.city=data.city;
        obj.zipcode=data.zipcode;
        obj.posts=[];
        obj.tasks=[];

       for (let i = 0; i < resp2.length; i++) 
       {
       if (resp2[i].username==obj.username)
        {
            let obj2 = {}
            obj2.id=resp2[i]._id
             obj2.title=resp2[i].title;
             obj2.body=resp2[i].body;
             obj2.userid=resp2[i]._id;
             obj.posts.push(obj2);
       }
        
       }

       for (let i = 0; i < resp3.length; i++) 
       {
        if (resp3[i].username==obj.username)
         {
            let obj3 = {}
            obj3.id=resp3[i]._id
           obj3.title = resp3[i].title;
           obj3.completed = resp3[i].completed ;
           obj3.userid=resp3[i]._id;
           obj.tasks.push(obj3);
            
        }
     
        
       }

            users.push(obj);
        

      

    });

return users;

}

const getdatabyid = async (id) =>
{
    
    let resp1 = await usersmodel.find({})
    let resp2 = await postsmodel.find({})
    let resp3 = await tasksmodel.find({})
    let resp4 = resp1.filter(x=>x._id==id)

   
        users=[]
    
        resp4.forEach(data => 
        {
            let obj={};
            obj.id = data._id;
            obj.name=data.name;
            obj.username=data.username;
            obj.email=data.email;
            obj.street=data.street;
            obj.city=data.city;
            obj.zipcode=data.zipcode;
            obj.posts=[];
            obj.tasks=[];
    
           for (let i = 0; i < resp2.length; i++) 
           {
           if (resp2[i].username==obj.username)
            {
                let obj2 = {}
                 obj2.title=resp2[i].title;
                 obj2.body=resp2[i].body;
                 obj2.userid=resp2[i]._id;
                 obj.posts.push(obj2);
           }
            
           }
    
           for (let i = 0; i < resp3.length; i++) 
           {
            if (resp3[i].username==obj.username)
             {
                let obj3 = {}
               obj3.title = resp3[i].title;
               obj3.completed = resp3[i].completed ;
               obj3.userid=resp3[i]._id;
               obj.tasks.push(obj3);
                
            }
         
            
           }
    
                users.push(obj);
            
    
          
    
        });
    
    return users;
        

    }
    


const getonlyusersByName = async (name) => {

    let resp1 = await usersmodel.find({})
    let resp2 = await postsmodel.find({})
    let resp3 = await tasksmodel.find({})
    let resp4 = resp1.filter(x=>x.name==name)

   
        users=[]
    
        resp4.forEach(data => 
        {
            let obj={};
            obj.id = data._id;
            obj.name=data.name;
            obj.username=data.username;
            obj.email=data.email;
            obj.street=data.street;
            obj.city=data.city;
            obj.zipcode=data.zipcode;
            obj.posts=[];
            obj.tasks=[];
    
           for (let i = 0; i < resp2.length; i++) 
           {
           if (resp2[i].username==obj.username)
            {
                let obj2 = {}
                 obj2.title=resp2[i].title;
                 obj2.body=resp2[i].body;
                 obj2.userid=data._id;
                 obj.posts.push(obj2);
           }
            
           }
    
           for (let i = 0; i < resp3.length; i++) 
           {
            if (resp3[i].username==obj.username)
             {
                let obj3 = {}
               obj3.title = resp3[i].title;
               obj3.completed = resp3[i].completed ;
               obj3.userid=data._id;
               obj.tasks.push(obj3);
                
            }
         
            
           }
    
                users.push(obj);
            
    
          
    
        });
    
    return users;
        
  };
  


const adduser = async (obj) => {
    const user = new usersmodel(obj);
    await user.save();
    return 'Created!';
  };
  
  const updateuser = async (id, obj) => {
    
    await usersmodel.findByIdAndUpdate(id, obj);
    // await user.save()
    return 'Updated!';
  };
  
  const deleteuser = async (id) => {
   
    await usersmodel.findByIdAndDelete(id);
//    await user.save();
    return 'Deleted!';
  };

module.exports = {getalldata,getdatabyid,getonlyusersByName,adduser,updateuser,deleteuser}