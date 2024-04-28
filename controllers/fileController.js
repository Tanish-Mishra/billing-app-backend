const fileCloudinary = require('../models/Files')
const cloudinaryUpload = require('../utils/cloudinary')
const {sendInvoice} = require('../utils/twillio')
const control = async(req,res,next) => {
    try{
 if(!req?.file) {
     res.status(401).json({
         "message":"file is required!"
        })
    }
    if(!req?.body?.mobileNumber) {
        res.status(401).json({
            "message":"mobile number is required!"
           })
    }

    const response = await cloudinaryUpload(req?.file.path)
   if(!response?.url) {
    res.status(401).json({
        "message":"cloudinay url is empty!"
       })
   }
    const fileData = new  fileCloudinary({
        mobileNo:  req?.body?.mobileNumber,
        fileUrl: response?.url
    })

    
    await fileData.save()

    const responseWhatsappMessage = await sendInvoice(req?.body?.mobileNumber,response?.url)
    if(!responseWhatsappMessage.sid) {
        res.status(401).json({
            "message":"Failed to Send on Whatsapp!"
           })
    }
    
 res.status(200).json({
    "message":"File Shared Successfully!"
 })

} catch (error) {
    next(error)
}
}

module.exports = {
    control
}