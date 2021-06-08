const express = require("express")

//Routes
const tours = require("./routes/tourRoutes")
const users = require("./routes/userRoutes")

const app = express()

//Middlewares
app.use(express.json())

app.get("/", (req, res) => {
  res.send({ message: "Hello world" })
})

app.use("/tours", tours)
app.use("/users", users)

module.exports = app
