const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

const getFiles = async (req, res) => {
  const files = await File.find();
  if (!files) return res.status(404).send({ message: "No files found" });
  res.json(files);
};

const getFileById = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "ID is required" });
  const id = req.params.id;
  const file = await File.findById(id);
  if (!file) return res.status(201).json({ message: "file not found" });
  res.json(file);
};

// file uploads

const fileUploader = async (path) => {
  const fileUploaded = await cloudinary.uploader.upload(path, {
    folder: "library-files",
    resource_type: "auto",
  });
  return fileUploaded;
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
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
};

const deleteFile = async (req, res) => {
  if (!req?.body?.id)
    return res.status(400).json({ message: "ID is required" });
  const id = req.body.id;
  const employee = await Employee.findById(id);
  if (!employee) {
    return res
      .status(204)
      .json({ message: `Employee ID ${req.body.id} not found` });
  }
  const result = await employee.remove();
  res.json({ message: "Employee deleted" });
};

module.exports = {
  getFiles,
  getFileById,
  uploadFile,
  deleteFile,
};
