var mongoose = require("mongoose");

var subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  subscriberToChannel: {
    type: String,
    required: true
  },

  subscribedDate: {
    type: Date,
    required: true,
    date: Date.now
  }
});

module.exports = subscriberSchema;
