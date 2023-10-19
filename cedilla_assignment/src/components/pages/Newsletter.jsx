import classes from "./Newsletter.module.css";
import img1 from "../../assets/img/img3.jpg";
import img2 from "../../assets/img/img4.jpg";
import img3 from "../../assets/img/img5.jpg";

const Newsletter = () => {
  return (
    <section>
      <div className={classes.container}>
        <p>Latest News</p>
        <h2>Read The Latest Article From Us</h2>
        <div className={classes.lists}>
          <div className={classes.list}>
            <img src={img1} alt="image11" />
            <p>January 20,2023</p>
            <div>The Security risel of changing</div>
          </div>
          <div className={classes.list}>
            <img src={img3} alt="image11" />
            <p>January 20,2023</p>
            <div>The Security risel of changing</div>
          </div>
          <div className={classes.list}>
            <img src={img2} alt="image11" />
            <p>January 20,2023</p>
            <div>The Security risel of changing</div>
          </div>
        </div>
        <div className={classes.subscribe}>
          <div>
            <h6>Sign Up for Newsletter</h6>
            <p>Subacribe to Newsletter for the latest update</p>
          </div>
          <div>
            <input type="email" placeholder="Enter mail address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
