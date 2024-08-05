import { useState } from "react";
import SearchHeader from "./components/search_header";
import MovieCardContainer from "./components/card-container";
const App = () => {
  const [movieList, setMovieList] = useState([]);
  return (
    <div className="App">
      <SearchHeader setMovieList={setMovieList} />
      <MovieCardContainer movieList={movieList} />
    </div>
  );
};

export default App;
