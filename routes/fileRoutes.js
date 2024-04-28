const express = require('express')
const Router = express.Router()
const {control} = require('../controllers/fileController')
const {upload} = require('../middlewares/multer')
const {verifyToken} = require('../middlewares/authMiddleware')

Router.post('/file',verifyToken,upload.single('filename'),control)

module.exports = Router