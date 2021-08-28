import { Link } from "react-router-dom";
import classes from "./Home.module.css";

const NavigationBar = () => {
  return (
    <header className={classes.nav_container}>
      <Link to="/home">
        <h5>Home</h5>
      </Link>
      <Link to="/home/video">
        <h5>Video</h5>
      </Link>
      <Link to="/home/audio">
        <h5>Audio</h5>
      </Link>
      <Link to="/home/wallpapers">
        <h5>Wallpapers</h5>
      </Link>
      <Link to="/home/profile">
        <h5>Profile</h5>
      </Link>
    </header>
  );
};

export default NavigationBar;
