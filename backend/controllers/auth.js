if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const User = require('../models/User')
const jwt = require('jsonwebtoken');


module.exports.createUser = async (req, res) => {
    const { username, email, password } = req.body
    const user = new User({ username, email, password })
    const resp = await user.save()
    const data = {
        user: { id: resp._id }
    }
    const authToken = jwt.sign(data, process.env.JWT_SECRET)
    res.send({authToken})
}

module.exports.loginUser = async (req, res) => {
    const { username, password } = req.body
    const foundUser = await User.findAndValidate(username, password)
    if (foundUser) {
        const data = {
            user: { id: foundUser._id }
        }
        const authToken = jwt.sign(data, process.env.JWT_SECRET)
        res.send({authToken})
    } else {
        return res.status(400).json({err: {user: foundUser}, message: "invalid credentials !!"})
    }
}

module.exports.getUser = async(req, res) => {
    userId = req.user.id
    const user = await User.findById(userId).select("-password")
    res.send(user)
}