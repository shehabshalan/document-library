import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import lodash from "lodash";
const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [document, setDocument] = React.useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = [...e.target.files];
    setDocument(selectedFiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(document);

    const formData = new FormData();
    lodash.forEach(document, (file) => {
      formData.append("myfile", file);
    });

    const url = "http://localhost:5000/files";

    axios
      .post(url, formData)
      .then((res) => {
        console.log(formData);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UserContext.Provider
      value={{
        handleFileChange,
        handleSubmit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
