import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";
import PrivateRouter from "./PrivateRouter";
import ProductDetail from "../pages/ProductDetail";

const AppRouter = () => {
  return (
    // <BrowserRouter>
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRouter />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail/>} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
    // </BrowserRouter>
  );
};

export default AppRouter;
