import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Endpoints } from "../constants/endpoints";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function login(payload) {
    setLoading(true);
    const url = "http://localhost:5000/auth";

    return axios
      .post(url, payload)
      .then((response) => {
        setLoading(false);
        console.log(response);
        console.log("response.data.accessToken: " + response.data.accessToken);
        localStorage.setItem("token", response.data.accessToken);
        window.location.href = "/";
      })
      .catch((error) => {
        setLoading(false);

        console.log(error);
      });
  }
  function register(payload) {
    setLoading(true);
    const url = Endpoints.register;
    return axios
      .post(url, payload)
      .then((response) => {
        setLoading(false);
        localStorage.setItem("token", response.data.jwt);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        window.location.href = "/";
      })
      .catch((error) => {
        setLoading(false);
        console.log("An error occurred:", error.response);
      });
  }
  function logout() {
    localStorage.removeItem("token");
    setIsAuth(false);
    window.location.href = "/";
  }

  return (
    <UserContext.Provider
      value={{
        isAuth,
        loading,
        register,
        login,
        logout,
        searchTerm,
        setSearchTerm,
        open,
        setOpen,
        handleOpen,
        handleClose,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
