const postsmodel = require('./postsmodel');

const getallposts = () => {
    return postsmodel.find({});
  };
  
  const getallpostsbyname = (username) => {
    return postsmodel.find({ "username" : username});
  };
  
  
  const getpostsbyid= (id) => {
    return postsmodel.findById({ '_id':id });
  };
  
  const addpost = async (obj) => {
    const post = new postsmodel(obj);
    await post.save();
    return 'Created!';
  };
  
  const updatePost = async (id, obj) => {
    await postsmodel.findByIdAndUpdate(id, obj);
    return 'Updated!';
  };
  
  const deletePost = async (id) => {
    await postsmodel.findByIdAndDelete(id);
    return 'Deleted!';
  };

  module.exports={getallposts,getallpostsbyname,getpostsbyid,addpost,updatePost,deletePost}