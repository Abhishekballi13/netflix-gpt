import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";


const Login = () => {

  const [isSignInForm,SetIsSignInForm] = useState(true);
  //for error messages
  const [errorMessage,setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();
 
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
     //Validate the form data
     if(isSignInForm){

      const message = checkValidData(email.current.value,password.current.value);
      setErrorMessage(message);

      if(message) return;

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage);
        });

     }
     else{
      const message = checkValidData(email.current.value,password.current.value,name.current.value);
      setErrorMessage(message);

      if(message) return;

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName:name.current.value ,photoURL:USER_AVATAR,
          }).then(() => {
            // Profile updated!
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            navigate("/browse")
            // ...
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
            // ...
          });
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage);
          // ..
        });
     }
     //this means there was some error message returned

     //Sign In Sign Up Logic
    //  if(!isSignInForm){
      
    //  }
    //  else{

    //  }
  }

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
        <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>}
          <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
          <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
          <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
          <button onClick={handleButtonClick}
          className="p-4 my-4 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered Sing In Now"}</p>
        </form>
    </div> 
  )
}

export default Login