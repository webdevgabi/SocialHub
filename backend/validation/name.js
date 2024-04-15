
const onlyLetterRegex = (/^[A-Za-z]+$/)

module.exports = (data, { isRequired, onlyLetter, length }) => {
    const errors = [];

    if(isRequired && !data) {
        return ["Please enter a name."]
    }

    if(length && length > data.length) {
        errors.push(`Name is too short. Please enter at least ${length} characters.`)
    }

    const containOnlyLetter = onlyLetterRegex.test(data)
    if(onlyLetter && containOnlyLetter) {
        errors.push("Name can only contain letters.")
    }

    if(errors.length !== 0) {
        return errors;
    }
}