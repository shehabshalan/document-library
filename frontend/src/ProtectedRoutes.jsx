import React from "react";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { useUserContext } from "./context/UserContext";

function ProtectedRoutes() {
  const { isAuth } = useUserContext();

  return !isAuth ? <Navigate to="/login" /> : <Home />;
}

export default ProtectedRoutes;
