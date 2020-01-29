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
router.get("/:id", Subscriber, (req, res) => {
  res.json(res.subscriber);
});

//Creating One
router.post("/", async (req, res) => {
  var subscriber = new Subscriber({
    name: req.body.name,
    subscriberToChannel: req.body.subscriberToChannel
  });
  try {
    var newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (err) {
    // users bad request
    res.status(400).json({ message: err.message });
  }
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
