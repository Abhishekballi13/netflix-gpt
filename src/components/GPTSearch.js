import { BACKGROUND_IMG_URL } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"

const GPTSearch = () => {
  return (
    <div>
    <div className="absolute -z-10">
            <img alt="logo"
            src={BACKGROUND_IMG_URL}
            />
    </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GPTSearch