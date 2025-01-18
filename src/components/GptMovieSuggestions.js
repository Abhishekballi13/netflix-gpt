import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gemini = useSelector((store)=>store.gpt);
  const {movieResults,movieNames} = gemini;

  if(!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {/* <h1>{movieNames[0]}</h1> */}
      {movieNames.map((movieName,index)=>(
        <MovieList 
          key={index}
          title={movieName}
          movies={movieResults[index].results}
        />
      ))}
    </div>
  )
}

export default GptMovieSuggestions