const express = require("express");
const connection = require("./database/connection")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
connection({ connectionString: 'mongodb://localhost:27017', db: 'socialhub' })

const user = require("./routes/user")
app.use("/user", user)

app.listen(3000, () => console.log("http://localhost:3000"))