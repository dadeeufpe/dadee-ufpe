//auth.js
// 
//
//
//
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
    alert('Não há usuário logado');
    console.log("Sem Autenticação");
    firebase.auth().signInAnonymously().catch(function(error) {
  		// Handle Errors here.
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		if () {
  			alert('LoNão há usuário logado');
  		};
  // ...
});
    firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
		    // User is signed in.
		    var isAnonymous = user.isAnonymous;
		    var uid = user.uid;
		    // ...
		  } else {
		    // User is signed out.
		    // ...
		  }
  // ...
});
  }
});