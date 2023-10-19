import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Footer.module.css";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className={classes.container}>
      <div className={classes.footer}>
        <div className={classes.main}>
          <h2>LOGO</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            perferendis sint eos totam, reiciendis molestias amet earum beatae
          </p>
          <div>
            <FontAwesomeIcon icon={faFacebook} size="xl" />
            <FontAwesomeIcon icon={faInstagram} size="xl" />
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
            <FontAwesomeIcon icon={faTwitter} size="xl" />
          </div>
        </div>
        <div className={classes.main}>
          <h4>Address</h4>
          <div>
            <FontAwesomeIcon icon={faLocation} /> 1254, New York, USA
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} /> hello@xyz.com
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} /> +1 234 1254 12
          </div>
        </div>
        <div className={classes.main}>
          <h4>Solutions</h4>
          <ul>
            <li>Secure Private Cloud</li>
            <li>Online Backup</li>
            <li>Secure Website</li>
            <li>Cloud Protection</li>
            <li>Collabration</li>
            <li>Secure Private Cloud</li>
          </ul>
        </div>
        <div className={classes.main}>
          <h4>Resources</h4>
          <ul>
            <li>Secure Private Cloud</li>
            <li>Online Backup</li>
            <li>Secure Website</li>
            <li>Cloud Protection</li>
            <li>Collabration</li>
            <li>Secure Private Cloud</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
