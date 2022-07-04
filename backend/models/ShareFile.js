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
    fileType: {
      type: String,
      required: true,
    },
    fileSize: {
      type: String,
      required: true,
    },
    fileOwner: {
      type: String,
      required: true,
    },
    downloads: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FileShare", fileShareSchema);
