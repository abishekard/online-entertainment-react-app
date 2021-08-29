import classes from "./WallpaperHome.module.css";
import likeIcon from "./../images/player/like.png";
import viewsIcon from "./../images/player/view.png";

const WallpaperItem = (props) => {
  console.log(props.data.image_url);
  return (
    <div className={`col col-lg-3 col-md-4 mt-3`}>
      <div className={classes.item_container}>
        <img src={props.data.image_url} />
        <div className={classes.child_container}>
          <span className={classes.image_title}>{props.data.image_title}</span>
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
    </div>
  );
};

export default WallpaperItem;
