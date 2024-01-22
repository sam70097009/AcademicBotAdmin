import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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
const auth = getAuth(app);
const user = auth.currentUser;

//runs everytime user logs in or out
onAuthStateChanged(auth, (user) => {
    console.log(user)
    if (user) {
        //User is signed in, call updateUserProfile function
        updateUserProfile(user);

        const uid = user.uid;
        return uid;
    } else {
        // User is not signed in, redirect to the registration page
        alert("Create Account & login")
        window.location.href = "/signup.html"
    }
})

//function updateUserProfile
function updateUserProfile(user) {
    //const userName = user.displayName;
    const userEmail = user.email;
    //const userProfilePicture = user.photoURL;

    //Update the profile
    //document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
    //document.getElementById("userProfilePicture").src = userProfilePicture;
}
const logout = document.getElementById("logout");
logout.addEventListener("click", function(event){
    event.preventDefault();

    signOut(auth).then(() => {
        alert("Sign-out successful")
        window.location.href = "/index.html";
      })
      .catch((error) => {
        // An error happened.
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });

});

