module.exports = {
    username: {
        isRequired: true,
        onlyLetter: true,
        length: 4,
        isInUse: true
    },
    displayName: {
        isRequired: true,
        onlyLetter: true,
        length: 4
    },
    email: {
        isRequired: true,
        isEmailFormat: true,
        isInUse: true
    },
    password: {
        isRequired: true,
        length: 8,
        isContainCapital: true,
        isContainLower: true,
        isContainNumber: true,
        isContainSpecial: true
    }
}