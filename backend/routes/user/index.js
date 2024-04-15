const router = require("express").Router()

const create = require("./create")
router.use("/register", create)

module.exports = router