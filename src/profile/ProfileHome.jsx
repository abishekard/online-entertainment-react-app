import classes from "./ProfileHome.module.css";
import { getDatabase, ref, onValue } from "firebase/database";
import FirebaseConfig from "../config/FirebaseConfig";
import { initializeApp } from "@firebase/app";
import { useContext, useEffect, useState } from "react";
import LoginContext from "../store/LoginContex";

const ProfileHome = () => {
  const loginContext = useContext(LoginContext);
  initializeApp(FirebaseConfig);
  const db = getDatabase();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
    profileImage: "",
  });

  useEffect(() => {
    const profileRef = ref(db, "/users/" + loginContext.userId);
    onValue(profileRef, (snapshot) => {
      const data = snapshot.val();

      console.log(data);
      setUserData({
        name: data.userName,
        email: data.email,
        mobile: data.mob,
        profileImage: data.image,
      });
    });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes["form-container"]}>
        <h2>Hi {userData.name}</h2>
        <img
          className={classes.profile_image}
          src={userData.profileImage}
          alt="profile_image"
        />
        <div className={classes.data_container}>
          <p>{userData.name}</p>
          <p>{userData.email}</p>
          <p>{userData.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHome;
