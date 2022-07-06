import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import lodash from "lodash";
import { Endpoints } from "../constants/endpoints";
const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [filesUploaded, setFilesUploaded] = useState([]);
  const [expirationDateTime, setExpirationDateTime] = useState(new Date());
  const [uploading, setUploading] = useState(false);
  const [uploadingError, setUploadingError] = useState(false);
  const [uploadingSuccess, setUploadingSuccess] = useState(false);
  const [sharingError, setSharingError] = useState(false);
  const [sharingSuccess, setSharingSuccess] = useState(false);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [generatingLink, setGeneratingLink] = useState(false);
  const [sharingLink, setSharingLink] = useState("");
  const [fileId, setFileId] = useState("");

  const getFiles = async () => {
    setLoading(true);
    try {
      const res = await axios.get(Endpoints.getFiles);
      setFiles(res.data.result);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleExpirationDateTime = (newValue) => {
    setExpirationDateTime(newValue._d.toISOString());
  };
  const handleFileChange = (e) => {
    const selectedFiles = [...e.target.files];
    setFilesUploaded(selectedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    const formData = new FormData();
    lodash.forEach(filesUploaded, (file) => {
      formData.append("myfile", file);
    });

    try {
      // eslint-disable-next-line no-unused-vars
      const res = await axios.post(Endpoints.uploadFiles, formData);
      setUploading(false);
      setUploadingSuccess(true);
      setFilesUploaded([]);
      getFiles();
    } catch {
      setUploading(false);
      setUploadingError(true);
      setFilesUploaded([]);
    }
  };

  const handleOpen = (id) => {
    setOpen(true);
    setFileId(id);
  };
  const handleClose = () => {
    setOpen(false);
    setSharingLink("");
    setSharingSuccess(false);
    setSharingError(false);
  };
  const handleShareFile = async (e) => {
    e.preventDefault();
    setGeneratingLink(true);
    const payload = {
      fileId: fileId,
      expiresAt: expirationDateTime,
    };
    try {
      const res = await axios.post(Endpoints.createSharedFile, payload);
      setSharingLink(res.data.result);
      setGeneratingLink(false);
      setSharingSuccess(true);
    } catch (err) {
      setGeneratingLink(false);
      setSharingError(true);
      console.log(err);
    }
  };

  const handleDownloads = async (id) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const res = await axios.put(`${Endpoints.updateDownloads}/${id}`);
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
