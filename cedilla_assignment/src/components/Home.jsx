import Navbars from "./Navbar";
import classes from "./Home.module.css";
import Cards from "./Cards";
import SecondPage from "./SecondPage";

const Home = () => {
  return (
    <>
      <div className={classes.container}>
        <Navbars />
        <div className={classes.content}>
          <p>Lorem ipsum dolor sit amet</p>
          <h1>Lorem ipsum dolor sit amet, consectetur</h1>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </div>
          <button>About Us</button>
        </div>
      </div>
      <Cards />
      <SecondPage />
    </>
  );
};

export default Home;
