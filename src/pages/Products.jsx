import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setproducts] = useState([]);
  const [search, setsearch] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/search?q=${search}`
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>Products</div>;
};

export default Products;
