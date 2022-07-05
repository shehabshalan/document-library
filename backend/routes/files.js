const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({});

let upload = multer({ storage: storage });
const {
  getFiles,
  getFileById,
  uploadFile,
  deleteFile,
} = require("../controllers/filesController");

router
  .route("/")
  .get(getFiles)
  .post(upload.array("myfile"), uploadFile)
  .delete(deleteFile);
router.get("/:id", getFileById);

module.exports = router;
