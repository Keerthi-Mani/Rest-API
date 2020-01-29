var express = require("express");
var router = express.Router();
var Subscriber = require("../models/subscriber");

//Getting all the subscribers
router.get("/", async (req, res) => {
  try {
    var subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Getting One subscriber
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

//Creating One
router.post("/", (req, res) => {
  req.params.id;
});

//Updating One
router.patch("/:id", (req, res) => {
  req.params.id;
});

//Deleting One
router.get("/:id", (req, res) => {
  req.params.id;
});

module.exports = router;
