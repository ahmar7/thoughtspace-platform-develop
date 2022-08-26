import React from "react";
import "./index.css";
import Header from "../../Components/Header";
import SearchSection from "../../Components/SearchSection";
import FeatureCard from "../../Components/FeatureCard/index";
import Footer from "../../Components/Footer/index";
import MobileNav from "../../Components/MobileNav/index";
import AnnouncementSection from "../../Components/AnnouncementSection";

function SearchPage({ values, setValues }) {
  const [trending, setTrending] = React.useState(false);

  const handleChange = (e) => {
    setValues(e.target.value);
  };

  const data = [
    {
      title: "Welcome to the era of zero",
      desc: "Lorem ipsum color de smit asdfsdfsafsdfsdf",
      date: "Jun 03 2021",
    },
    {
      title: "Welcome to the era of zero",
      desc: "Lorem ipsum color de smit asdfsdfsafsdfsdf",
      date: "Jun 03 2021",
    },
    {
      title: "Welcome to the era of zero",
      desc: "Lorem ipsum color de smit asdfsdfsafsdfsdf",
      date: "Jun 03 2021",
    },
  ];
  return (
    <div className="searchpagecon">
      <div className="mobilenavwrapper">
        <MobileNav />
      </div>
      <div className="desktopnavwrapper">
        <Header />
      </div>
      <SearchSection
        handleChange={handleChange}
        setTrending={setTrending}
        trending={trending}
        values={values}
      />
      <FeatureCard values={values} trending={trending} />
      {values?.length < 3 && <AnnouncementSection data={data} />}
      <div style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </div>
  );
}
export default SearchPage;
