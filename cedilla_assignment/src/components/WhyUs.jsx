import classes from "./WhyUs.module.css";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Newsletter from "./pages/Newsletter";

const Whyus = () => {
  return (
    <div className={classes.content}>
      <section className={classes.whyusContainer}>
        <div className={classes.whyusMain}>
          <p>Why Choose Us</p>
          <h2>We have a Lot of Skills in Cyber Security</h2>
          <div className={classes.lists}>
            <div className={classes.list}>
              <h1>365</h1>
              <p>Clients Protection</p>
            </div>
            <div className={classes.list}>
              <h1>1000</h1>
              <p>Truseted Organization</p>
            </div>
            <div className={classes.list}>
              <h1>567</h1>
              <p>Website Protection</p>
            </div>
            <div className={classes.list}>
              <h1>100%</h1>
              <p>Innovative Technology</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={classes.professional}>
          <p>Professionals</p>
          <h2>Meet Our Skilled Team</h2>
          <div className={classes.menList}>
            <div className={classes.men}>
              <img
                src="https://images.pexels.com/photos/5668774/pexels-photo-5668774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="men"
              />
              <div className={classes.menContent}>
                <h5>Ciara Sebastian</h5>
                <p style={{ color: "white" }}>Financial Officer</p>
              </div>
            </div>
            <div className={classes.men}>
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                alt="men"
              />
              <div className={classes.menContent}>
                <h5>John Abraham</h5>
                <p style={{ color: "white" }}>Commercial Director</p>
              </div>
            </div>
            <div className={classes.men}>
              <div>
                <img
                  src="https://images.pexels.com/photos/5745181/pexels-photo-5745181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="men"
                />
              </div>

              <div className={classes.menContent}>
                <h5>Mark Luke</h5>
                <p style={{ color: "white" }}>Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Whyus;
