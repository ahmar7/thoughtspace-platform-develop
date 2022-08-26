import "./index.css";
import Slider from "infinite-react-carousel";
import NotableFollowers from "../NotableFollowers/index";
import NotableFollowerCorouselMobile from "../NotableFollowerCorouselMobile";

function NotableFollowerCorousel(props) {
  const settings = {
    centerPadding: 40,
    duration: 100,
    initialSlide: true,
    shift: 20,
    slidesToShow: 2,
  };
  return (
    <div style={{ width: "50vw"}} className="notablefollowerslider">
      <Slider {...settings}>
        {props?.data?.map((item, index) => {
          return (
            <div style={{marginTop: "20vw"}} className="notablecorouselsecscon">
              <NotableFollowers
                NotableFollowerName={item?.NotableFollowerName}
                NotableFollowerTwitter={item?.NotableFollowerTwitter}
                NotableFollowersImg={item?.NotableFollowersImg}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
export default NotableFollowerCorousel;
