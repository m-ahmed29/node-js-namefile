const express = require('express');

const app = express();
const port = 5000;


app.get('/',(req,res)=>{
   res.send('MUHAMMAD AHMED');
})

app.listen(port,()=>{
    console.log('server name is running');
})