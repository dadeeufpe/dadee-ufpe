// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Funções auxiliares em js ou jquery da página indes.html
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  
  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  // função que atua nos botões da sessão 1.1 da página Index.html
  // função para exibir/ocultar parte da sessão
  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  $(document).ready(function(){
        $("#sessao").hide();
        $("#comentario").fadeIn();
        $("#btn-ocultar").hide();
        $("#btn-ocultar-fim").hide();
        $("#btn-exibir").fadeIn();
      // Oculta paragrafo e botão
      // Hide displayed paragraphs e button
      $("#btn-ocultar, #btn-ocultar-fim").click(function(){
        $("#sessao").hide(500);
        $("#btn-ocultar").hide();
        $("#btn-ocultar-fim").hide();
        $("#btn-exibir").fadeIn();
        $("#comentario").fadeIn();
      });
      // exibe paragrafo e botão
      // Show hidden paragraphs e botão
      $("#btn-exibir").click(function(){
          $("#btn-exibir").hide();
          $("#sessao").show(500);
          $("#comentario").hide();
          $("#btn-ocultar").fadeIn();
          $("#btn-ocultar-fim").fadeIn();          
      });
  });
  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  // função que atua nos botões da sessão 1.2 da página Index.html
  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  // função para exibir/ocultar parte da sessão
  $(document).ready(function(){
        $("#sessao1").hide();
        $("#comentario1").show(); 
        $("#btn-ocultar1").hide();
        $("#btn-ocultar-fim1").hide();
        $("#btn-exibir1").fadeIn();
      // Oculta paragrafo e botão
      // Hide displayed paragraphs e button
      $("#btn-ocultar1, #btn-ocultar-fim1").click(function(){
        $("#sessao1").hide(500);
        $("#btn-ocultar1").hide();
        $("#btn-ocultar-fim1").hide();
        $("#btn-exibir1").fadeIn();
        $("#comentario1").fadeIn();
      });
      // exibe paragrafo e botão
      // Show hidden paragraphs e botão
      $("#btn-exibir1").click(function(){
          $("#btn-exibir1").hide();
          $("#sessao1").show(500);
          $("#comentario1").hide();
          $("#btn-ocultar1").fadeIn();
          $("#btn-ocultar-fim1").fadeIn(); 
      });
  });
  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx