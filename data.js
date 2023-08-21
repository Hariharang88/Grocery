const firebaseConfig = {
    apiKey: "AIzaSyC3iCTGrR4rXdK6nQ5aUZCOXnG7uQ4pStI",
    authDomain: "signuppage-afc99.firebaseapp.com",
    projectId: "signuppage-afc99",
    storageBucket: "signuppage-afc99.appspot.com",
    messagingSenderId: "103042831641",
    appId: "1:103042831641:web:923a7849b07901d8952188",
    measurementId: "G-7EKQGYCKWC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.then((e)=>{

       console.log(e)
            window.location.href="./loginafter.html";

    })
    .catch((e)=>{

    console.log(e)
    alert("Invalid Email or password")
    })
    //promise.catch( e => alert(e.msg));
    //window.location.href="./loginafter.html";
  
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("registered sucessfully")
    window.location.href="./loginafter.html";
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}