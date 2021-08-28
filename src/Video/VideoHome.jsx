import ParentPlayer from "../ui/ParentPlayerContainer";
import VideoList from "./VideoList";
import VideoListItem from "./VideoListItem";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import FirebaseConfig from "../config/FirebaseConfig";
import { initializeApp } from "@firebase/app";

const VideoHome = () => {
  initializeApp(FirebaseConfig);
  const [videoList, setVideoList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState("a");
  useEffect(() => {
    const db = getDatabase();
    const vList = [];
    function getData() {
      const videosRef = ref(db, "videos/");
      onValue(videosRef, (snapshot) => {
        const data = snapshot.val();

        snapshot.forEach(function (child) {
          console.log(child.val());
          vList.push(child.val());
        });
        console.log("done");
        setVideoList(vList);
        setCurrentVideo(vList[0]);
      });
    }
    getData();
  }, []);

  const videoClickHandler = (position) => {
    setCurrentVideo(videoList[position]);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <ParentPlayer data={currentVideo} />
        </div>
        <div className="col-lg-6 col-md-6">
          <VideoList videoList={videoList} onVideoClick={videoClickHandler} />
        </div>
      </div>
    </>
  );
};

export default VideoHome;
