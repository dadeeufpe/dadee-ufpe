// sendmessage.js
// arquivo para gravação de dados da mensagem no firebase cloud firestore
// add record on 'inbox' collection
//
// coleta informações do formulário html
function getInputsOnFormAndSave() {
    var d               =   new Date();
    var myTimestamp     =   ("00"+d.getFullYear()).slice(-4)+"-"+
                            ("00"+String(parseInt(d.getMonth())+1)).slice(-2)+"-"+
                            ("00"+d.getDate()).slice(-2)+" "+
                            ("00"+d.getHours()).slice(-2)+":"+
                            ("00"+d.getMinutes()).slice(-2)+":"+
                            ("00"+d.getSeconds()).slice(-2)+"."+
                            ("00"+d.getMilliseconds()).slice(-4);
    var myIdDoc         =   ("00"+d.getFullYear()).slice(-4)+
                            ("00"+String(parseInt(d.getMonth())+1)).slice(-2)+
                            ("00"+d.getDate()).slice(-2)+
                            ("00"+d.getHours()).slice(-2)+
                            ("00"+d.getMinutes()).slice(-2)+
                            ("00"+d.getSeconds()).slice(-2)+
                            ("00"+d.getMilliseconds()).slice(-4)+
                            Math.floor((Math.random() * 10000) + 1);
    var dataEmail       =   document.getElementById('inputEmail'          ).value;
    var dataMessage     =   document.getElementById('inputMessage'        ).value;
    var dataName        =   document.getElementById('inputName'           ).value;
    var dataSubject     =   document.getElementById('inputSubject'        ).value;
    //
    // Save 'new Reg'
    // Grava o registro na coleção 'inbox' 
    //
    var newReg = db.collection("inbox").doc(myIdDoc);
    newReg.set({
        email:          dataEmail,     // email
        message:        dataMessage,   // mensagem
        name:           dataName,      // nome da pessoa que está enviando
        subject:        dataSubject,   // assunto da mensagem
        read:           false,         // 'lido' = true / não_lido = 'false'
        status:         "pendente",    // pendente, realizado, cancelado
        created_at:     myTimestamp,   // data de envio da mensagem (criação)
        processed_at:   null,          // processada em 
        deleted_at:     null           // deletada em
    })
    .then(function() {
        alert("Mensagem enviada com sucesso!");
        document.getElementById('formSendMessage').reset();
    })
    .catch(function(error) {
        alert("Erro! Houve uma falha. A mensagem não foi enviada.");  
        //console.error("Error adding document: ", error);
    });  
}
//
// evita o submit do formulário
// chama função de salvamento no Firestore
var form = document.getElementById('formSendMessage');
form.addEventListener('submit', function(e) {
    // impede o envio do form / 
    e.preventDefault();
});

