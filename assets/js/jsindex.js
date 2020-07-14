// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Funções auxiliares em js ou jquery da página index.html
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//
//
$(document).ready(function(){
  // -----------------------------------------------------------
    // Status inicial da seção graduação
  $(".group-blog, .group-documentos, .group-eventos, .group-login, .group-parceiros").hide();
  $("#btn-exibir, #btn-exibir1, #comentario, #comentario1").fadeIn();
  
  // -----------------------------------------------------------
  // ## HOME // PÁGINA INICIAL
  // scroll to 'home'
  // rola a tela para o topo da página
  $("#home").click(function()
  {
    $(".group-index").fadeIn();
    $(".group-blog, .group-documentos, .group-eventos, .group-login, .group-parceiros").hide();
    $([document.documentElement, document.body]).animate({ scrollTop: $("body").offset().top - 70 }, 1000);
    $("#navbar li a.active").removeClass("active"); //Remove any "active" class
    $("#link-home").addClass("active"); //Add "active" class to selected tab
  });
  //
  // -----------------------------------------------------------
  // ## UNIVERSITY GRADUATE // GRADUAÇÃO
  // scroll to 'university graduate'
  // rola a tela para a seção 'graduação'
  $("#graduacao").click(function()
  {
    $(".group-blog, .group-documentos, .group-eventos, .group-login, .group-parceiros").hide();
    $(".group-index").fadeIn();
    $([document.documentElement, document.body]).animate({ scrollTop: $("#section-graduacao").offset().top - 70}, 1000);
    $("#navbar li a.active").removeClass("active"); //Remove any "active" class
    $("#link-graduacao").addClass("active"); //Add "active" class to selected tab
  });
  //
  // -----------------------------------------------------------
  // ## BLOG // BLOG
  // scroll to 'contatos'
  // rola a tela para a seção 'contatos'
  $("#blog").click(function()
  {
    $(".group-index, .group-documentos, .group-eventos, .group-login, .group-parceiros").hide();
    $(".group-blog").fadeIn();
    $([document.documentElement, document.body]).animate({ scrollTop: $("#section-blog").offset().top - 70}, 1000);
    $("#navbar li a.active").removeClass("active"); //Remove any "active" class
    $("#link-blog").addClass("active"); //Add "active" class to selected tab
  });
  //
    // -----------------------------------------------------------
  // ## PARTNER // PARCEIROS
  // scroll to 'partner'
  // rola a tela para a seção 'parceiros'
  $("#parceiros").click(function()
  {
    $(".group-blog, .group-documentos, .group-eventos, .group-login, .group-index").hide();
    $(".group-parceiros").fadeIn();
    $([document.documentElement, document.body]).animate({ scrollTop: $("#section-parceiros").offset().top - 70}, 1000);
    $("#navbar li a.active").removeClass("active"); //Remove any "active" class
    $("#link-parceiros").addClass("active"); //Add "active" class to selected tab
  });
  //
  // -----------------------------------------------------------
  // ## DOCUMENTS // DOCUMENTOS
  // scroll to 'documents'
  // rola a tela para a seção 'documentos'
  $("#documentos").click(function()
  {
    $(".group-blog, .group-index, .group-eventos, .group-login, .group-parceiros").hide();
    $(".group-documentos").fadeIn();
    $([document.documentElement, document.body]).animate({ scrollTop: $("#section-documentos").offset().top - 70}, 1000);
    $("#navbar li a.active").removeClass("active"); //Remove any "active" class
    $("#link-documentos").addClass("active"); //Add "active" class to selected tab
  });
  //
   // -----------------------------------------------------------
  // ## EVENTS // EVENTOS
  // scroll to 'events'
  // rola a tela para a seção 'eventos'
  $("#eventos").click(function()
  {
    $(".group-blog, .group-documentos, .group-index, .group-login, .group-parceiros").hide();
    $(".group-eventos").fadeIn();
    $([document.documentElement, document.body]).animate({ scrollTop: $("#section-eventos").offset().top - 70}, 1000);
    $("#navbar li a.active").removeClass("active"); //Remove any "active" class
    $("#link-eventos").addClass("active"); //Add "active" class to selected tab
  });
  //
  // -----------------------------------------------------------
  // ## CONTACT // CONTATOS
  // scroll to 'contatos'
  // rola a tela para a seção 'contatos'
  $("#contatos").click(function()
  {
    $(".group-blog, .group-documentos, .group-eventos, .group-login, .group-parceiros").hide();
    $(".group-index").fadeIn();
    $([document.documentElement, document.body]).animate({ scrollTop: $("#section-contatos").offset().top - 70}, 1000);
    $("#navbar li a.active").removeClass("active"); //Remove any "active" class
    $("#link-contatos").addClass("active"); //Add "active" class to selected tab
  });
  // -----------------------------------------------------------
    // ## TERMS // TERMOS DE USO
  // scroll to 'terms'
  // rola a tela para a seção 'termos de uso'
  $("#terms").click(function()
  {
    $(".group-terms, #section-terms").slideDown();
    $([document.documentElement, document.body]).animate({ scrollTop: $("#section-terms").offset().top - 70}, 1000);
  });
  // button hide (in the top and bottom)
  // botão ocultar (o botão de cima e o debaixo)
  $("#btn-ocultar-bottom-terms, #btn-ocultar-top-terms").click(function()
  {
    $(".group-terms").slideUp(1000);
    $([document.documentElement, document.body]).animate({ scrollTop: $().offset().top - 1500}, 1000);
  });
  //
  // -----------------------------------------------------------
  // ## ABOUT // SOBRE
  // scroll to 'sobre'
  // rola a tela para a seção 'sobre'
  $("#sobre").click(function()
  {
    $(".group-blog, .group-documentos, .group-eventos, .group-login, .group-parceiros").hide();
    $(".group-index").fadeIn();
    $([document.documentElement, document.body]).animate({ scrollTop: $("#section-sobre").offset().top - 70}, 1000);
    $("#navbar li a.active").removeClass("active"); //Remove any "active" class
    $("#link-sobre").addClass("active"); //Add "active" class to selected tab
  });
  // -----------------------------------------------------------
  // ## LOGIN // LOGIN
  // scroll to 'login'
  // rola a tela para a seção 'login'
  $("#login").click(function()
  {
    $(".group-blog, .group-eventos, .group-parceiros, .group-documentos, .group-index").fadeOut() +
    $(".group-login").slideDown() +
    $("#navbar li a.active").removeClass("active") + //Remove any "active" class
    $("#link-login").addClass("active") + //Add "active" class to selected tab
    
    $([document.documentElement, document.body]).animate({ scrollTop: $("#section-login").offset().top - 70}, 1000);
  });
  // -----------------------------------------------------------
  // ## GRADUAÇÃO UNIVERSITÁRIA // UNIVERSITY GRADUATE
  // Graduação em Eng de Controle e Automação
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
  // Graduação em Eng de Controle e Automação
  // Esconde texto expandido e exibe o botão exibir
  // e oculta botões ocultar e faz scroll para o topo da seção
  // Hide displayed paragraphs e button
  $("#btn-ocultar, #btn-ocultar-fim").click(function()
  {
    $([document.documentElement, document.body]).animate({ scrollTop: $("#section-graduacao").offset().top -70 }, 1000);
    $("#sessao").hide(500);
    $("#btn-ocultar").hide();
    $("#btn-ocultar-fim").hide();
    $("#btn-exibir").fadeIn();
    $("#comentario").fadeIn();
  });
  // -----------------------------------------------------------
  // Scroll para Graduação em Eng de Controle e Automação
  // fecha textos expandidos da seção e faz scroll para o topo da seção
  $("#graduacaoeca").click(function() {
    $(".group-index").fadeIn();
    $(".group-blog").hide();
    $([document.documentElement, document.body]).animate({ scrollTop: $("#section-graduacao").offset().top -70 }, 1000);
    $("#sessao, #sessao1, #btn-ocultar, #btn-ocultar1, #btn-ocultar-fim, #btn-ocultar-fim1").hide();
    $("#comentario1").show(); 
    $("#btn-exibir, #comentario").fadeIn();
    $("#btn-exibir1").fadeIn();
  });
  // -----------------------------------------------------------
  // Graduação em Eng Elétrica
  // Esconde texto expandido e exibe o botão exibir
  // e oculta botões ocultar e faz scroll para o topo da seção
  $("#btn-ocultar1, #btn-ocultar-fim1").click(function()
  {
    $([document.documentElement, document.body]).animate({ scrollTop: $("#section-graduacao").offset().top -70 }, 1000);
    $("#sessao1").hide(500);
    $("#btn-ocultar1, #btn-ocultar-fim1").hide();
    $("#btn-exibir1, #comentario1").fadeIn();
  });
  // -------------------------------------------------------------
  // Graduação em Eng Elétrica
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
  // Scroll para Graduação em Eng Elétrica
  // fecha textos expandidos da seção e faz scroll para o topo da seção
  $("#graduacaoee").click(function()
  {
    $(".group-index").fadeIn();
    $(".group-blog").hide();
    $([document.documentElement, document.body]).animate({ scrollTop: $("#section-graduacao").offset().top -70 }, 1000);
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
    
