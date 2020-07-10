// sendmessage.js
// arquivo para gravação de dados da mensagem no firebase cloud firestore
//
// add record on 'inbox' collection
db.collection("inbox").doc().set({
    email:      "2-teste@teste.com",
	message:    "2-Mensagem que foi escrita nesse campo",
	name:       "2-Meu Nome Completo",
	subject:    "2-Assunto da mensagem"
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});