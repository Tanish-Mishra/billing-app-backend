const Bill = require('../models/Bills')

const billUser = (req,res,next) => {
 const { clientName, contactNo, totalAmount} = req.body;

 if(!clientName || !contactNo || !totalAmount) {
     res.status(400).json({
         "message": "Bad Request",
     })
 }

 const newBill = new Bill({
    clientName,
    contactNo,
    totalAmount,
 })

 newBill.save()
 
 res.status(201).json({
    'message':"Bill Saved Successfully"
 })

}


module.exports = {
    billUser,
}