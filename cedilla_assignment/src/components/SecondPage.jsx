import classes from "./SecondPage.module.css";
import pc from "../assets/img/img2.jpg";
import img1 from "../assets/img/img3.jpg";
import img2 from "../assets/img/img4.jpg";
import img3 from "../assets/img/img5.jpg";
import img4 from "../assets/img/img6.jpg";
import Whyus from "./Whyus";

const SecondPage = () => {
  return (
    <div className={classes.container}>
      <h6>Our Approach</h6>
      <h1>To Enhance Your Cyber Defences Expert Will Support</h1>
      <div className={classes.main}>
        <div className={classes.imageDiv}>
          <img src={pc} alt="pc" />
        </div>
        <div className={classes.contentDiv}>
          <h5>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur Duis aute irure dolor in
          </h5>
          <div className={classes.contents}>
            <div className={classes.content}>
              <h5>Trusted Partner</h5>
              <span>fugiat nulla pariatur Duis aute irure</span>
            </div>
            <div className={classes.content}>
              <h5>Product Security</h5>
              <span>fugiat nulla pariatur Duis aute irure</span>
            </div>
            <div className={classes.content}>
              <h5>System Security</h5>
              <span>fugiat nulla pariatur Duis aute irure</span>
            </div>
            <div className={classes.content}>
              <h5>Operational Security</h5>
              <span>fugiat nulla pariatur Duis aute irure</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.challengeContent}>
        <p>Our Challenges</p>
        <h2>You Can Protect Your Organizations Cybersecurity By Us</h2>
        <div className={classes.cards}>
          <div className={classes.card}>
            <h5>Product Security</h5>
            <span>fugiat nulla pariatur Duis aute irure Duis aute irure</span>
          </div>
          <div className={classes.card}>
            <h5>Product Security</h5>
            <span>fugiat nulla pariatur Duis aute irure Duis aute irure</span>
          </div>
          <div className={classes.card}>
            <h5>Product Security</h5>
            <span>fugiat nulla pariatur Duis aute irure Duis aute irure</span>
          </div>
          <div className={classes.card}>
            <h5>Product Security</h5>
            <span>fugiat nulla pariatur Duis aute irure Duis aute irure</span>
          </div>
        </div>
      </div>
      <section className={classes.serviceContent}>
        <p>Cyber Security Services</p>
        <h2>You can Protect Your Organizations Cybersecurity by Services Us</h2>
        <div className={classes.imageContent}>
          <img src={img1} alt="img1" />
          <img src={img2} alt="img1" />
          <img src={img3} alt="img1" />
          <img src={img4} alt="img1" />
        </div>
      </section>
      <section className={classes.packageContent}>
        <div className={classes.mainContent}>
          <h6>Security Packages</h6>
          <h2>We Have Different Types Of Pricing Plans</h2>
          <div className={classes.priceCards}>
            <div className={classes.priceCard}>
              <p>Basic</p>
              <h3 className={classes.headin}>Free</h3>
              <div>/per month</div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eveniet reprehenderit blanditiis vero ullam harum placeat q
                Eveniet reprehenderit blanditiis
              </p>
              <button>Readmore</button>
            </div>
            <div className={classes.priceCard1}>
              <p>Popular</p>
              <h3 className={classes.headin1}>$29</h3>
              <div>/per month</div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eveniet reprehenderit blanditiis vero ullam harum placeat q
                Eveniet reprehenderit blanditiis
              </p>
              <button>Readmore</button>
            </div>
            <div className={classes.priceCard}>
              <p>Premium</p>
              <h3 className={classes.headin}>$59</h3>
              <div>/per month</div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eveniet reprehenderit blanditiis vero ullam harum placeat q
                Eveniet reprehenderit blanditiis
              </p>
              <button>Readmore</button>
            </div>
          </div>
        </div>
      </section>
      <Whyus />
    </div>
  );
};

export default SecondPage;
