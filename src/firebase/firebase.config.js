// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyC7qP5Y79WcRvddCDfra926W-s8WLteWhU",
//   authDomain: "home-vista-fb609.firebaseapp.com",
//   projectId: "home-vista-fb609",
//   storageBucket: "home-vista-fb609.appspot.com",
//   messagingSenderId: "823464987556",
//   appId: "1:823464987556:web:6f1a312ea56207dccc0f31"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)
// export default auth;



import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey ,
  authDomain: import.meta.env.VITE_authDomain ,
  projectId: import.meta.env.VITE_projectId ,
  storageBucket: import.meta.env.VITE_storageBucket ,
  messagingSenderId: import.meta.env.VITE_messagingSenderId ,
  appId: import.meta.env.VITE_appId ,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;