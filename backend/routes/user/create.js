const router = require("express").Router()

router.post("/", (req, res) => {
    res.json({ route: "/register" })
})

module.exports = router