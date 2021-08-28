import classes from "./AudioList.module.css";
import likeIcon from "./../images/player/like.png";
import viewsIcon from "./../images/player/view.png";
import videoFrame from "./../images/player/frame.png";

const AudioListItem = (props) => {
  const audioClickListener = (event) => {
    props.onAudioClick(props.id);
  };

  return (
    <div className={classes.video_item_container} onClick={audioClickListener}>
      <img height="70px" width="120px" src={props.data.thumb_url} />
      <div>
        <div className={classes.title}>
          {/*  <span>title : </span> */}
          {console.log("......." + props.data)}
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
    </div>
  );
};

export default AudioListItem;
