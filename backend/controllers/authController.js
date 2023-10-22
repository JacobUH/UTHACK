const Auth = require('../models/authModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginAuth = async (req, res) => {
    const {email, password} = req.body

    try {
      const auth = await Auth.login(email, password)
  
      // create a token
      const token = createToken(auth._id)
  
      res.status(200).json({email, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}

// signup a user
const signupAuth = async (req, res) => {
  const {email, password} = req.body

  try {
    const auth = await Auth.signup(email, password)

    // create a token
    const token = createToken(auth._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { signupAuth, loginAuth }