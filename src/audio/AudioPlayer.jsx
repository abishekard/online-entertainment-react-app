import classes from "./AudioPlayer.module.css";
import likeIcon from "./../images/player/like.png";
import viewsIcon from "./../images/player/view.png";

import ReactAudioPlayer from "react-audio-player";

const AudioPlayer = (props) => {
  // const [video_url, setVideoUrl] = useState("url");

  console.log(props.data.audio_url);
  return (
    <div className={classes.container}>
      <img height="230" width="400" src={props.data.thumb_url} />
      <ReactAudioPlayer src={props.data.audio_url} autoPlay controls />
      <div className={classes.title}>
        {/* <span>title : </span> */}
        <span>{props.data.audio_title}</span>
      </div>
      <div className={classes.description}>
        <div>
          <span>{props.data.likes}</span>
          <img src={likeIcon} />
        </div>
        <div>
          {props.data.views}
          <img src={viewsIcon} />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
