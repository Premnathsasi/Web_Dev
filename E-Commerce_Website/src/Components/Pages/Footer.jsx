import logo from "../../assets/img/logo.png";
import { Call, Facebook, Instagram,LocationOn, Mail, Twitter} from "@mui/icons-material";


const Footer = () => {
  return (
    <div className="footer">
      <div className="left col-lg-4 col-md-4">
        <div className=" logo">
          <img src={logo} alt="logo" width={55} />
          <h1>ShopNest</h1>
        </div>

        <p>
          Welcome to shopNest - Your ultimate online shopping destination!
          Discover a wide range of high-quality products, enjoy secure
          transactions, and exceptional customer service. Shop with confidence
          and redefine your shopping experience today!
        </p>
        <div className="socialIconContainer">
          <div>
            <Facebook style={{ color: "#385999" }} />
          </div>
          <div>
            <Instagram style={{ color: "#E4405F" }} />
          </div>
          <div>
            <Twitter style={{ color: "#55ACEE" }} />
          </div>
        </div>
      </div>
      <div className="center col-lg-4 col-md-4">
        <h3>Useful Links</h3>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Men Fashion</li>
          <li>Woman Fashion</li>
          <li>My Account</li>
          <li>Wishlist</li>
          <li>Accessories</li>
          <li>Payments</li>
          <li>Shipping</li>
        </ul>
      </div>
      <div className="right col-lg-4 col-md-4">
        <h3>Contact</h3>
        <div>
          <div> ShopNest Private Limited,</div>
          <div><LocationOn /> Outer Ring Road,Bengaluru, 560103</div>
          
        </div>
        <div> <Call/> +91 9876543210</div>
        <div><Mail/> contact@shopnest.com</div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payments" />
      </div>
    </div>
  );
};

export default Footer;
