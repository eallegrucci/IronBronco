
var userName,userEmail;
var userEmail, userName;
const firebaseConfig = {
  apiKey: "AIzaSyCCcz2sIMLOFhT6Ltj9DSjvDdoFaPNehd0",
  authDomain: "test-login-1573079166139.firebaseapp.com",
  databaseURL: "https://test-login-1573079166139.firebaseio.com",
  projectId: "test-login-1573079166139",
  storageBucket: "test-login-1573079166139.appspot.com",
  messagingSenderId: "1042080648547",
  appId: "1:1042080648547:web:42a92c14b913d229909756",
  measurementId: "G-WQ9Z1673RK"
};
var project = firebase.initializeApp(firebaseConfig);
var firestore = project.firestore();

function getInfo(){
    userName = JSON.parse(localStorage.getItem('userName'));
    userEmail = JSON.parse(localStorage.getItem('email'));
    console.log(userName);
    console.log(userEmail);
}

function updateMiles(){
    var biking = parseInt(document.getElementById('biking').value);
    var running = parseInt(document.getElementById('running').value);
    var swimming = parseInt(document.getElementById('swim').value);
    var ToTal = biking + running + swimming;
    console.log('Save Data function evoked');
    firestore.collection("users").doc(userName).set({
      name: userName,
      email: userEmail,
      team: '',
      swim: swimming,
      run: running,
      bike: biking,
      total: ToTal
  }).then(function(){
    console.log('success'); 
  }).catch(function(error){
    console.log('error occured');
  });
}


function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

function onLoad() {
    gapi.load('auth2', function() {
        gapi.auth2.init();
    });
}