const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const ratingSchema = new mongoose.Schema({
  IPv4: { type: String, required: true},
  IPv6: { type: String },
  comment: { type: String },
  city: { type: String },
  country_code: { type: String }, //"IR"
  country_name: { type: String }, //"Iran"
  latitude: { type: String }, //35.6961,
  longitude: { type: String }, //51.4231,
  postal: { type: String },
  state: { type: String }, //null,
  rating_type: { type: String, required: true }, // "like"
  created_date: { type: Date, required: true, default: Date.now },
  modified_date: { type: Date, required: true, default: Date.now },
  postId: { type: mongoose.Types.ObjectId, required: true, ref: "Post" },
});

ratingSchema.index({"IPv4":1, "rating_type":1, "postId":1}, {unique: true});

ratingSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("Rating", ratingSchema);
