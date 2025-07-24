const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const MemorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      reqired: true,
    },
    favorite: {
      type: Boolean,
    },
    comments: [commentSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Memory", MemorySchema)