const express = require("express");

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const user = require("./routes/user")
app.use("/user", user)

app.listen(3000, () => console.log("http://localhost:3000"))