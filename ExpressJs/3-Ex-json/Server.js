const express=require('express');
const app=express();
const path=require('path');

const hostName='127.0.0.1';
const port=5000;

// static files config...........
app.use('/BMDB',express.static(path.join(__dirname,'BMDB')));  //mdb config
app.use('/Styles',express.static(path.join(__dirname,'Styles')));  // styles config

// json 
app.use(express.json());

//JsonFile path config......
app.use('/',require('./Data/details'))



app.get('/',(request,response)=>
{
    response.status(200);
    response.sendFile(path.join(__dirname,'public','index.html'));
})

app.listen(port,hostName,()=>
{
    console.log(`Express js sever is starting at:http://${hostName}:${port}`);
})

