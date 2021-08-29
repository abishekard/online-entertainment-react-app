import { Link, NavLink } from "react-router-dom";
import classes from "./Home.module.css";

const NavigationBar = () => {
  return (
    <header className={classes.nav_container}>
      {/*  <NavLink
        to="/home"
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
      >
        <h5>Home</h5>
      </NavLink> */}
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
        to="/home/video"
      >
        <h5>Video</h5>
      </NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
        to="/home/audio"
      >
        <h5>Audio</h5>
      </NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
        to="/home/wallpaper"
      >
        <h5>Wallpapers</h5>
      </NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "white",
        }}
        to="/home/profile"
      >
        <h5>Profile</h5>
      </NavLink>
    </header>
  );
};

export default NavigationBar;
