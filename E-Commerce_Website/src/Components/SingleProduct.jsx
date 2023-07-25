import { Add, Remove } from "@mui/icons-material";
import Announcement from "./Pages/Announcement";
import Footer from "./Pages/Footer";
import Navbars from "./Pages/Navbar";
import NewsLetter from "./Pages/NewsLetter";
import { MDBBtn } from "mdb-react-ui-kit";

const SingleProduct = () => {
  return (
    <div className="single-product">
      <Navbars />
      <Announcement />
      <div className="wrapper">
        <div className="image-Container">
          <img
            src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="product"
          />
        </div>
        <div className="InfoContainer">
          <h1>US-Polo T-shirt</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <span className="p-price">₹599</span>
          <div className="containerFilter">
            <div className="Filterproduct">
              <h6>Color</h6>
              <div style={{ backgroundColor: "black" }}></div>
              <div style={{ backgroundColor: "darkblue" }}></div>
              <div style={{ backgroundColor: "gray" }}></div>
            </div>
            <div className="Filterproduct">
              <h6>Size</h6>
              <select>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className="addContainer">
            <div className="quantityContainer">
            <Remove /> <span>1</span>  <Add /> 
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default SingleProduct;
