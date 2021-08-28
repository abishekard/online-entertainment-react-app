import classes from "./AudioList.module.css";
import AudioListItem from "./AudioListItem";

const AudioList = (props) => {
  const audioClickHandler = (id) => {
    props.onAudioClick(id);
    console.log(id);
  };

  return (
    <div className={classes.container}>
      {props.audioList.map((val, idx) => {
        return (
          <AudioListItem
            data={val}
            key={idx}
            id={idx}
            onAudioClick={audioClickHandler}
          />
        );
      })}
    </div>
  );
};

export default AudioList;
