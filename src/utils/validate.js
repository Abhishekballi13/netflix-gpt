
export const checkValidData = (email,password,name) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isUserNameValid = /^[A-Za-z ]{3,16}$/.test(name);
    
    if(!isUserNameValid){
        return "User Name is not valid";
    }
    if(!isEmailValid){
        return "Email id is not valid";
    }
    if(!isPasswordValid){
        return "Password is not valid";
    }
    return null;
}


