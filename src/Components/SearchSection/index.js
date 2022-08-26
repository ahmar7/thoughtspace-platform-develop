import "./index.css";
import SearchIcon from "../../Assets/searchIcon.svg";
import TrendingIcon from "../../Assets/trendingIcon.svg";
import CategoriesIcon from "../../Assets/categoriesIcon.svg";
import SubmitIcon from "../../Assets/submitIcon.svg";

function SearchSection({ handleChange, setTrending, trending, values }) {
  return (
    <div className="searchseccon">
      <div className="searchsecinput">
        <input
          type="text"
          placeholder="Search anything . . . . "
          onChange={handleChange}
          value={values}
        />
        <img src={SearchIcon} />
      </div>
      <div className="searchsecbtns">
        <button
          style={{
            width: "142px",
            height: "38px",
            background: "linear-gradient(90deg, #C1C8E4 -2.15%, #5680E9 100%)",
            cursor: "pointer",
          }}
          onClick={() => setTrending(!trending)}
        >
          <span>
            <img src={TrendingIcon} />
          </span>{" "}
          Trending
        </button>
        <button
          style={{
            width: "156px",
            height: "38px",
            background: "linear-gradient(90deg, #54B9EA -2.15%, #5680E9 100%)",
          }}
        >
          <span>
            <img src={CategoriesIcon} />
          </span>{" "}
          Categories
        </button>
        <button
          style={{
            width: "204px",
            height: "38px",
            background: "linear-gradient(90deg, #8860D0 -2.15%, #5680E9 100%)",
          }}
        >
          <span>
            <img src={SubmitIcon} />
          </span>{" "}
          Submit New Project
        </button>
      </div>
      <div className="searchsecbtnsmobile">
        <button
          style={{
            width: "72px",
            height: "22px",
          }}
        >
          Trending
        </button>
        <button
          style={{
            width: "112px",
            height: "22px",
          }}
        >
          Categories
        </button>
        <button
          style={{
            width: "91px",
            height: "22px",
          }}
        >
          Submit a Project
        </button>
      </div>
    </div>
  );
}
export default SearchSection;
