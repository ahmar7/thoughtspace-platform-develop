import React from "react";
import CryptoPunkImg from "../../Assets/cryptoPunk.png";
import Stars from "../../Assets/stars.svg";
import EthIcon from "../../Assets/eth.svg";
import { Link } from "react-router-dom";
import './index.css'

function SearchResultsCards(props) {
  return (
    <div className="search-result-card-con" style={{ cursor: "pointer", textDecoration: 'none' }}>
      <Link to={`/${props?.data?.id}`}>
        <div style={{ marginTop: "25px" }}>
          <div className="featurecardsec1con">
            <div className="featurecardsec1img">
              <img src={props.data.MainImg} />
            </div>
            <div className="featurecardsec1info">
              <p>{props.data.Heading}</p>
              <div className="infosec1">
                <img src={Stars} />
                <p>{props.data.Rating}</p>
              </div>
            </div>
          </div>
          <div className="featuresearchtext">
            <p>solseekers.com &nbsp; &gt; &nbsp; cryptopunks </p>
          </div>
          <div className="featurecarddescription">
            <p>{props.data.text}</p>
            <div className="featurecardbtns">
              <button className="ethbtn">
                <span>
                  <img src={props.data.ButtonTag1Img} />
                </span>
                {props.data.ButtonTag1}
              </button>
              <button className="ethcount">{props.data.ButtonTag2}</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default SearchResultsCards;
