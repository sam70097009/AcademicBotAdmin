import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDDigBfwt4MRIJI8ak9lqK38AM1ea3uNxE",
  authDomain: "botadmin-cbbcf.firebaseapp.com",
  databaseURL: "https://botadmin-cbbcf-default-rtdb.firebaseio.com",
  projectId: "botadmin-cbbcf",
  storageBucket: "botadmin-cbbcf.appspot.com",
  messagingSenderId: "362122171826",
  appId: "1:362122171826:web:b163498de6d03e806c00ab",
  measurementId: "G-XJNL58JFG5"
};
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const signIn = document.getElementById("signIn");
signIn.addEventListener("click", function(event) {
 event.preventDefault();

 const email = document.getElementById("email").value;
 var password = document.getElementById("password").value;

 signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
     const user = userCredential.user;
     window.location.href = "/dashboard.html";
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     const logError = document.getElementById("logError");
     logError.innerHTML = errorMessage;
   });
});