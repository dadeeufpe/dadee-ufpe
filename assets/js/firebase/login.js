


// + + + + + + + + + + + + + + + + + + + + + + + +
//
// ESTADO DO USUÁRIO - SE LOGADO OU NÃO
// STATE OF USER
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    //
    //
    //
  } else {
    // No user is signed in.
	//
	//
	//
	// + + + + + + + + + + + + + + + + + + + + + + + +
	//
	// CREATE USER
	// CRIAR USUÁRIO
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	});
	// + + + + + + + + + + + + + + + + + + + + + + + +
  }
});
// + + + + + + + + + + + + + + + + + + + + + + + +
//

// Verifica quem é o usuário logado atual
// 
// retorna o usuário conectado
// retorna nulo se não houver usuário logado
var user = firebase.auth().currentUser;

if (user) {
  // User is signed in.
} else {
  // No user is signed in.
}

// Receber informações específicas de provedor do perfil de um usuário
// https://firebase.google.com/docs/auth/web/manage-users#get_a_users_provider-specific_profile_information
var user = firebase.auth().currentUser;

if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}
//
// Atualizar o perfil de um usuário
// https://firebase.google.com/docs/auth/web/manage-users#update_a_users_profile
var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: "Jane Q. User",
  photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
//
//
// Definir o endereço de e-mail de um usuário
// https://firebase.google.com/docs/auth/web/manage-users#set_a_users_email_address
//  Importante: para definir o endereço de e-mail de um usuário, ele precisa ter feito login recentemente. Consulte o artigo Reautenticar um usuário (https://firebase.google.com/docs/auth/web/manage-users#re-authenticate_a_user).
var user = firebase.auth().currentUser;

user.updateEmail("user@example.com").then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
//
//

