import "./index.css";
import BlackArrow from "../../Assets/blackarrow.svg";
import Stars from "../../Assets/stars.svg";
import ConnectWalletIcon from "../../Assets/connectWalletIcon.svg";
import Header from "../Header/index.css";
import Hamburger from '../../Assets/hamburger.svg'


function HeadComp() {
  return (
    <div className="headcompcon">
      <img src={BlackArrow} />
      <div style={{marginLeft: '130px'}} className="searchresultssubheader">
        <p>Crypto Punks</p>
        <div className="starssec">
          <img src={Stars} />
          <p>568 Reviews</p>
        </div>
      </div>
      <div>
      <div style={{width: '259px'}} className="header-sec2">
        <button>
          <span>
            <img src={ConnectWalletIcon} />
          </span>
          Connect Wallet
        </button>
        <img src={Hamburger} />
      </div>
      </div>
    </div>
  );
}
export default HeadComp;
