import Slider from "infinite-react-carousel";
import NotableFollowersMobile from "../NotableFollowersMobile";
import "./index.css";

function NotableFollowerCorouselMobile(props) {
  const settings = {
    centerPadding: 20,
    duration: 100,
    shift: 20,
    slidesToShow: 2,
    centerMode: true,
  };
  return (
    <div style={{ width: "98vw"}} className="notablefollowerslider">
      <Slider {...settings}>
        {props?.data?.map((item, index) => {
          return (
            <div className="notablecorouselsecscon">
            <div className="notablecorouselsecsmob">
              <NotableFollowersMobile
                NotableFollowerName={item?.NotableFollowerName}
                NotableFollowerTwitter={item?.NotableFollowerTwitter}
                NotableFollowersImg={item?.NotableFollowersImg}
              />
            </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
export default NotableFollowerCorouselMobile;
