const express=require('express');
const router=express.Router();
const uuid=require('uuid');

let Allemployees=[{
    "id": "A1",
    "first_name": "Noelani",
    "last_name": "Langrish",
    "email": "nlangrish0@ca.gov",
    "gender": "Genderqueer",
    "ip_address": "82.10.27.75",
  }, 
  {
    "id": "A2",
    "first_name": "Darla",
    "last_name": "Bradly",
    "email": "dbradly1@amazon.de",
    "gender": "Female",
    "ip_address": "48.106.49.216",
  },
   {
    "id": "A3",
    "first_name": "Kati",
    "last_name": "Domini",
    "email": "kdomini2@jugem.jp",
    "gender": "Female",
    "ip_address": "135.178.207.98",
  }, 
  {
    "id": "A4",
    "first_name": "Lorie",
    "last_name": "Iacovazzi",
    "email": "liacovazzi3@go.com",
    "gender": "Female",
    "ip_address": "234.197.123.10",
  }, 
  {
    "id": "A5",
    "first_name": "Raynor",
    "last_name": "Scantlebury",
    "email": "rscantlebury4@mac.com",
    "gender": "Male",
    "ip_address": "107.14.185.238",
  }];


  //http://127.0.0.1:5000/api/allemployees 

  router.get('/allemployees',(request,response)=>
  {
     let url=request.url;
     console.log(url)
    response.status(200).json(Allemployees)
  })

http://127.0.0.1:5000/api/:empId

router.get('/allemployees/:empId',(request,response)=>
{
   let singleId=request.params.empId;

   let singleEmployee=Allemployees.find((raja)=>
   {
        return raja.id===singleId;
   })
   response.status(200).json(singleEmployee)
})

http://127.0.0.1:5000/api/allemployees

            router.post('/allemployees',(request,response)=>
            {
            //    let newPerson={first_name,last_name,email,gender,ip_address}=request.body;

            let newPerson={
                id:uuid.v4(),
                first_name:request.body.first_name,
                last_name:request.body.last_name,
                email:request.body.email,
                gender:request.body.gender,
                ip_address:request.body.ip_address,
            }
                
 Allemployees.push(newPerson)
 response.status(200).json({
    msg:'new one created'
        })
    
            })


module.exports=router;
