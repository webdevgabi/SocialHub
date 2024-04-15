const router = require("express").Router()
const validation = require("../../validation/")
const bcrypt = require("bcrypt")

const insertOne = require("../../database/insertOne")

router.use(async (req, res, next) => {
    const errors = await validation(req.body)
    
    if(errors) {
        res.status(422).json(errors)
        return;
    }

    next()
})

router.post("/", async (req, res) => {

    const {username, displayName, email, password, ...details} = req.body;

    const schema = {
        username: username,
        displayName: displayName,
        email: email,
        password: await bcrypt.hash(password, 10),
        tokens: [],
        details: details
    }

    const isInserted = await insertOne({ data: schema, collection: 'users' })

    isInserted ? 
    res.send("Successful registration.") :
    res.status(500).send("Unsuccessful registration.")
})

module.exports = router