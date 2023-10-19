import classes from "./Home.module.css";

const Cards = () => {
  return (
    <div className={classes.cards}>
      <div className={classes.card}>
        <h4>Pen Testing</h4>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </span>
      </div>
      <div className={classes.card}>
        <h4>Cyber Threat Hunting</h4>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </span>
      </div>
      <div className={classes.card}>
        <h4>Security Center</h4>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </span>
      </div>
    </div>
  );
};

export default Cards;
