const express=require('express');
const killer=express.Router();

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

  killer.get('/Data/details',(request,response)=>
  {
    response.status(200).json(employees);
  })


module.exports=killer;