import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const {data} = await axios.get(
        `https://dummyjson.com/products/search?q=${search}`
      );
      setProducts(data.products)
      
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
