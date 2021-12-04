const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const crypto = require('crypto')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: [true, "username must be unique"],
        min: 3,
        max: 25,
    },
    password: {
        type: String,
        required: true,
        min: 5,
    }, 
    email: {
        type: String,
        unique: [true, "email must be unique"],
        required: true,
    },
    resetPasswordToken: String,
    resetPasswordExpire: String,

}, {timestamps: true})

userSchema.pre('save', async function(next){
    if (!this.isModified('password')) {
        next()
    } else {
        this.password = await bcrypt.hash(this.password, 12)
        next()
    }
})

userSchema.statics.findAndValidate = async function (username, password) {
    const foundUser = await this.findOne({ username })
    if (!foundUser) {
        return false
    }
    const isValid = await bcrypt.compare(password, foundUser.password)
    return isValid ? foundUser : false
}

userSchema.methods.getResetPasswordToken = async function () {
    const resetToken = crypto.randomBytes(20).toString('hex')
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")
    this.resetPasswordExpire = Date.now() + 10 * (60 * 1000)
    console.log(resetToken)
    return resetToken
}

module.exports = mongoose.model('User', userSchema)