const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");

//Getting all the subscribers
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
    console.log(subscriber);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Getting One subscriber
router.get("/:id", getSubscriber, (req, res) => {
  res.json(res.subscriber);
});

//Creating One
router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
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
router.patch("/:id", getSubscriber, async (req, res) => {
  if (req.body.name != null) {
    res.subscriber.name = req.body.name;
  }
  if (req.body.subscriberToChannel != null) {
    res.subscriber.subscriberToChannel = req.body.subscriberToChannel;
  }
  try {
    const updatesSubscriber = await res.subscriber.save();
    res.joson(updatesSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Deleting One
router.delete("/:id", getSubscriber, async (req, res) => {
  try {
    await res.subscriber.remove();
    res.joson({ message: "Deleted Subscriber" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Middleware function
async function getSubscriber(req, res, next) {
  var subscriber;
  try {
    subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      return res.status(404).json({ message: "Cannot find subscriber" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  res.subscriber = subscriber;
  next();
}

module.exports = router;
