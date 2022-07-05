const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

const getFiles = async (req, res) => {
  try {
    const files = await File.find();
    if (!files) return res.status(404).send({ message: "No files found" });
    res.json(files);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getFileById = async (req, res) => {
  try {
    if (!req?.params?.id)
      return res.status(400).json({ message: "ID is required" });
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).json({ message: "ID is not valid" });
    const id = req.params.id;
    const file = await File.findById(id);
    if (!file) return res.status(201).json({ message: "file not found" });
    res.json(file);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// file uploads

const fileUploader = async (path) => {
  try {
    const fileUploaded = await cloudinary.uploader.upload(path, {
      folder: "library-files",
      resource_type: "auto",
    });
    return fileUploaded;
  } catch (err) {
    console.log(err);
  }
};

const formatData = (files, filesUploaded) => {
  const FROM_BYTES_TO_MB = 1000000;
  let result = [];
  files.map((file, i) => {
    result.push({
      fileName: file.originalname,
      fileUrl: filesUploaded[i].secure_url,
      fileSizeInBytes: filesUploaded[i].bytes,
      fileSizeInMb: `${(filesUploaded[i].bytes / FROM_BYTES_TO_MB).toFixed(
        2
      )} MB`,
      fileType: filesUploaded[i].format,
      downloads: 0,
    });
  });
  return result;
};

const uploadFile = async (req, res) => {
  try {
    if (!req.files)
      return res.status(400).json({ message: "No file uploaded" });
    const files = req.files;
    const filesUploaded = await Promise.all(
      files.map((file) => fileUploader(file.path))
    );
    const result = formatData(files, filesUploaded);
    const newFiles = await File.insertMany(result);
    res.status(200).json({ message: newFiles });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteFile = async (req, res) => {
  try {
    if (!req?.params?.id)
      return res.status(400).json({ message: "ID is required" });
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).json({ message: "ID is not valid" });
    const id = req.params.id;
    const file = await File.findById(id);
    if (!file) {
      return res
        .status(204)
        .json({ message: `File ID ${req.params.id} not found` });
    }
    const result = await file.remove();
    res.json({ message: "File deleted" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getFiles,
  getFileById,
  uploadFile,
  deleteFile,
};
