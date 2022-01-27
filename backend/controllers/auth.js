if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const crypto = require('crypto')

const User = require('../models/User')
const jwt = require('jsonwebtoken');
const ExpressError = require('../utils/ExpressError');
const sendEmail = require('../utils/sendEmail');


module.exports.createUser = async (req, res) => {
    const { username, email, password } = req.body
    const user = new User({ username, email, password })
    const resp = await user.save()
    const data = {
        user: { id: user._id }
    }
    console.log(process.env.SECRET);
    const authToken = jwt.sign(data, 'b0742345623214e7f5aac75a4200799d80b55d26a62b97cd23015c33ae3ac11513e2e7', { expiresIn: 600 })
    res.status(201).json({ success: true, user: resp, authToken })
}

module.exports.loginUser = async (req, res) => {
    const { username, password } = req.body
    const foundUser = await User.findAndValidate(username, password)
    if (foundUser) {
        const data = {
            user: { id: foundUser._id }
        }
        const authToken = jwt.sign(data, 'b0742345623214e7f5aac75a4200799d80b55d26a62b97cd23015c33ae3ac11513e2e7', { expiresIn: 600 })
        res.status(201).json({ success: true, authToken })
    } else {
        throw new ExpressError("invalid credentials !!", 400)
    }
}

module.exports.getUser = async (req, res) => {
    const userId = req.user.id
    const user = await User.findById(userId).select("-password")
    res.status(201).json(user)
}

module.exports.forgotPassword = async (req, res, next) => {
    const { email } = req.body
    const user = await User.findOne({ email })
    if (!user) {
        throw new ExpressError("Email Could be Sent , Please register first", 404)
    }
    const resetToken = await user.getResetPasswordToken()
    console.log(resetToken)
    await user.save()
    const resetUrl = `http://localhost:3000/passwordReset/${resetToken}`
    const message = `
    <h1>You have requested for password reset</h1>
    <p>pls go to this link to reset your password</p>
    <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `
    try {
        await sendEmail({
            to: user.email,
            subject: "Password rest request",
            text: message
        })
    } catch (error) {
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined
        await user.save()
        return next(new ExpressError("Email could not be sent", 500))
    }

    res.status(201).json({ success: true, message: "Email sent successfully" })
}

module.exports.resetPassword = async (req, res, next) => {
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex")
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })
    if (!user) {
        throw new ExpressError("Invalid Token", 404)
    }
    user.password = req.body.password
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined
    await user.save()
    res.status(201).json({ success: true, message: "Password Reset Success" })
}