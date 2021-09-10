const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const noteSchema = new mongoose.Schema({
    title: {type: String},
    content: {type: String, required: true, minlength: 6},
    created_date: {type: Date, required: true, default: Date.now},    
    userId : {type: String, require: true},
    // userId: { type: mongoose.Types.ObjectId, required: true, ref : "User" }
});

noteSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("Note", noteSchema);

