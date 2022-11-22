const express = require("express");
const reviewSchema = require("../models/review");

const router = express.Router();

// create review
router.post("/reviews", (req, res) => {
  const review = reviewSchema(req.body);
  review
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all reviews
router.get("/reviews", (req, res) => {
  reviewSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a review
router.get("/reviews/:id", (req, res) => {
  const { id } = req.params;
  reviewSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/reviews/:id", (req, res) => {
  const { id } = req.params;
  reviewsSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a review
router.put("/reviews/:id", (req, res) => {
  const { id } = req.params;
  const { stars, name, body } = req.body;
  reviewSchema
    .updateOne({ _id: id }, { $set: { stars, name, body } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;