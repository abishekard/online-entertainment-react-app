import classes from "./VideoList.module.css";
import likeIcon from "./../images/player/like.png";
import viewsIcon from "./../images/player/view.png";
import videoFrame from "./../images/player/frame.png";

const VideoListItem = (props) => {
  const videoClickListener = (event) => {
    props.onVideoClick(props.id);
  };

  return (
    <div className={classes.video_item_container} onClick={videoClickListener}>
      <img height="70px" width="120px" src={props.data.thumb_url} />
      <div>
        <div className={classes.title}>
          {/*  <span>title : </span> */}
          <span>{props.data.video_title}</span>
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

export default VideoListItem;
