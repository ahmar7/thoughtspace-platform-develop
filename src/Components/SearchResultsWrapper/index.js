import React from "react";
import SearchResultsCards from "../SearchResultsCards";
import Data from "../../Utils/Data";
import './index.css'

function SearchResultsWrapper(props) {
  const [findArray, setFindArray] = React.useState();

  const filteredArray = Data?.filter((v) => {
    return v?.Heading?.toLocaleLowerCase()?.includes(
      props?.values.toLowerCase()
    );
  });
  const filteredTrendingArray = Data?.filter((v) => {
    return (
      v?.Heading?.toLocaleLowerCase()?.includes(props?.values.toLowerCase()) &&
      v?.trending === props?.trending
    );
  });
  return (
    <div>
      <div className="featurecard2con">
        <div className="featurecard2">
          <div className="featurecard2heading">
            <p>
              {filteredArray?.length > 0
                ? `1-${
                    props?.trending
                      ? filteredTrendingArray?.length
                      : filteredArray?.length
                  }`
                : "0"}{" "}
              of {Data?.length} results for "{props?.values}"
            </p>
              {filteredArray?.length === 0 && (
                <div className="url-input">
                  <input placeholder="Please enter the URL of the project you are searching for and we will do the rest" />
                  <button>Submit</button>
                </div>
              )}
          </div>
          {!props?.trending &&
            filteredArray?.map((item, index, arr) => {
              return <SearchResultsCards data={item} />;
            })}
          {props?.trending &&
            filteredTrendingArray?.map((item, index, arr) => {
              return <SearchResultsCards data={item} />;
            })}
        </div>
      </div>
    </div>
  );
}
export default SearchResultsWrapper;
