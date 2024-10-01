// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCtMAhKymIlFUwkyOe61wfNgvmcWM_VDI",
  authDomain: "netflix-gpt-7b239.firebaseapp.com",
  projectId: "netflix-gpt-7b239",
  storageBucket: "netflix-gpt-7b239.appspot.com",
  messagingSenderId: "833797758835",
  appId: "1:833797758835:web:9848676472ea2a4166af06",
  measurementId: "G-Q11L33SH5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();