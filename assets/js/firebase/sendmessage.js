// sendmessage.js
// arquivo para gravação de dados da mensagem no firebase cloud firestore
//
// Initialize Cloud Firestore through Firebase
var firestoreConfig = {
    apiKey: "AIzaSyBVpDpfH0XebPmgYMj9FsO4yN9Oeqk0yWA",
    authDomain: "dadee-ufpe.firestoreapp.com",
    projectId: "dadee-ufpe",
  };
//firebase.initializeApp(firestoreConfig);
var db = firebase.firestore();
// add record on 'inbox' collection
db.collection("inbox").doc().add({
    email: "2teste@teste.com",
	message: "2Mensagem que foi escrita nesse campo",
	name: "2Meu Nome Completo",
	subject: "2Assunto da mensagem"
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});