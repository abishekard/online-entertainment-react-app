import classes from "./ProfileHome.module.css";

const ProfileHome = () => {
  return (
    <div className={classes.container}>
      <div className={classes["form-container"]}>
        <h1>SIGN IN</h1>
        <form>
          <input type="text" required="true" placeholder="Name"></input>
          <input type="email" required="true" placeholder="Email"></input>
          <input type="password" required="true" placeholder="Password"></input>
          <button>Create Account</button>
        </form>
        <div className={classes["signup-forgot"]}>
          <h4 onClick={props.onLoginClick}>Login</h4>
          <h4>Forgot Password</h4>
        </div>
      </div>
    </div>
  );
};

export default ProfileHome;
