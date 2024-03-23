const Bill = require('../models/Bills')

const billUser = async(req,res,next) => {

    try{
 const { clientName, contactNo, totalAmount, products} = req.body;

 if(!clientName || !contactNo || !totalAmount || !products) {
     res.status(400).json({
         "message": "Bad Request",
     })
 }

 const newBill = new Bill({
    clientName,
    contactNo,
    totalAmount,
    products,
 })

  await newBill.save()
 
 res.status(201).json({
    'message':"Bill Saved Successfully"
 })

} catch (error) {
    next(error)
}

}

const getBills = async(req,res,next) => {
    try{

      const data = await Bill.find()
      res.status(200).json({
        "bills": data,
      })

    } catch (error) {
        next(error)
    }
      
}


module.exports = {
    billUser,
    getBills
}