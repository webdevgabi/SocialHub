const router = require("express").Router()
const validation = require("../../validation/")

router.use(async (req, res, next) => {
    const errors = await validation(req.body)
    
    if(errors) {
        res.status(422).json(errors)
        return;
    }

    next()
})

router.post("/", (req, res) => {
    res.json({ route: "/register" })
})

module.exports = router