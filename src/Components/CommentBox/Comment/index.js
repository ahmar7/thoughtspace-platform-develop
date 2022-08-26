import "./index.css";
import Avatar from "../../../Assets/notablefollowerimg.png";
import uparrow from "../../../Assets/uparrow.svg";
import twitterIcon from "../../../Assets/twitterIcon.svg";
import downarrow from "../../../Assets/downarrow.svg";
import ReplyIcon from "../../../Assets/replyicon.svg";
import CommentBoxInput from "../CommentBoxInput";

function Comment(props) {
  return (
    <div className="commentboxcon">
      <div className="commentcon">
        <div className="commentseccon">
          <div className="commentsecimg">
            <img src={props?.ProfileAvatar} />
          </div>
          <div className="commentsecinfocon">
            <div className="commentsecinfosec1">
              <p>{props?.ProfileName}</p>
              <p>total upvotes · {props?.Upvotes}</p>
              <img src={uparrow} />
              <p>{props?.Time}</p>
            </div>
            <div className="commentsecinfosec2">
              <div className="commentsectwitter">
                <img src={twitterIcon} />
                <p>{props?.TwitterID}</p>
              </div>
              <p>{props?.TwitterFollowers}</p>
            </div>
            <div className="commentsecinfosec3">
              <p>{props?.Comment} </p>
            </div>
            <div className="commentsecinfosec4">
              <div className="updownsec">
                <button>
                  <span style={{cursor: 'pointer'}} >
                    <img src={uparrow} />
                  </span>
                </button>
                <p>{props?.Upvotes}</p>
                <button>
                  <span style={{cursor: 'pointer'}}>
                    <img src={downarrow} />
                  </span>
                </button>
              </div>
              {!props?.reply && (
                <div className="replysec" onClick={props.handleReply && props.handleReply}>
                  <img src={ReplyIcon} />
                  <p>Reply</p>
                </div>
              )}
              <p className="commentsectoolbar">Give Tip</p>
              <p className="commentsectoolbar">Share</p>
              <p className="commentsectoolbar">Save</p>
              <p className="commentsectoolbar">Follow</p>
              <p className="commentsectoolbarreport">Report</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Comment;
