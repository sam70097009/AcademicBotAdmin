// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const dbref = ref(db);

const email = document.getElementById("email");
const password = document.getElementById("password");

const login = document.getElementById("login")
login.addEventListener("click", function(event) {
  event.preventDefault();
  
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredentials) => {
    //signed in
    const user = userCredentials.user;
    window.location.href = "/dashboard.html"

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });

})

