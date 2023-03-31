const express=require('express');
const alldatabl=require('../models/postsBL');

const router= express.Router();

router.get('/', async (req,resp)=>
{
    let username = req.query.username;
    if(username)
    {
      const user = await alldatabl.getallpostsbyname(username);
      return  resp.json(user);
    }
    else {
let users= await alldatabl.getallposts();
return resp.json(users);
    }
})

router.get('/:id', async (req, resp) => {
    const id = req.params.id;
    const post = await alldatabl.getpostsbyid(id);
    resp.json(post);
  });

  router.post('/', async (req, resp) => {
    const obj = req.body;
    const result = await alldatabl.addpost(obj);
    resp.json(result);
  });
  
  router.put('/:id', async (req, resp) => {
    const id = req.params.id;
    const obj = req.body;
    const result = await alldatabl.updatePost(id, obj);
    resp.json(result);
  });
  
  router.delete('/:id', async (req, resp) => {
    const id = req.params.id;
    const result = await alldatabl.deletePost(id);
    resp.json(result);
  });



module.exports=router;