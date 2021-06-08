const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const tourSchema = require("../schemas/tourSchema")

const Tour = mongoose.model("Tour", tourSchema, "tours")

// define the home page route
router.get("/", function (req, res) {
  res.send("Tours")
})

router.post("/add", (req, res) => {
  const newTour = new Tour({
    name: "The Forest Hiker",
    rating: 4.7,
    price: 497
  })
  newTour.save()
  res.send("done")
})

module.exports = router
