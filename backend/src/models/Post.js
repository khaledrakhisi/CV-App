const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const postSchema = new mongoose.Schema({
  title: { type: String, require: true },
  content: { type: String, require: true, minlength: 6 },
  created_date: { type: Date, require: true, default: Date.now },
  modified_date: { type: Date, require: true, default: Date.now },
  thumbnail: { type: String, require: true },
  ratings: [{ type: mongoose.Types.ObjectId, required: true, ref: "Rating" }],
});

postSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("Post", postSchema);
