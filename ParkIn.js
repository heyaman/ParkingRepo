const express = require('express');
const bodyParser=require('body-parser');
const VehicleType  = require('../../OOPSDesign/enumType');
const router=express.Router();
let ParkingAttendant=require('../../OOPSDesign/ParkingAttendant');
let ParkingLot=require('../../OOPSDesign/ParkingLot');
let ParkingAttendant=ParkingAttendant.ParkingAttendant;
// router.get('/',(req,res)=>{
//     res.json({
//         status:200,
//         comment: 'Parked success'
//     })
// })
router.post('/',(req,res)=>{
    //fetching user details from form
    name=req.body.name;
    phone=req.body.phone;
    email=req.body.email;
    adharId=req.body.adharId;
    vehicleNumber=req.body.vehicleNumber;
    VehicleType=req.body.VehicleType;

    
    

    

})



module.exports=router;