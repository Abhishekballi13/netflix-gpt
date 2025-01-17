import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut,onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import {toggleGptSearchView} from "../utils/gptSlice"
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)


  //handle sign out 
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      navigate("/error");
      // An error happened.
    });
  }

  //as header is present all across the app we are keeping this logic here,whenever authChanged is called it will automatically 
  //redirect him to if user is loged in ->> browse page
  // if user is logged out ->> login/sign up page
  //now our route is protected, if a user is not logged in he will not be able to move to browse page

  //we are using useEffect here because we want this eventListener to be once so we keep the dependency array to be empty
  //this will dispatch the action when user sign in /sign up/sign out
  //we are checking auth evrry time page loads,if user is log in it will update the store by adding user
  //if user logs out it will remove the user by removing it
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth
      , (user) => {
      if (user) {
        //when user sign in 
        const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          //after disptahcing the action and updating the slice 
          //we automatically move to browse page
          navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        //after we sign out and the user is removed we move
        //back to our login sign up page
        navigate("/");
      }
    });
    
    //whenver my comoponent unmounts unsubscribe is called
    return () => unsubscribe();
  },[])

  const handleGPTClick = () => {
    //Toggle GPT Search Button
     dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
       dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
         className="w-44"
         src={LOGO}
          alt="logo"  
        />
        {user && (
          <div className="flex p-2">
          {showGptSearch && (<select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>)}
          <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGPTClick}>{showGptSearch?"HomePage":"GPT Search"}</button>
          <img alt="usericon" className="h-12 w-12"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
        </div>
        )}   
    </div>
  )
}

export default Header

