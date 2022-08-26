import React from "react";
import MyVerticallyCenteredModal from "../Modal";
import "./index.css";
import MobileArrow from "../../Assets/mobilearrow.svg";
import SearchIcon from "../../Assets/mobilesearch.svg";
import threedots from "../../Assets/threedots.svg";
import { useNavigate } from "react-router-dom";

function MobileHeader() {
  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className="mobileheader">
      <div className="mobileheaderbutton">
        <button style={{cursor: "pointer"}} onClick={() => navigate("/")}>
          <span>
            <img src={MobileArrow} />
          </span>
        </button>
      </div>
      <div className="mobileheadersearchinput">
        <div className="searchsecinputmobile">
          <input type="text" placeholder="Search anything . . . . " />
          <img src={SearchIcon} />
        </div>
      </div>
      <div className="mobileheaderbutton">
        <MyVerticallyCenteredModal />
      </div>
    </div>
  );
}
export default MobileHeader;
