const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = require("./app")

dotenv.config({ path: "./config.env" })

const DB = process.env.DB.replace("<PASSWORD>", process.env.DB_PASSWORD)
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(con => {
    console.log("DB connection successful!")
  })

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log("Server is running!")
})
