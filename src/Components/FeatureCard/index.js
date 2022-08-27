import "./index.css";
import CryptoPunkImg from "../../Assets/cryptoPunk.png";
import Stars from "../../Assets/stars.svg";
import EthIcon from "../../Assets/eth.svg";
import SearchResultsWrapper from "../SearchResultsWrapper";

function FeatureCard({ values, trending }) {
  return (
    <div className="featurecardcon">
      <div className="featurecard">
        <div className="featurecardheading">
          <h3>Featured</h3>
        </div>
        <div className="featurecardsec1con">
          <div className="featurecardsec1img">
            <img src={CryptoPunkImg} />
          </div>
          <div className="featurecardsec1info">
            <p>CryptoPunks</p>
            <div className="infosec1">
              <img src={Stars} />
              <p>568</p>
            </div>
          </div>
        </div>
        <div className="featuresearchtext">
          <p>solseekers.com &nbsp; &gt; &nbsp; cryptopunks </p>
        </div>
        <div className="featurecarddescription">
          <p>
            26 February 2022 - 10,000 unique collectible characters with proof
            of ownership stored on the Ethereum blockchain.
          </p>
        </div>
      </div>
      <br />

      <div className="featurecard">
        <div className="featurecardheading">
          <h3>0 of 5 results for "test"</h3>
        </div>

        <div style={{ width: "100%" }} className="featurecarddescription pd">
          <h3 className="search-desc">
            Please enter the URL of the project you are searching for and we
            will do the rest
          </h3>
          <div className="searchsecinput-web">
            <input type="text" placeholder="Search anything..." value="" />
            <button className="serchbtn">Submit</button>
          </div>
        </div>
      </div>
      {values?.length >= 3 && (
        <SearchResultsWrapper values={values} trending={trending} />
      )}
    </div>
  );
}
export default FeatureCard;
