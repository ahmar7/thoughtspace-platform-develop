import "./index.css";
import Arrow from "../../Assets/arrow.svg";
import SearchIcon from "../../Assets/searchIcon.svg";
import ConnectWalletIcon from "../../Assets/connectWalletIcon.svg";
import settingIcon from "../../Assets/settingIcon.svg";
import Avatar from "../../Assets/Avatar.svg";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  const navigate = useNavigate();
  return (
    <div className="navbarcon">
      <div
        className="navbarsec1"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        <img src={Arrow} />
      </div>
      <div style={{ width: "45.77vw" }} className="searchsecinput">
        <input
          style={{ width: "35.9vw" }}
          type="text"
          placeholder="Search anything . . . . "
          onChange={(e) => {
            props?.setValues(e.target.value);
            if (e.target.value?.length >= 3) {
              navigate("/");
            }
          }}
          value={props?.values}
        />
        <img src={SearchIcon} />
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
  );
}
export default NavBar;
