// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//  CONEXÃO COM FIREBASE        Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// AVISO:
// FAZER: adicione SDKs para os produtos Firebase que você quiser usar
// através do biblioteca no link abaixo:
// https://firebase.google.com/docs/web/setup#available-libraries
//
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// FIREBASE
// Configurações web do aplicativo Firebase 
// Inicialização do Firebase e do Analytics
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBVpDpfH0XebPmgYMj9FsO4yN9Oeqk0yWA",
    authDomain: "dadee-ufpe.firebaseapp.com",
    databaseURL: "https://dadee-ufpe.firebaseio.com",
    projectId: "dadee-ufpe",
    storageBucket: "dadee-ufpe.appspot.com",
    messagingSenderId: "231798506318",
    appId: "1:231798506318:web:dccabb75541a593b8d141f",
    measurementId: "G-8VJLM5R0PS"
  };

  // Inicialização do Firebase
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  // Initialize Cloud Firestore through Firebase
  // open a firestore - set db const
  const db = firebase.firestore();
  //db.settings({ timestampsInSnapshots: true });
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//  FIM - CONEXÃO COM FIREBASE        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


