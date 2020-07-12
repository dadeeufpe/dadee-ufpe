// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Funções auxiliares em js ou jquery da página index.html
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//
//
$(document).ready(function(){
  // -----------------------------------------------------------
  // ## HOME // PÁGINA INICIAL
  // scroll to 'home'
  // rola a tela para o topo da página
  $("#home").click(function()
  {
    $([document.documentElement, document.body]).animate({ scrollTop: $("body").offset().top - 70 }, 800);
  });
  //
  // -----------------------------------------------------------
  // ## CONTACT // CONTATOS
  // scroll to 'contatos'
  // rola a tela para a seção 'contatos'
  $("#contatos").click(function()
  {
    $([document.documentElement, document.body]).animate({ scrollTop: $("#section3").offset().top -70 }, 800);
  });
  //
  // -----------------------------------------------------------
  // ## ABOUT // SOBRE
  // scroll to 'sobre'
  // rola a tela para a seção 'sobre'
  $("#sobre").click(function()
  {
    $([document.documentElement, document.body]).animate({ scrollTop: $("#section2").offset().top -70 }, 800);
  });
  // -----------------------------------------------------------
  // ## GRADUAÇÃO UNIVERSITÁRIA // UNIVERSITY GRADUATE
  // Status inicial da seção graduação
  $("#sessao").hide();
  $("#sessao1").hide();
  $("#comentario").fadeIn();
  $("#comentario1").show(); 
  $("#btn-ocultar").hide();
  $("#btn-ocultar1").hide();
  $("#btn-ocultar-fim").hide();
  $("#btn-ocultar-fim1").hide();
  $("#btn-exibir").fadeIn();
  $("#btn-exibir1").fadeIn();
  // -----------------------------------------------------------
  // Graduação em Eng Elétrica
  // Exibe texto escondido e oculta botão exibir
  // e exibe botões ocultar
  $("#btn-exibir").click(function(){
      $("#btn-exibir").hide();
      $("#sessao").show(500);
      $("#comentario").hide();
      $("#btn-ocultar").fadeIn();
      $("#btn-ocultar-fim").fadeIn();          
  });
  // -----------------------------------------------------------
  // Graduação em Eng Elétrica
  // Esconde texto expandido e exibe o botão exibir
  // e oculta botões ocultar e faz scroll para o topo da seção
  // Hide displayed paragraphs e button
  $("#btn-ocultar, #btn-ocultar-fim").click(function()
  {
    $([document.documentElement, document.body]).animate({ scrollTop: $("#section11").offset().top -70 }, 800);
    $("#sessao").hide(500);
    $("#btn-ocultar").hide();
    $("#btn-ocultar-fim").hide();
    $("#btn-exibir").fadeIn();
    $("#comentario").fadeIn();
  });
  // -----------------------------------------------------------
  // Scroll para graduação Eng Eletrica
  // fecha textos expandidos da seção e faz scroll para o topo da seção
  $("#graduacaoeca").click(function() {
    $([document.documentElement, document.body]).animate({ scrollTop: $("#section11").offset().top -70 }, 800);
    $("#sessao").hide();
    $("#sessao1").hide();
    $("#comentario").fadeIn();
    $("#comentario1").show(); 
    $("#btn-ocultar").hide();
    $("#btn-ocultar1").hide();
    $("#btn-ocultar-fim").hide();
    $("#btn-ocultar-fim1").hide();
    $("#btn-exibir").fadeIn();
    $("#btn-exibir1").fadeIn();
  });
  // -----------------------------------------------------------
  // Graduação em Eng de Controle e Automação
  // Esconde texto expandido e exibe o botão exibir
  // e oculta botões ocultar e faz scroll para o topo da seção
  $("#btn-ocultar1, #btn-ocultar-fim1").click(function()
  {
    $([document.documentElement, document.body]).animate({ scrollTop: $("#section11").offset().top -70 }, 800);
    $("#sessao1").hide(500);
    $("#btn-ocultar1").hide();
    $("#btn-ocultar-fim1").hide();
    $("#btn-exibir1").fadeIn();
    $("#comentario1").fadeIn();
  });
  // -------------------------------------------------------------
  // Graduação em Eng de Controle e Automação
  // Exibe texto escondido e oculta botão exibir
  // e exibe botões ocultar
  $("#btn-exibir1").click(function()
  {
      $("#btn-exibir1").hide();
      $("#sessao1").show(500);
      $("#comentario1").hide();
      $("#btn-ocultar1").fadeIn();
      $("#btn-ocultar-fim1").fadeIn(); 
  });
  // -------------------------------------------------------------
  // Scroll para Eng de Controle e Automação
  // fecha textos expandidos da seção e faz scroll para o topo da seção
  $("#graduacaoee").click(function()
  {
    $([document.documentElement, document.body]).animate({ scrollTop: $("#section11").offset().top -70 }, 800);
    $("#sessao").hide();
    $("#sessao1").hide();
    $("#comentario").fadeIn();
    $("#comentario1").show(); 
    $("#btn-ocultar").hide();
    $("#btn-ocultar1").hide();
    $("#btn-ocultar-fim").hide();
    $("#btn-ocultar-fim1").hide();
    $("#btn-exibir").fadeIn();
    $("#btn-exibir1").fadeIn();
  });
  // -------------------------------------------------------------
  //
  //  THE END - FIM xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
}); //close function 'document ready'
    
