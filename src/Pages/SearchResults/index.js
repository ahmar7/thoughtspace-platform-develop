import "./index.css";
import NavBar from "../../Components/NavBar";
import Stars from "../../Assets/stars.svg";
import Corousel from "../../Components/Corousel";
import MintDateSec from "../../Components/MintDateSec/index";
import FollowersSec from "../../Components/FollowersSec/index";
import NotableFollowerCorousel from "../../Components/NotableFollowerCorousel/index";
import LineChart from "../../Components/LineChart/index";
import TeamMembers from "../../Components/TeamMembers/index.";
import TwitterFeed from "../../Components/TwitterFeed";
import MobileHeader from "../../Components/MobileHeader";
import NotableFollowerCorouselMobile from "../../Components/NotableFollowerCorouselMobile";
import LineChartMobile from "../../Components/LineChartMobile";
import CommentWrapper from "../../Components/CommentBox/index";
import { useParams } from "react-router";
import Data from "../../Utils/Data";
import Footer from "../../Components/Footer";

function SearchResults({ values, setValues }) {
  const { slug } = useParams();

  const product = Data[slug];

  if (!product) {
    return <div>not found</div>;
  }

  return (
    <div>
      <div className="search-results-page-parent">
        <div>
          <div className="mobilenavwrapper">
            <MobileHeader />
          </div>
          <div className="desktopnavwrapper">
            <NavBar values={values} setValues={setValues} />
          </div>
          <div className="searchresultssubheader">
            <p>{product?.Heading}</p>
            <div className="starssec">
              <img src={Stars} alt="#" />
              <p>{product?.Rating} Reviews</p>
            </div>
          </div>
          <div className="corouselparent">
            <Corousel />
          </div>
          <div className="searchresultssec3wrapper">
            <div className="searchresultssec3con">
              <div className="categoriescon">
                <div className="categoriesheading">
                  <h1>Category</h1>
                </div>
                <div className="categoriesbtnsmobile">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "start",

                      flexWrap: "wrap",
                    }}
                    className="categoriesbtns"
                  >
                    {product?.categories?.map((v) => {
                      return (
                        <button
                          style={{
                            width: "62px",
                            height: "22px",
                            marginLeft: "5px",
                            marginRight: "5px",
                            background:
                              "linear-gradient(94.96deg, rgba(231, 238, 255, 0.5) 6.5%, rgba(224, 234, 255, 0.5) 96%)",
                            borderRadius: "60px",
                            border: "none",
                            fontWeight: "400",
                            fontSize: "10px",
                            color: "#3B4F7D",
                          }}
                        >
                          {v}
                        </button>
                      );
                    })}
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
                      marginRight: "80px",
                    }}
                    className="categoriesbtns"
                  >
                    {product?.categories?.map((v) => {
                      return (
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
                          {v}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="summarycon">
                  <div className="summaryhead">
                    <h3>Summary</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor{" "}
                    </p>
                  </div>
                  <div className="summaryboxes">
                    <div className="summarybox">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </p>
                    </div>
                    <div className="summarybox">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </p>
                    </div>
                    <div className="summarybox">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "150px",
                  }}
                  className="mintdatesecwrapper"
                >
                  <div>
                    <MintDateSec
                      MintDate={product?.MintDate}
                      MintPrice={product?.MintPrice}
                      CurrentPrice={product?.CurrentPrice}
                      TotalSupply={product?.TotalSupply}
                    />
                  </div>
                  <div>
                    <FollowersSec
                      TiktokFollowers={product?.TiktokFollowers}
                      TwitterFollowers={product?.TwitterFollowers}
                      DiscordIcon={product?.DiscordIcon}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  className="twitterfeedparent"
                >
                  <div>
                    <div className="notablecorouselparent">
                      <div
                        style={{ marginTop: "30px" }}
                        className="notablecorouselwrapper"
                      >
                        <h1 className="notableheading">Notable Follwers</h1>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "-20px",
                          }}
                        >
                          <div className="corouseldesktop">
                            <NotableFollowerCorousel
                              data={product?.NotableFollowers}
                            />
                          </div>
                          <div className="corouselmobile">
                            <NotableFollowerCorouselMobile
                              data={product?.NotableFollowers}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="top-c">
                      <div className="deskchart">
                        <LineChart data={product?.GraphData} />
                      </div>
                      <div className="mobilechart">
                        <LineChartMobile data={product?.GraphData} />
                      </div>
                    </div>
                    <div className="team-m">
                      <TeamMembers data={product?.TeamMembers} />
                    </div>
                  </div>
                  <div className="twitterfeedparent">
                    <TwitterFeed />
                  </div>
                </div>
                <div>
                  <CommentWrapper data={product?.Comments} />
                </div>
                <div style={{ marginTop: "100px" }}>
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchResults;
