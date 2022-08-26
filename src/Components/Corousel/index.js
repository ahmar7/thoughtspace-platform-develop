import "./index.css";
import Slider from "infinite-react-carousel";
import CorouselImg1 from "../../Assets/corouselimg1.png";
import CorouselImg2 from "../../Assets/corouselimg2.png";
import CorouselImg3 from "../../Assets/corouselimg3.png";

function Corousel() {
  const settings = {
    centerPadding: 20,
    duration: 100,
    initialSlide: true,
    // shift: 40,
    slidesToShow: 3,
    centerMode: true,
  };
  return (
    <div className="corouselwrapper">
      <div className="corouselcon">
        <Slider {...settings}>
          <div className="corouselimgswrapper">
            <div className="corouselimgscon">
              <img src={CorouselImg1} />
              {/* <img src={CorouselImg2} />
              <img src={CorouselImg3    } /> */}
            </div>
          </div>
          <div className="corouselimgswrapper">
            <div className="corouselimgscon">
              {/* <img src={CorouselImg1} /> */}
              <img src={CorouselImg2} />
              {/* <img src={CorouselImg3} /> */}
            </div>
          </div>
          <div className="corouselimgswrapper">
            <div className="corouselimgscon">
              {/* <img src={CorouselImg1} /> */}
              {/* <img src={CorouselImg2} /> */}
              <img src={CorouselImg3} />
            </div>
          </div>
          <div className="corouselimgswrapper">
            <div className="corouselimgscon">
              <img src={CorouselImg1} />
              {/* <img src={CorouselImg2} />
              <img src={CorouselImg3} /> */}
            </div>
          </div>
          <div className="corouselimgswrapper">
            <div className="corouselimgscon">
              {/* <img src={CorouselImg1} /> */}
              <img src={CorouselImg2} />
              {/* <img src={CorouselImg3} /> */}
            </div>
          </div>
          <div className="corouselimgswrapper">
            <div className="corouselimgscon">
              {/* <img src={CorouselImg1} /> */}
              {/* <img src={CorouselImg2} /> */}
              <img src={CorouselImg3} />
            </div>
          </div>
          <div className="corouselimgswrapper">
            <div className="corouselimgscon">
              <img src={CorouselImg1} />
              {/* <img src={CorouselImg2} />
              <img src={CorouselImg3} /> */}
            </div>
          </div>
          <div className="corouselimgswrapper">
            <div className="corouselimgscon">
              {/* <img src={CorouselImg1} /> */}
              <img src={CorouselImg2} />
              {/* <img src={CorouselImg3} /> */}
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default Corousel;
