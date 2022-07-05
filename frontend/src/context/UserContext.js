import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import lodash from "lodash";
const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [files, setFiles] = React.useState([]);
  const [expirationDateTime, setExpirationDateTime] = React.useState(
    new Date()
  );

  const [uploading, setUploading] = React.useState(false);
  const [uploadingError, setUploadingError] = React.useState(false);
  const [uploadingSuccess, setUploadingSuccess] = React.useState(false);
  const handleExpirationDateTime = (newValue) => {
    setExpirationDateTime(newValue._d.toISOString());
  };
  const handleFileChange = (e) => {
    const selectedFiles = [...e.target.files];
    setFiles(selectedFiles);
    const map = selectedFiles.map((file) => {
      return {
        fileName: file.name,
        fileSizeInBytes: file.size,
        fileType: file.type,
      };
    });
    console.log(map);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUploading(true);
    const formData = new FormData();
    lodash.forEach(files, (file) => {
      formData.append("myfile", file);
    });

    const url = "http://localhost:5000/files";

    axios
      .post(url, formData)
      .then((res) => {
        setUploading(false);
        setUploadingSuccess(true);
        setFiles([]);
      })
      .catch((err) => {
        setUploading(false);
        setUploadingError(true);
        setFiles([]);
      });
  };

  return (
    <UserContext.Provider
      value={{
        handleFileChange,
        handleSubmit,
        handleExpirationDateTime,
        expirationDateTime,
        files,
        uploading,
        uploadingError,
        uploadingSuccess,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
