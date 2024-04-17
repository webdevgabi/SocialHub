const router = require("express").Router()
const bcrypt = require("bcrypt")

const insertOne = require("../../database/insertOne")

const userCreateValidation = require("../../validation/user/create")
router.use(userCreateValidation)

router.post("/", async (req, res) => {

    const {username, displayName, email, password, ...details} = req.body;

    const schema = {
        username: username,
        displayName: displayName,
        email: email,
        password: await bcrypt.hash(password, 10),
        token: '',
        details: details
    }

    const isInserted = await insertOne({ data: schema, collection: 'users' })

    isInserted ? 
    res.send("Successful registration.") :
    res.status(500).send("Unsuccessful registration.")
})

module.exports = router