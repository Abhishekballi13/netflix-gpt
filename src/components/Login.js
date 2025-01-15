import { useState } from "react"
import Header from "./Header"

const Login = () => {

  const [isSignInForm,SetIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
     SetIsSignInForm(!isSignInForm);
  }

  return (
    <div>
        <Header/>
        <div className="absolute">
            <img alt="logo"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_small.jpg"
            />
        </div>
        <form className="w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>}
          <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
          <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
          <button className="p-4 my-4 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sing Up"}</button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered Sing In Now"}</p>
        </form>
    </div>
  )
}

export default Login