import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";


const Browse = () => {
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  //fetch data from tmdb api and update store
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header/>
      {showGptSearch ? (
        <GPTSearch/>
      ) : (
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      )}
      {/* 
       MainContainer
         - Video Background
         - Video Title
        Secondary Container
         - movieList * n
           - cards * n
       */}
    </div>
  )
}

export default Browse