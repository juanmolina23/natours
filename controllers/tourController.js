const Tour = require("../models/tourModel")

exports.getAllTours = async (req, res) => {
  const filter = {}
  const allTours = await Tour.find(filter)
  res.send(allTours)
}

exports.createTour = (req, res) => {
  const tour = new Tour({
    name: req.body.name,
    rating: req.body.rating,
    price: req.body.price
  })
  tour.save()
  res.send(tour)
}
