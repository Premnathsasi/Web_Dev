import { Add, Remove } from "@mui/icons-material";
import React from "react";

const CartList = ({ item }) => {
  return (
    <>
      <div className="cart-product">
        <div className="product-detail">
          <img src={item.img} alt="img" />
          <div className="details">
            <div>
              <b>Product:</b> {item.title}
            </div>
            <div>
              <b>Color:</b> {item.color}
            </div>
            <div>
              <b>Size:</b>
              {item.size}
            </div>
            <div>In Stock</div>
          </div>
        </div>
        <div className="price-detail">
          <div className="quantityContainer">
            <Remove /> <span>1</span> <Add />
          </div>
          <div className="product-price">₹{item.price}</div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartList;
