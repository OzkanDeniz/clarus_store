import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      user ? <Outlet /> : <Navigate to="/login" />{" "}
    </div>
  );
};

export default PrivateRouter;
