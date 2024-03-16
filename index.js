const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

app.get('/api/v1/health',(req,res)=>{
    res.status(200).json({
        "message": "Server is Running Healthy!"
    })
})


app.listen(PORT,(err)=>{
    if(!err) console.log(`Server is running at http://${HOST}:${PORT}`)
})