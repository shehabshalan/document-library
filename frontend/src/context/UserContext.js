import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import lodash from "lodash";
const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [filesUploaded, setFilesUploaded] = React.useState([]);
  const [expirationDateTime, setExpirationDateTime] = React.useState(
    new Date()
  );
  const [uploading, setUploading] = React.useState(false);
  const [uploadingError, setUploadingError] = React.useState(false);
  const [uploadingSuccess, setUploadingSuccess] = React.useState(false);
  const [sharingError, setSharingError] = React.useState(false);
  const [sharingSuccess, setSharingSuccess] = React.useState(false);
  const [files, setFiles] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = useState(false);
  const [generatingLink, setGeneratingLink] = useState(false);
  const [sharingLink, setSharingLink] = useState("");
  const [fileId, setFileId] = useState("");

  const getFiles = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/files");
      console.log(res.data);
      setFiles(res.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  React.useEffect(() => {
    getFiles();
  }, []);

  const handleExpirationDateTime = (newValue) => {
    setExpirationDateTime(newValue._d.toISOString());
  };
  const handleFileChange = (e) => {
    const selectedFiles = [...e.target.files];
    setFilesUploaded(selectedFiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUploading(true);
    const formData = new FormData();
    lodash.forEach(filesUploaded, (file) => {
      formData.append("myfile", file);
    });

    const url = "http://localhost:5000/files";

    axios
      .post(url, formData)
      .then((res) => {
        setUploading(false);
        setUploadingSuccess(true);
        setFilesUploaded([]);
        getFiles();
      })
      .catch((err) => {
        setUploading(false);
        setUploadingError(true);
        setFilesUploaded([]);
      });
  };

  const handleOpen = (id) => {
    setOpen(true);
    console.log(id);
    setFileId(id);
  };
  const handleClose = () => setOpen(false);
  const handleShareFile = async (e) => {
    e.preventDefault();
    setGeneratingLink(true);
    const payload = {
      fileId: fileId,
      expiresAt: expirationDateTime,
    };
    console.log(payload);
    try {
      const res = await axios.post("http://localhost:5000/sharefile", payload);
      console.log(res.data.message);
      setSharingLink(res.data.message);
      setGeneratingLink(false);
      setSharingSuccess(true);
      console.log(res.data);
    } catch (err) {
      setGeneratingLink(false);
      setSharingError(true);
      console.log(err);
    }
  };

  const handleDownloads = async (id) => {
    try {
      const res = await axios.put(`http://localhost:5000/files/${id}`);
      console.log(res.data);
      getFiles();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <UserContext.Provider
      value={{
        handleFileChange,
        handleSubmit,
        handleExpirationDateTime,
        expirationDateTime,
        filesUploaded,
        uploading,
        uploadingError,
        uploadingSuccess,
        files,
        loading,
        open,
        generatingLink,
        handleOpen,
        handleClose,
        handleShareFile,
        sharingError,
        sharingSuccess,
        sharingLink,
        handleDownloads,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
