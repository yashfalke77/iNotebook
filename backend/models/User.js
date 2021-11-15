const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

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
    }, 
    email: {
        type: String,
        unique: [true, "email must be unique"],
        required: true,
    },

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

module.exports = mongoose.model('User', userSchema)