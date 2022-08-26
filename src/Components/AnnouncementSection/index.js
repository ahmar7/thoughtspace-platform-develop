import React from "react";
import "./index.css";

function AnnouncementSection(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "15px",
      }}
      className="announcementCon"
    >
      <div className="featurecard">
        {props?.data?.map((item, index) => {
          return (
            <div
              style={{
                lineHeight: "20px",
                paddingTop: "7px",
                paddingLeft: "13px",
              }}
              className="announcement"
            >
              <div className="announcement-heading">
                <p>Welcome to the era of zero</p>
              </div>
              <div className="announcement-description">
                <p>Lorem ipsum color de smit asdfsdfsafsdfsdf</p>
              </div>
              <div className="announcement-date">
                <p> Jun 03 2021 </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default AnnouncementSection;
