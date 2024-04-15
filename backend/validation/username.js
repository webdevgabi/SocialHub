const find = require("../database/find")
const onlyLetterRegex = (/^[a-zA-Z0-9_]+$/)

module.exports = async (data, { isRequired, onlyLetter, length, isInUse }) => {
    const errors = [];

    if(isRequired && !data) {
        return ["Please enter a username."]
    }

    const inUse = await find({ collection: 'users', condition: { username: data } })
    if(isInUse && inUse) {
        return ["Username is already registered. Please use another one."]
    }

    if(length && length > data.length) {
        errors.push(`Userame is too short. Please enter at least ${length} characters.`)
    }

    const containOnlyLetter = onlyLetterRegex.test(data)
    if(onlyLetter && !containOnlyLetter) {
        errors.push("Userame can only contain letters and numbers.")
    }

    if(errors.length !== 0) {
        return errors;
    }
}