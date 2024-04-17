const usernameValidation = require("../username")
const passwordValidation = require("../password")

module.exports = async (req, res, next) => {
    let errors;

    const usernameErrors = await usernameValidation(req.body.username, { isRequired: true })
    if(usernameErrors) {
        errors = {...errors, username: usernameErrors}
    }

    const passwordErrors = await passwordValidation(req.body.password, { isRequired: true })
    if(passwordErrors) {
        errors = {...errors, password: passwordErrors}
    }

    if(errors) {
        res.status(422).json(errors)
        return;
    }

    next()
}