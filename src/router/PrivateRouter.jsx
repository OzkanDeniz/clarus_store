import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const PrivateRouter = () => {
  const { user } = useContext(AuthContext);
  return user ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouter;
