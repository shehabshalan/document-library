const express = require("express");
const router = express.Router();

const {
  getFiles,
  getFileById,
  uploadFile,
  deleteFile,
} = require("../controllers/filesController");

router.route("/").get(getFiles).post(uploadFile).delete(deleteFile);
router.get("/:id", getFileById);

module.exports = router;
