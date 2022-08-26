import "./index.css";
import Logo from "../../Assets/logo.png";
import ConnectWalletIcon from "../../Assets/connectWalletIcon.svg";
import settingIcon from "../../Assets/settingIcon.svg";
import Avatar from "../../Assets/Avatar.svg";

function Header() {
  return (
      <div className="headerWrapper">
    <div className="headerCon">
      <div className="header-sec1">
        <img src={Logo} />
      </div>
      <div className="header-sec2">
        <button>
          <span>
            <img src={ConnectWalletIcon} />
          </span>
          Connect Wallet
        </button>
        <img style={{ marginTop: "5px" }} src={settingIcon} />
        <img style={{ marginTop: "5px" }} src={Avatar} />
      </div>
    </div>
    </div>
  );
}
export default Header;
