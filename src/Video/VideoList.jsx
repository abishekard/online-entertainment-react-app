import classes from "./VideoList.module.css";
import VideoListItem from "./VideoListItem";

const VideoList = (props) => {
  const videoClickHandler = (id) => {
    props.onVideoClick(id);
    console.log(id);
  };

  return (
    <div className={classes.container}>
      {props.videoList.map((val, idx) => {
        return (
          <VideoListItem
            data={val}
            key={idx}
            id={idx}
            onVideoClick={videoClickHandler}
          />
        );
      })}
    </div>
  );
};

export default VideoList;
