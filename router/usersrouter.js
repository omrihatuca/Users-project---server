const express=require('express');
const alldatabl=require('../models/userBL');

const router= express.Router();

router.get('/', async (req,resp)=>
{
    let name = req.query.name;
    if(name)
    {
      const user = await alldatabl.getonlyusersByName(name);
      return  resp.json(user);
    }
    else {
let users= await alldatabl.getalldata();
return resp.json(users);
    }
})

router.get('/:id', async (req, resp) => {
    const id = req.params.id;
    const us = await alldatabl.getdatabyid(id);
    resp.json(us);
  });

  router.post('/', async (req, resp) => {
    const obj = req.body;
    const result = await alldatabl.adduser(obj);
    resp.json(result);
  });
  
  router.put('/:id', async (req, resp) => {
    const id = req.params.id;
    const obj = req.body;
    const result = await alldatabl.updateuser(id, obj);
    resp.json(result);
  });
  
  router.delete('/:id', async (req, resp) => {
    const id = req.params.id;
    const result = await alldatabl.deleteuser(id);
    resp.json(result);
  });



module.exports=router;