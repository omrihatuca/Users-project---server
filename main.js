const express=require('express');
const cors=require('cors');

const usersrouter=require('./router/usersrouter');
 const postrouter = require('./router/postrouter');
 const taskrouter = require('./router/taskrouter');
const connectDB=require('./config/database');

const app= express();

connectDB();
const port=8000;
app.use(express.json());
app.use(cors());
app.use('/api/users',usersrouter);
 app.use('/api/posts',postrouter);
 app.use('/api/tasks',taskrouter);
app.listen(port, ()=>{
    console.log(`app is listening at: http://localhost:${port}`)
})
