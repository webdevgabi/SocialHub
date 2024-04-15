const displayNameValidation = require("./displayName")
const usernameValidation = require("./username")
const emailValidation = require("./email")
const passwordValidation = require("./password")
const validationOptions = require("./options")

module.exports = async (data, options = validationOptions) => {
    let errors;

    const displayNameErrors = displayNameValidation(data.displayName, options.displayName)
    if(displayNameErrors) {
        errors = {...errors, displayName: displayNameErrors}
    }

    const usernameErrors = await usernameValidation(data.username, options.username)
    if(usernameErrors) {
        errors = {...errors, username: usernameErrors}
    }

    const emailErrors = await emailValidation(data.email, options.email)
    if(emailErrors) {
        errors = {...errors, email: emailErrors}
    }

    const passwordErrors = passwordValidation(data.password, options.password)
    if(passwordErrors) {
        errors = {...errors, password: passwordErrors}
    }

    return errors
}