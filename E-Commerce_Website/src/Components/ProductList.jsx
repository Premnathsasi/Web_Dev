import React from "react";
import Navbars from "./Pages/Navbar";
import Announcement from "./Pages/Announcement";
import { Box, TextField } from "@mui/material";
import Products from "./Pages/Products";
import NewsLetter from "./Pages/NewsLetter";
import Footer from "./Pages/Footer";

const ProductList = () => {
  return (
    <div className="productList">
      <Navbars />
      <Announcement />
      <h1 className="plist-Title">Dresses</h1>
      <div className="filterContainer">
        <div className="filter"><span className="filter-text">Filter Products:</span>
        <select>
            <option disabled selected>Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
        </select>
        <select>
            <option disabled selected>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
        </select>
        </div>
        <div className="filter"><span className="filter-text">Sort Products:</span>
        <select>
            <option selected>Newest</option>
            <option>Price --Low to High</option>
            <option>Price --High to Low</option>
        </select>
        </div>
      </div>
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductList;
