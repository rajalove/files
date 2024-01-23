const express=require('express');
const app=express();
const path=require('path');
const cors=require("cors")
const dotenv=require("dotenv");
const mongoose=require("mongoose");




// const hostname='127.0.0.1';
// const port=5000;

//static files config..............

app.use('./BMDB',express.static(path.join(__dirname,'BMDB')));
app.use('./img',express.static(path.join(__dirname,'img')));
app.use('./Styles',express.static(path.join(__dirname,'Styles')));


//cors config................
app.use(cors());

//json.........
app.use(express.json())

//dotenv file config..................
dotenv.config({path:"./config/.env"})

const hostname=process.env.HOST_NAME;
const port=process.env.PORT;

//conect to mongoDB..............................
mongoose.connect(process.env.MONGODB_LOCAL_URL).then(()=>
{
    console.log(`mongoDB successfully login.....!!`)

}).catch((error)=>
{
    console.log(error);
    process.exit(1);   // stops nodejs process if unable to connect
})


//router config..................
app.use('/api',require("./router/productRouter"));


//simple request.......................
app.get('/',(request,response)=>
{
    response.send(`<h1>backend big basket appplication</h1>`);
})


app.listen(port,hostname,()=>
{
    console.log(`express js server is starting at: http://${hostname}:${port}`);
})