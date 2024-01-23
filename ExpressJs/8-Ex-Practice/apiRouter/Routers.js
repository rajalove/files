const express=require('express');
const router=express.Router();
const uuid=require('uuid');

let Allstudents=[{
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


  //all students.............
router.get('/all',(request,response)=>
{

let url=request.url;
console.log(url)
response.status(200).json(Allstudents)
    
})



//single student...............
router.get('/all/:stuId',(request,response)=>
{
    StudentId=request.params.stuId;

    SingleStudent=Allstudents.find((single)=>
    {
        return single.id===StudentId;
    })
    response.status(200).json(SingleStudent);
})



//create a newStudent............

router.post('/all',(request,response)=>
{
    let new_Student={
        id:uuid.v4(),
        first_name:request.body.first_name,
        last_name:request.body.last_name,
        email:request.body.email,
        gender:request.body.gender,
        ip_address:request.body.ip_address,
    }

    Allstudents.push(new_Student);
    // response.status(200).json(Allstudents);
     response.status(200).json({
      msg:'new student created',
     });
})



//student update.............

router.put('/all/:stuId',(request,response)=>{
    StudentId=request.params.stuId;

   let new_Student={
    // id:uuid.v4(),
    id:StudentId,
    first_name:request.body.first_name,
    last_name:request.body.last_name,
    email:request.body.email,
    gender:request.body.gender,
    ip_address:request.body.ip_address,
   }

   removableIndex=Allstudents.map((single)=>
   {
    return(
      single.id
    )
    
   }).indexOf(StudentId);
   if(StudentId!==-1){
    Allstudents.splice(removableIndex,1,new_Student);
   }

   response.status(200).json({
    msg:'student details updated',
   })

})



//student deleted..............
router.delete('/all/:stuId',(request,response)=>
{
    StudentId=request.params.stuId;

    removableIndex=Allstudents.map((single)=>
    {
       return single.id
    }).indexOf(StudentId)

     if(StudentId!==-1){
        Allstudents.splice(removableIndex,1);
     }
     response.status(200).json({
        msg:'student deleted',
     })
})

module.exports=router;