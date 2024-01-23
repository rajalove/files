const express=require('express');
const app=express();
const path=require('path');

const hostName='127.0.0.1';
const port=5000;

// static files config...........
app.use('/BMDB',express.static(path.join(__dirname,'BMDB')));  //mdb config
app.use('/Styles',express.static(path.join(__dirname,'Styles')));  // styles config

let employees=[{
    "id": 1,
    "first_name": "Benjie",
    "last_name": "Pigott",
    "email": "bpigott0@liveinternet.ru",
    "gender": "Male",
    "ip_address": "41.235.243.126"
  }, {
    "id": 2,
    "first_name": "Nilson",
    "last_name": "Cuniffe",
    "email": "ncuniffe1@mtv.com",
    "gender": "Male",
    "ip_address": "49.161.147.227"
  }, {
    "id": 3,
    "first_name": "Sidoney",
    "last_name": "Lemery",
    "email": "slemery2@hubpages.com",
    "gender": "Female",
    "ip_address": "75.245.161.140"
  }, {
    "id": 4,
    "first_name": "Gardy",
    "last_name": "Walley",
    "email": "gwalley3@loc.gov",
    "gender": "Male",
    "ip_address": "1.206.103.135"
  }, {
    "id": 5,
    "first_name": "Anstice",
    "last_name": "Rafferty",
    "email": "arafferty4@over-blog.com",
    "gender": "Female",
    "ip_address": "56.204.186.50"
  }];


  app.get('/home',(request,response)=>
  {
    response.status(200).json(employees);
  })



app.get('/',(request,response)=>
{
    response.status(200);
    response.sendFile(path.join(__dirname,'public','index.html'));
})

app.listen(port,hostName,()=>
{
    console.log(`Express js sever is starting at:http://${hostName}:${port}`);
})

