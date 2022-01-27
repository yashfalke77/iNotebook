require('dotenv').config()

const jwt = require('jsonwebtoken');
const {userSchema, userSchemaLogin, newNoteSchema} = require('./joiSchema')
const ExpressError = require('./utils/ExpressError')

module.exports.validateUserRegister = (req, res, next) => {
    const { error } = userSchema.validate(req.body)
    if (error) {
        const msg = error.details.map(el => el.message).join(', ')
        throw new ExpressError(msg, 400)
    } else {
        next()
    }
}

module.exports.validateUserLogin = (req, res, next) => {
    const { error } = userSchemaLogin.validate(req.body)
    if (error) {
        const msg = error.details.map(el => el.message).join(', ')
        throw new ExpressError(msg, 400)
    } else {
        next()
    }
}

module.exports.fetchUser = (req, res, next) => {
    // Get user from jwt token and add id to req object
    const token = req.header('auth-token')
    if (token) {
        const data = jwt.verify(token, 'b0742345623214e7f5aac75a4200799d80b55d26a62b97cd23015c33ae3ac11513e2e7')
        req.user = data.user
        next()
    } else {
        res.status(401).json({message: "Please authenticate with a valid Token"})  //401 acess denied
    }
}

module.exports.validateNewNote = (req,res, next) => {
    const { error } = newNoteSchema.validate(req.body)
    if (error) {
        const msg = error.details.map(el => el.message).join(', ')
        console.log(msg);
        throw new ExpressError(msg, 400)
    } else {
        next()
    }
}
