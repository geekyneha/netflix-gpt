/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { Header } from './Header';
import style from '../Css/login.module.css';
import { useState } from 'react';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../utils/firebase';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate the form Data

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    //Sign in signUp Logic

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+ ""+errorMessage)
          // ..
        });
      // Sign Up
    } else {
      //Sign In
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"
          alt=""
        />
      </div>

      <div className={style['form-wrapper']}>
        <h2>{isSignInForm ? 'Sign In' : 'Sign Up'}</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          {!isSignInForm && (
            <div className={style['form-control']}>
              <input
                type="text"
                required
                ref={username}
              />
              <label>Name</label>
            </div>
          )}
          <div class={style['form-control']}>
            <input
              type="text"
              required
              ref={email}
            />
            <label>Email or phone number</label>
          </div>
          <div class={style['form-control']}>
            <input
              type="password"
              required
              ref={password}
            />
            <label>Password</label>
          </div>
          <p className="text-red-600 ">{errorMessage}</p>
          <button
            type="submit"
            onClick={handleButtonClick}
          >
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </button>
          <div className={style['form-help']}>
            <div className={style['remember-me']}>
              <input
                type="checkbox"
                id="remember-me"
              />
              <label for="remember-me">Remember me</label>
            </div>
          </div>
        </form>
        <p
          onClick={toggleSignInForm}
          className={style['toggle-text']}
        >
          {isSignInForm 
            ? 'New to Netflix? Sign Up Now'
            : 'Already registered? Sign In Now'}
        </p>
      </div>
    </div>
  );
};

export default Login;
