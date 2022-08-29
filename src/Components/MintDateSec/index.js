import "./index.css";
import WhitePaperIcon from "../../Assets/whitePaperIcon.svg";
import Etherium from "../../Assets/etherium.png";

function MintDateSec(props) {
  return (
    <div className="mintdateseccon">
      <div className="mintdatesec">
        <div className="mintdatesec1">
          <p>
            Total Supply : <span className="sup">{props?.TotalSupply}</span>
          </p>
          <p>
            Mint Price :<span className="sup">{props?.MintPrice}</span>
          </p>
          <p>
            Current Price :<span className="sup">{props?.CurrentPrice}</span>
          </p>
        </div>
        <div className="mintdatesec2">
          <div className="mintdatebox">
            <p>Mint Date: {props?.MintDate}</p>
          </div>
          <div className="whitepaperbox">
            <p>White-Paper</p>
            <img src={WhitePaperIcon} />
          </div>
        </div>
        <div className="mintddateethimg">
          <img src={Etherium} />
        </div>
      </div>
    </div>
  );
}
export default MintDateSec;
