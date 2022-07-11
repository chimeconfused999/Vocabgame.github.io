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