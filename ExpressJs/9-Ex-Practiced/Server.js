const express=require('express');
const app=express();
const path=require('path');


const hostname='127.0.0.1';
const port=5000;

//static files config..............

app.use('./BMDB',express.static(path.join(__dirname,'BMDB')));
app.use('./img',express.static(path.join(__dirname,'img')));
app.use('./Styles',express.static(path.join(__dirname,'Styles')));

//json.........
app.use(express.json())

//apiRouter............
app.use('/api',require('./apiRouter/Routers'))

app.get('/',(request,response)=>
{
    response.send(`<h1>express rest API</h1>`);
})


app.listen(port,hostname,()=>
{
    console.log(`express js server is starting at: http://${hostname}:${port}`);
})