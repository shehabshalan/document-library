const ShareFile = require("../models/ShareFile");

const getSharedFileById = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "ID is required" });
  const id = req.params.id;
  console.log(id);
  const file = await ShareFile.findById(id);
  if (!file) return res.status(201).json({ message: "file not found" });
  res.json(file);
};

const createSharedFile = async (req, res) => {
  // to do - create shared file
};

module.exports = {
  getSharedFileById,
  createSharedFile,
};
