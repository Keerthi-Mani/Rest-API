var express = require("express");
var router = express.Router();

//Getting all the subscribers
router.get("/", (req, res) => {
  res.send("Hello World");
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
