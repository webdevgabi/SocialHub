const displayNameValidation = require("../displayName")
const usernameValidation = require("../username")
const emailValidation = require("../email")
const passwordValidation = require("../password")
const validationOptions = require("../options")

module.exports = async (req, res, next) => {
    let errors;
    const options = validationOptions;

    const displayNameErrors = displayNameValidation(req.body.displayName, options.displayName)
    if(displayNameErrors) {
        errors = {...errors, displayName: displayNameErrors}
    }

    const usernameErrors = await usernameValidation(req.body.username, options.username)
    if(usernameErrors) {
        errors = {...errors, username: usernameErrors}
    }

    const emailErrors = await emailValidation(req.body.email, options.email)
    if(emailErrors) {
        errors = {...errors, email: emailErrors}
    }

    const passwordErrors = passwordValidation(req.body.password, options.password)
    if(passwordErrors) {
        errors = {...errors, password: passwordErrors}
    }

    if(errors) {
        res.status(422).json(errors)
        return;
    }

    next()
}