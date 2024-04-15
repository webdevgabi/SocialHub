const nameValidation = require("./name")
const emailValidation = require("./email")
const passwordValidation = require("./password")
const validationOptions = require("./options")

module.exports = async (data, options = validationOptions) => {
    let errors;

    const nameErrors = nameValidation(data.name, options.name)
    if(nameErrors) errors = {...errors, name: nameErrors}

    const emailErrors = await emailValidation(data.email, options.email)
    if(emailErrors) errors = {...errors, email: emailErrors}

    const passwordErrors = passwordValidation(data.password, options.password)
    if(passwordErrors) errors = {...errors, password: passwordErrors}

    return errors
}