import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import FirebaseConfig from "../config/FirebaseConfig";
import classes from "./WallpaperHome.module.css";
import WallpaperItem from "./WallpaperItem";

const WallpaperHome = () => {
  const FireConfig = initializeApp(FirebaseConfig);
  const [imageList, setImageList] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    const iList = [];
    const imageRef = ref(db, "wallpapers/");
    onValue(imageRef, (snapshot) => {
      console.log(snapshot.data);
      snapshot.forEach((child) => {
        console.log(child.val());
        iList.push(child.val());
      });
      setImageList(iList);
    });
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className={`row ${classes.container}`}>
        {imageList.map((item, idx) => {
          return <WallpaperItem key={idx} data={item} />;
        })}
      </div>
    </div>
  );
};

export default WallpaperHome;
