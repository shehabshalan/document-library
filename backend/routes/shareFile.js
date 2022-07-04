const express = require("express");
const router = express.Router();

const {
  getSharedFileById,
  createSharedFile,
} = require("../controllers/shareFileController");

router.route("/").post(createSharedFile);
router.get("/:id", getSharedFileById);

module.exports = router;
