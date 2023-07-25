import React from "react";
import Navbars from "./Pages/Navbar";
import Announcement from "./Pages/Announcement";
import Footer from "./Pages/Footer";
import { MDBIcon } from "mdb-react-ui-kit";
import CartList from "./Pages/CartList";
import { cartProducts } from "./Pages/data";

const Cart = () => {
  return (
    <>
      <Navbars />
      <Announcement />
      <div className="cart-items">
        <h1>
          <MDBIcon fas icon="shopping-bag" /> My Cart
        </h1>
        <div className="cart-top">
          <button className="cont-shop-btn">CONTINUE SHOPPING</button>
          <div>
            <span>My Bag(3)</span>
            <span>My Wishlist(2)</span>
          </div>
          <button className="checkout-btn">CHECKOUT NOW</button>
        </div>
        <div className="cart-bottom">
          <div className="info">
            {cartProducts.map((item) => (
              <CartList item={item} key={item.id} />
            ))}
          </div>
          <div className="summary">
            <h1>Order Summary</h1>
            <div>
                <span className="subheading">Subtotal</span>
                <span>₹ 499</span>
            </div>
            <div>
                <span className="subheading">Estimated Shipping</span>
                <span>₹ 70</span>
            </div>
            <div>
                <span className="subheading">Order Discount</span>
                <span>₹ -70</span>
            </div>
            <div>
                <span className="total">Total</span>
                <span className="total">₹ 499</span>
            </div>
            <button>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
