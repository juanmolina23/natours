const mongoose = require("mongoose")
const tourSchema = require("../schemas/tourSchema")

const Tour = mongoose.model("Tour", tourSchema)

module.exports = Tour
