import ParentPlayer from "../ui/ParentPlayerContainer";
import VideoList from "../Video/VideoList";
import VideoListItem from "../Video/VideoListItem";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import FirebaseConfig from "../config/FirebaseConfig";
import { initializeApp } from "@firebase/app";
import AudioList from "./AudioList";
import AudioPlayer from "./AudioPlayer";

const AudioHome = () => {
  initializeApp(FirebaseConfig);
  const [audioList, setVideoList] = useState([]);
  const [currentAudio, setCurrentVideo] = useState("a");
  useEffect(() => {
    const db = getDatabase();
    const aList = [];
    function getData() {
      const videosRef = ref(db, "audios/");
      onValue(videosRef, (snapshot) => {
        const data = snapshot.val();

        snapshot.forEach(function (child) {
          console.log(child.val());
          aList.push(child.val());
        });
        console.log("done");
        setVideoList(aList);
        setCurrentVideo(aList[0]);
      });
    }
    getData();
  }, []);

  const videoClickHandler = (position) => {
    setCurrentVideo(audioList[position]);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <AudioPlayer data={currentAudio} />
        </div>
        <div className="col-lg-6 col-md-6">
          <AudioList audioList={audioList} onAudioClick={videoClickHandler} />
        </div>
      </div>
    </>
  );
};

export default AudioHome;
