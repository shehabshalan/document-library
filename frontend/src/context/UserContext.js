import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [document, setDocument] = React.useState(null);

  const handleFileChange = (e) => {
    setDocument(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/files";
    const formData = new FormData();
    formData.append("myfile", document);

    console.log(formData);
    axios
      .post(url, formData)
      .then((res) => {
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
