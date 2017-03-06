const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const Artist   = require('../models/artist')
const Venue    = require('../models/venue')

const userSchema = new Schema({
  username : String,
  password : String,
  _artist   : {
    type: Schema.ObjectId,
    ref: "Artist"
  },
  _venue   : {
    type: Schema.ObjectId,
    ref: "Venue"
  },
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
