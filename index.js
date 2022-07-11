function loadAdmin() {
  alert("Loaded into Admin!");
  

}

function initApp(O) {
  firebase.auth().onAuthStateChanged(function(user) {
   if (user) { 
     uinfo = user; email=user.email; 
     LoggedOutDisplay({id:'Login',photo:0},user);
   } else {  LoginDisplay({id:'Login'});  }
  }, function(error) { console.log(error); }
  );
};

function test(O) {
  db.doc('/public/v').onSnapshot(function(doc) {
    console.log(doc.data());
  });
}

function SignIn(O) {
    var errors;
    if(O.provider=='microsoft') {  var provider = new firebase.auth.OAuthProvider('microsoft.com');
    } else {  var provider = new firebase.auth.GoogleAuthProvider(); 
    }
    if(O.option=='Redirect') { // Sign-in with redirect
      firebase.auth().signInWithRedirect(provider);
      firebase.auth().getRedirectResult().then(function(result) {
          if (result.credential) { var token = result.credential.accessToken; }
          var user = result.user;
      });
    } else { // Sign-in with Popup [Default]
      firebase.auth().signInWithPopup(provider).then(function(result) {
          var token = result.credential.accessToken, user = result.user;
      }).catch(function(error) { errors = error; });
    }
  }

  function SignOut(O) { firebase.auth().signOut().then(function(results) {}).catch(function(error) { errors = error;}); }

    function LoginDisplay(O) { 
      var id= O.hasOwnProperty('id')? O.id : 'Login';
     $('#'+id).html(
       '<span>Sign-in with </span> ' 
       + '<button onclick="SignIn({option:'+"'Redirect'"+'});">Google</button> '
       + '<button onclick="SignIn({option:' + "'Redirect',provider:'microsoft'" + '});">Microsoft</button>'
     );
    } 
    function LoggedOutDisplay(O,user) { 
      var id= O.hasOwnProperty('id')? O.id : 'Login';
      var n = '<span title='+user.email+'>'+user.displayName+'</span>'; 
      var signout = `${n} <button onclick="SignOut({});">Logout</button> `; 
      $('#'+id).html( signout);
    } 
    var name, email, emailVerified, uid, uinfo={};
    var firebaseConfig = {
      apiKey: "AIzaSyD8SyHAMMVV0Gtcs871LSM0tficArYX5eg",
      authDomain: "zrenix-aae2e.firebaseapp.com",
      databaseURL: "https://zrenix-aae2e.firebaseio.com",
      projectId: "zrenix-aae2e",
      storageBucket: "zrenix-aae2e.appspot.com",
      messagingSenderId: "1095365181062",
      appId: "1:1095365181062:web:db9b34e80b0572fc",
      measurementId: "G-GR8YWKSF7F"
    };
    firebase.initializeApp(firebaseConfig); 
    var  editors=[], qdata={}, nchoice=0, realtime, debug=0, role='student', admin=0, db = firebase.firestore();

    
    window.addEventListener('load', function() { 
      initApp({}); 
    });
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";