const find = require("../database/find")
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

module.exports = async (data, { isRequired, isEmailFormat, isInUse }) => {
    
    if(isRequired && !data) {
        return ["Please enter an email."]
    }

    const inUse = await find({ collection: 'users', condition: { email: data } })
    if(isInUse && inUse) {
        return ["Email address is already registered. Please use another one."]
    }

    const isEmail = emailRegex.test(data)
    if(isEmailFormat && isEmail) {
        return ["Email address format is incorrect. Please check."]
    }
}