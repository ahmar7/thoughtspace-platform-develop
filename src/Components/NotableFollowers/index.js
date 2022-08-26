import "./index.css";
import NotableFollowerImg from "../../Assets/notablefollowerimg.png";
import TwitterIcon from "../../Assets/twitterIcon.svg";

function NotableFollowers(props) {
  return (
    <div className="notablefollowerscon">
      <div className="notablefollowerscard">
        <img className="notablefollowerimg" src={props?.NotableFollowersImg} />
        <div className="namebox">
          <p>{props?.NotableFollowerName}</p>
          <div className="namboxtwitter">
            <img src={TwitterIcon} />
            <p>{props?.NotableFollowerTwitter}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotableFollowers;
