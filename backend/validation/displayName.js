
const onlyLetterRegex = (/[A-Za-z0-9 _]/)

module.exports = (data, { isRequired, onlyLetter, length }) => {
    const errors = [];

    if(isRequired && !data) {
        return ["Please enter a display name."]
    }

    if(length && length > data.length) {
        errors.push(`Display name is too short. Please enter at least ${length} characters.`)
    }

    const containOnlyLetter = onlyLetterRegex.test(data)
    if(onlyLetter && !containOnlyLetter) {
        errors.push("Display name can only contain letters and numbers.")
    }

    if(errors.length !== 0) {
        return errors;
    }
}