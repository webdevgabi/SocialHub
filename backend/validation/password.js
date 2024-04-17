
const capitalRegex = /[A-Z]/;
const lowerRegex = /[a-z]/;
const specialRegex = /[\W]/;
const numberRegex = /\d/;

module.exports = (data, { isRequired, length, isContainCapital, isContainLower, isContainNumber, isContainSpecial }) => {
    const errors = [];

    if(!data) {
        return isRequired && ["Please enter a password."]
    }

    if(length && length > data.length) {
        errors.push(`Password is too short. Please enter at least ${length} characters.`)
    }

    const containCapital = capitalRegex.test(data)
    if(isContainCapital && !containCapital) {
        errors.push("Password must contain at least one capital letter")
    }

    const containLower = lowerRegex.test(data)
    if(isContainLower && !containLower) {
        errors.push("Password must contain at least one small letter")
    }

    const containNumber = numberRegex.test(data)
    if(isContainNumber && !containNumber) {
        errors.push("Password must contain at least one number")
    }

    const containSpecial = specialRegex.test(data)
    if(isContainSpecial && !containSpecial) {
        errors.push("Password must contain at least one special character")
    }

    if(errors.length !== 0) {
        return errors;
    }
}