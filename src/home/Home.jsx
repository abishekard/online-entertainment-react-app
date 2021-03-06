import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import NavigationBar from "./NavigationBar";
import ParentPlayerContainer from "../ui/ParentPlayerContainer";
import VideoHome from "../Video/VideoHome";
import LoginContext from "../store/LoginContex";
import LoginSignUp from "../loginAndSignUp/LoginSignUp";
import AudioHome from "../audio/AudioHome";
import ProfileHome from "../profile/ProfileHome";
import WallpaperHome from "../wallpapers/WallpaperHome";

const Home = () => {
  const loginContext = useContext(LoginContext);
  console.log(loginContext.isLogin);

  return (
    <>
      <NavigationBar />
      {!loginContext.isLogin && <Redirect to="/login_signin" />}
      {loginContext.isLogin && <Redirect to="/home/video" />}
      <Route path="/home/profile">
        <ProfileHome />
      </Route>

      <Route path="/home/video">
        <VideoHome />
      </Route>

      <Route path="/home/audio">
        <AudioHome />
      </Route>
      <Route path="/home/wallpaper">
        <WallpaperHome />
      </Route>
    </>
  );
};

export default Home;
