const router = require("express").Router()

const create = require("./create")
router.use("/register", create)

const login = require("./login")
router.use("/login", login)

module.exports = router