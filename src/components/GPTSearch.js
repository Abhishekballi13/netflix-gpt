import { BACKGROUND_IMG_URL } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"

const GPTSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
            <img className='w-screen h-screen' alt="logo"
            src={BACKGROUND_IMG_URL}
            />
    </div>
    <div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
    </>
  )
}

export default GPTSearch