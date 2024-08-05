import { useState } from "react";
import SearchBar from "../search-bar/index.jsx";
import MainBtn from "../global-btn/index.jsx";
import getMovieInformation from "../../helpers/api.js";
import "./index.css";

const SearchHeader = ({ setMovieList }) => {
  const [searchText, setSearchText] = useState("");
  const setSearchBtn = async (event) => {
    event.preventDefault();
    const res = await getMovieInformation(searchText);
    const movieInfo = res?.Search;
    setMovieList(movieInfo);
  };
  return (
    <>
      <div className="search-header">
        <div className="search-inner-wrapper">
          <h2 className="main-title"> Search Movies, TV Shows and more </h2>
          <div className="search-wrapper">
            <form>
              <SearchBar type="text" placeholderText="Type here to search" value={searchText} setValue={setSearchText} />
              <MainBtn buttonTitle="Search" onClick={setSearchBtn} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchHeader;
