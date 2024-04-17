const router = require("express").Router()
const bcrypt = require("bcrypt")

const find = require("../../database/find")
const updateOne = require("../../database/updateOne")
const tokenGenerator = require("../../utilities/tokenGenerator")

const userLoginValidation = require("../../validation/user/login")
router.use(userLoginValidation)

router.post("/", async (req, res) => {
    const { username, password } = req.body;

    const user = await find({ collection: 'users', condition: { username: username } })
    if(!user) {
        res.status(422).json({ username: ["Nem található felhasználó a megadott felhasználónéven"] })
        return
    }

    const isCorrectPassword = await bcrypt.compare(password, user[0].password)
    if(!isCorrectPassword) {
        res.status(422).json({ password: ["Wrong password"] })
        return;
    }

    const token = await tokenGenerator()
    const isUpdated = await updateOne({ collection: 'users', condition: { username: user[0].username }, data: { token: token } })
    
    isUpdated ? 
    res.send(token) : 
    res.status(500).send("Unsuccessful login")
})

module.exports = router