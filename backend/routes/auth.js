const express = require('express')

// controller functions
const { loginAuth, signupAuth } = require('../controllers/authController')

const router = express.Router()

// login route
router.post('/login', loginAuth)

// signup route
router.post('/signup', signupAuth)

module.exports = router