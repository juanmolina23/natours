const express = require("express")
const router = express.Router()

const tourController = require("../controllers/tourController")

// define the home page route
router.get("/", tourController.getAllTours)

router.post("/add", tourController.createTour)

module.exports = router
