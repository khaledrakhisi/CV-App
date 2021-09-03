const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

// const technicalInfoSchema = mongoose.Schema({
//   language: { type: String, required: true },
//   platform: { type: String, required: true },
//   method: { type: String },
// });
// const durationSchema = mongoose.Schema({
//   start: { Type: Date },
//   end: { Type: Date },
// });

const workSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, minlength: 6 },
  technicalInfo: {
    language: { type: String, required: true },
    platform: { type: String, required: true },
    method: { type: String },
  },
  images: [{ type: String }],
  duration: { start: { type: Date }, end: { type: Date } },
  contractor: { type: String },
  links: { type: String },
  tags: { type: String, required: true },
});

workSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("Work", workSchema);
