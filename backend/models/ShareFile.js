const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileShareSchema = new Schema(
  {
    fileId: {
      type: String,
      required: true,
    },
    expiration: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FileShare", fileShareSchema);
