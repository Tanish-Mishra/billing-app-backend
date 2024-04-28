// import {v2 as cloudinary} from 'cloudinary';
const cloudinary = require('cloudinary').v2;
// import fs from 'fs'
const fs = require('fs');
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY_CLOUDINARY, 
  api_secret: process.env.API_SECRET_CLOUDINARY
});


const uploadOnCloudinary = async(localFilePath) => {
    try {
  
        if(!localFilePath) return null
  
  const response = await cloudinary.uploader.upload(localFilePath,{
        resource_type: 'auto'
    });
    // console.log(`Url of the File is: ${response.url}`)
    return response
} catch (error) {
    // remove the locally saved file on server as upload operation failed 
  fs.unlinkSync(localFilePath)
  return null
}
 }

 module.exports = uploadOnCloudinary