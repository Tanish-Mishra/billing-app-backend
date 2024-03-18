const express = require('express')
const router = express.Router()
const { billUser } = require('../controllers/billControllers')
const {verifyToken} = require('../middlewares/authMiddleware')

router.post('/create-bill',verifyToken,billUser)



module.exports = router

