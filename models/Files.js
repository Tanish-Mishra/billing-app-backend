const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    mobileNo: {
        type: String,
        required: true,
    },
    fileUrl: {
      type: String, 
      required: true,
    }
    
})

const files = mongoose.model('fileData',fileSchema)
 
module.exports = files