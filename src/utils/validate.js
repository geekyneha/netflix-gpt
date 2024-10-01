export const checkValidData = (email, password)=>{

    // eslint-disable-next-line no-useless-escape
    // const isUserNameValid= /^([a-zA-Z0-9_\s]+)$/.test(username);
    // eslint-disable-next-line no-useless-escape
    const isEmailValid = /^([A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,})$/.test(email);
    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
     
    // if(isUserNameValid) return "Invalid Name"
    if(!isEmailValid) return "Email is invalid";
    if(!isPasswordValid) return "Enter a valid password";



    return null;

}