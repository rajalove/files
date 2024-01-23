const express=require('express');
const app=express();

const hostName='127.0.0.1';
const port=5000;

app.get('/',(request,response)=>
{
    response.status(200);
    response.send(`<h1>welcome to express js</h1>`);
})

app.listen(port,hostName,()=>
{
    console.log(`Express js sever is starting at:http://${hostName}:${port}`);
})

