import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstants'
import { useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { API_OPTIONS, GEMINI_API } from '../utils/constants';
import { addGeminiMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);

    //search movie in tmdb api by name
    const searchMovieTmdb = async (movie) => {
         const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
         const json = await data.json();
         return json;
    }
    
    const handleGptSearchClick = async () => {  
    // const { GoogleGenerativeAI } = require("@google/generative-ai");
      const genAI = new GoogleGenerativeAI(GEMINI_API);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = "Act as a Movie recommendation system and suggest some movies for the query : "+ searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      const result = await model.generateContent(prompt);
      // if(!result) do error handling here
      //we are converting our text to array by splitting it on ,
      const geminiMovies = result?.response.text().split(",");
      const promiseArray = geminiMovies.map((movie) => searchMovieTmdb(movie));
      //promise.all will resolve all the promises
      const tmdbResults = await Promise.all(promiseArray);
      //we will get array of promises in data [Promise,Promise,Promise,Promise,Promise]

      //adding gemini results to our store
      dispatch(addGeminiMovieResult({movieNames : geminiMovies,movieResults : tmdbResults}));
    }
  return (
    <div className='pt-[30%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}> 
          <input ref = {searchText} type="text" className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}></input>
          <button className='py-2 px-4 m-4 bg-red-700 rounded-lg col-span-3' onClick={handleGptSearchClick}>{lang[langKey].search}</button> 
        </form>
    </div>
  )
}

export default GptSearchBar