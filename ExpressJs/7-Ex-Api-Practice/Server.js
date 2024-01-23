const express=require('express');
const app=express();
const path=require('path');


const hostname='127.0.0.1';
const port=5000;

// configure static files..................

app.use('/BMDB',express.static(path.join(__dirname,'BMDB')));   //mdb config

app.use('/Styles',express.static(path.join(__dirname,'Styles')))   //style.css

app.use('/img',express.static(path.join(__dirname,'img')));  // img config

//congigure the express to receive the form data.............................................
app.use(express.json());

app.use('/api',require('./router/router'))


app.get('/',(request,response)=>
{
    response.send(`<h1>express rest API</h1>`);
})


app.listen(port,hostname,()=>
{
    console.log(`express js server is starting at: http://${hostname}:${port}`);
})