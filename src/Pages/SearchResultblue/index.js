import "./index";
import HeadComp from "../../Components/HeadComp";
import Corousel from "../../Components/Corousel";
import WhitePaperIcon from '../../Assets/whitePaperIcon.svg'
import Etherium from '../../Assets/etherium.png'
import Footer from "../../Components/Footer";

function SearchResultBlue() {
  return (
    <div>
      <HeadComp />
      <div className="corouselparent">
        <Corousel />
      </div>
      <div style={{background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="searchresultssec3con">
          <div style={{backGround: 'white'}} className="categoriescon">
            <div className="categoriesheading">
              <h1>CATEGORIES</h1>
            </div>
            <div  className="categoriesbtnsmobile">
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                width: "80vw",
                flexWrap: "wrap",
              }}
              className="categoriesbtns"
            >
              <button
                style={{
                  width: "62px",
                  height: "22px",
                  background:
                    "linear-gradient(94.96deg, rgba(231, 238, 255, 0.5) 6.5%, rgba(224, 234, 255, 0.5) 96%)",
                  borderRadius: "60px",
                  border: "none",
                  fontWeight: "400",
                  fontSize: "10px",
                  color: "#3B4F7D",
                }}
              >
                Community
              </button>
              <button
                style={{
                  width: "62px",
                  height: "22px",
                  background:
                    "linear-gradient(94.96deg, rgba(231, 238, 255, 0.5) 6.5%, rgba(224, 234, 255, 0.5) 96%)",
                  borderRadius: "60px",
                  border: "none",
                  fontWeight: "400",
                  fontSize: "10px",
                  color: "#3B4F7D",
                }}
              >
                Metaverse
              </button>
              <button
                style={{
                  width: "43px",
                  height: "22px",
                  background:
                    "linear-gradient(94.96deg, rgba(231, 238, 255, 0.5) 6.5%, rgba(224, 234, 255, 0.5) 96%)",
                  borderRadius: "60px",
                  border: "none",
                  fontWeight: "400",
                  fontSize: "10px",
                  color: "#3B4F7D",
                }}
              >
                Utility
              </button>
              <button
                style={{
                  width: "43px",
                  height: "22px",
                  background:
                    "linear-gradient(94.96deg, rgba(231, 238, 255, 0.5) 6.5%, rgba(224, 234, 255, 0.5) 96%)",
                  borderRadius: "60px",
                  border: "none",
                  fontWeight: "400",
                  fontSize: "10px",
                  color: "#3B4F7D",
                }}
              >
                Art
              </button>
              <button
                style={{
                  width: "57px",
                  height: "22px",
                  background:
                    "linear-gradient(94.96deg, rgba(231, 238, 255, 0.5) 6.5%, rgba(224, 234, 255, 0.5) 96%)",
                  borderRadius: "60px",
                  border: "none",
                  fontWeight: "400",
                  fontSize: "10px",
                  color: "#3B4F7D",
                }}
              >
                DAO
              </button>
              <button
                style={{
                  width: "75px",
                  height: "22px",
                  background:
                    "linear-gradient(90deg, rgba(86, 128, 233, 0.1) 0%, rgba(136, 96, 208, 0.1) 97.31%);",
                  borderRadius: "60px",
                  border: "none",
                  fontWeight: "400",
                  fontSize: "10px",
                  color: "#3B4F7D",
                }}
              >
                Collectibles
              </button>
              <button
                style={{
                  width: "48px",
                  height: "22px",
                  background:
                    "linear-gradient(90deg, rgba(86, 128, 233, 0.1) 0%, rgba(136, 96, 208, 0.1) 97.31%);",
                  borderRadius: "60px",
                  border: "none",
                  fontWeight: "400",
                  fontSize: "10px",
                  color: "#3B4F7D",
                }}
              >
                Defi
              </button>
            </div>
            </div>
            <div className="categoriesbtnsdesktop">
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                width: "80vw",
                flexWrap: "wrap",
              }}
              className="categoriesbtns"
            >
              <button
                style={{
                  width: "148px",
                  height: "52px",
                  background:
                    "linear-gradient(94.96deg, rgba(231, 238, 255, 0.5) 6.5%, rgba(224, 234, 255, 0.5) 96%)",
                  borderRadius: "60px",
                  border: "none",
                  fontWeight: "400",
                  fontSize: "20px",
                  color: "#3B4F7D",
                }}
              >
                Community
              </button>
              <button
                style={{
                  width: "148.11px",
                  height: "52px",
                  background:
                    "linear-gradient(94.96deg, rgba(231, 238, 255, 0.5) 6.5%, rgba(224, 234, 255, 0.5) 96%)",
                  borderRadius: "60px",
                  border: "none",
                  fontWeight: "400",
                  fontSize: "20px",
                  color: "#3B4F7D",
                }}
              >
                Metaverse
              </button>
              <button
                style={{
                  width: "102px",
                  height: "52px",
                  background:
                    "linear-gradient(94.96deg, rgba(231, 238, 255, 0.5) 6.5%, rgba(224, 234, 255, 0.5) 96%)",
                  borderRadius: "60px",
                  border: "none",
                  fontWeight: "400",
                  fontSize: "20px",
                  color: "#3B4F7D",
                }}
              >
                Utility
              </button>
              <button
                style={{
                  width: "102px",
                  height: "52px",
                  background:
                    "linear-gradient(94.96deg, rgba(231, 238, 255, 0.5) 6.5%, rgba(224, 234, 255, 0.5) 96%)",
                  borderRadius: "60px",
                  border: "none",
                  fontWeight: "400",
                  fontSize: "20px",
                  color: "#3B4F7D",
                }}
              >
                Art
              </button>
              <button
                style={{
                  width: "136px",
                  height: "52px",
                  background:
                    "linear-gradient(94.96deg, rgba(231, 238, 255, 0.5) 6.5%, rgba(224, 234, 255, 0.5) 96%)",
                  borderRadius: "60px",
                  border: "none",
                  fontWeight: "400",
                  fontSize: "20px",
                  color: "#3B4F7D",
                }}
              >
                DAO
              </button>
              <button
                style={{
                  width: "179px",
                  height: "52px",
                  background:
                    "linear-gradient(90deg, rgba(86, 128, 233, 0.1) 0%, rgba(136, 96, 208, 0.1) 97.31%);",
                  borderRadius: "60px",
                  border: "none",
                  fontWeight: "400",
                  fontSize: "20px",
                  color: "#3B4F7D",
                }}
              >
                Collectibles
              </button>
              <button
                style={{
                  width: "130px",
                  height: "52px",
                  background:
                    "linear-gradient(90deg, rgba(86, 128, 233, 0.1) 0%, rgba(136, 96, 208, 0.1) 97.31%);",
                  borderRadius: "60px",
                  border: "none",
                  fontWeight: "400",
                  fontSize: "20px",
                  color: "#3B4F7D",
                }}
              >
                Defi
              </button>
            </div>
            </div>
            <div className="summarycon">
              <div className="summaryhead">
                <h3>SUMMARY</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor{" "}
                </p>
              </div>
              <div className="summaryboxes">
                <div className="summarybox">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="summarybox">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="summarybox">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
    </div>
    </div>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px'}} className="mintdateseccon">
      <div style={{width: '90vw'}} className="mintdatesec">
        <div className="mintdatesec1">
          <p>Total Supply : 10k</p>
          <p>Mint Price : 5 ETH</p>
          <p>Current Price : 0.5 ETH</p>
        </div>
        <div className="mintdatesec2">
            <div className="mintdatebox">
                <p>Mint Date: 10h 10m</p>
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
    <Footer />
    </div>
  );
}
export default SearchResultBlue;
