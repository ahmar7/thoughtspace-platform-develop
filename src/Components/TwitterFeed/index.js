import { Timeline } from "react-twitter-widgets";
import "./index.css";

// Tweet (without options)
{
  /* <Tweet tweetId="841418541026877441" />; */
}

function TwitterFeed() {
  return (
    <div className="twitterfeedcon">
      <h1>FEEDS</h1>
      <div className="twitterfeedwrapper">
        <div className="timelinedesktop">
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "elonmusk",
            }}
            options={{
              replies: "false",
              chrome: "scroll ",
              height: "924",
              width: "365",
            }}
          />
        </div>
        <div className="timelinemobile">
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "elonmusk",
            }}
            options={{
              height: "250",
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default TwitterFeed;
