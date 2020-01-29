//Dependencies
var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
require("dotenv").config();

//Connect mongodb
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Database....."));

// Sets up the Express App
var app = express();
app.use(express.json());

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
