window.onload = initialize;

function initialize() {
  var signIn = document.getElementById("sign-in");
  signIn.addEventListener("click", login);

  var signOut = document.getElementById("sign-out");
  signOut.addEventListener("click", logout);

  checkIfUserIsLoggedIn();
}

function checkIfUserIsLoggedIn() {

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log("User is signed in.")
      console.log(user.email)
      document.getElementById("sign-in").style.display = "none";
      document.getElementById("sign-up").style.display = "none";
      document.getElementById("sign-out").style.display = "block";
    } else {
      console.log("No user is signed in.")
      document.getElementById("sign-in").style.display = "block";
      document.getElementById("sign-up").style.display = "block";
      document.getElementById("sign-out").style.display = "none";
    }
  });
}

function login(){
  var email = "tiburcio.cruz@gmail.com";
  var password = "tiburcio";

  firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
    console.log("User logged in");
  }).catch(error => {
    console.log(error.message)
  });
}

function logout(){
  firebase.auth().signOut().then(()=> {
    console.log("user logged out")
  }).catch((error)=>{
    console.log(error.message)
  });
}



