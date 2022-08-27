import "./index.css";
import Header from "../../Components/Header";
import SearchSection from "../../Components/SearchSection/index";
import Footer from "../../Components/Footer";
import MobileNav from "../../Components/MobileNav/index";

function HomePage() {
  return (
    <div className="homepage-con">
      <div className="mobilenavwrapper">
        <MobileNav />
      </div>
      <div className="desktopnavwrapper">
        <Header />
      </div>
      <SearchSection />
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
}
export default HomePage;
