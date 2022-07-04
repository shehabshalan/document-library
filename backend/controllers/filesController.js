const File = require("../models/File");
const getFiles = async (req, res) => {
  const files = await File.find();
  if (!files) return res.status(404).send({ message: "No files found" });
  res.json(files);
};

const getFileById = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "ID is required" });
  const id = req.params.id;
  console.log(id);
  const file = await File.findById(id);
  if (!file) return res.status(201).json({ message: "file not found" });
  res.json(file);
};

const uploadFile = async (req, res) => {
  const newEmployee = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  };

  if (!newEmployee.firstname || !newEmployee.lastname) {
    return res
      .status(400)
      .json({ message: "First and last names are required." });
  }
  const result = await Employee.create(newEmployee);
  res.status(201).json(result);
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
