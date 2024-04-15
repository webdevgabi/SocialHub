import express from "express";

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({ response: "Backend" })
})

app.listen(3000, () => console.log("http://localhost:3000"))