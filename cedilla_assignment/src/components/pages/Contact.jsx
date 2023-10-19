import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.container}>
      <section className={classes.mainContent}>
        <p>Get in Touch</p>
        <h2>
          Contact Us Today To Speak With An Expert About Your Specific Needs
        </h2>
        <form className={classes.formDetail}>
          <div className={classes.contactForm}>
            <label>Name</label>
            <input type="text" />
          </div>
          <div className={classes.contactForm}>
            <label>Email</label>
            <input type="email" />
          </div>
          <div className={classes.contactForm}>
            <label>Phone</label>
            <input type="tel" />
          </div>
          <div className={classes.contactForm}>
            <label>Company</label>
            <input type="text" />
          </div>
        </form>
        <div className={classes.formBtn}>
          <button>Consultation</button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
