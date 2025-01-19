import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies);
  return (
    <div className="bg-black">
    {/* this div does not have background color so it will take from parent */}
    <div className="mt-0 md:-mt-51 pl-4 md:pl-12 relative z-20">
    <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
    <MovieList title={"Trending"} movies={movies?.nowPlayingMovies}/>
    <MovieList title={"Popular"} movies={movies?.popularMovies}/>
    <MovieList title={"Upcoming"} movies={movies?.nowPlayingMovies}/>
    <MovieList title={"Horror"} movies={movies?.nowPlayingMovies}/>
    </div>
        {/* 
          MovieList - popular
            Movie cards *n
            MOvieList - now playing
            MovieList - Trending
            MovieList - Horror
         */}
    </div>
  )
}

export default SecondaryContainer