// Import the functions 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);

let email = document.getElementById("email");
let username = document.getElementById("username");
let password = document.getElementById("password");

//input fields
const signUp = document.getElementById("signup");
signUp.addEventListener("click", function(event) {
  event.preventDefault();

 // const confirm = document.getElementById("confirm").value;

 // if (email === "" || username === "" || password === "" || confirm === "") {
  //  alert("Please fill in all the fields.");
   // return false;
  //} else if (password !== confirm) {
   // alert("Password and confirmation don't match.");
   // return false;
  //} else {
    createUserWithEmailAndPassword(auth, email.value, password.value, username.value)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Account created")
        window.location.href = "/index.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      //  const errorAlert = document.getElementById("error");
     //   errorAlert.innerHTML = errorMessage;
      });
  }
//}
);
