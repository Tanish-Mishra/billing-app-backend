const express = require('express')
const router = express.Router()
const { billUser,getBills } = require('../controllers/billControllers')
const {verifyToken} = require('../middlewares/authMiddleware')

router.post('/create-bill',verifyToken,billUser)
router.get('/all-bills',verifyToken,getBills)



module.exports = router

