//Paso 4

"use strict";

/*separar en una archivo las constantes*/
var DONDE = "http://localhost/webappk/servicio_restfull.php?";
var PARAM_USUARIO = "usuario=";
var PARAM_PASS = "contra=";
var PARAM_MAIL = "mail=";
/*separar en una archivo las constantes*/

var Ajax = {

  send: function(usuario, pass){
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
      {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
          console.log("login llego a ajax.js");
          var resEstatus = JSON.parse(xmlhttp.responseText);
          //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
          $("#okModal").modal('show');
          document.getElementById("modal-header").innerHTML=resEstatus.msg;
          document.getElementById("modal-header").style.backgroundColor = "green";
          //console.log(xmlhttp.responseText);
        }
      
        if (xmlhttp.readyState==4 && xmlhttp.status==202)
        {
          console.log(xmlhttp.responseText);
          var resEstatus = JSON.parse(xmlhttp.responseText);
          $("#okModal").modal('show');
          document.getElementById("modal-header").innerHTML=resEstatus.msg;
          document.getElementById("modal-header").style.backgroundColor = "red";
        }
      }
    var UrlToSend = DONDE + PARAM_USUARIO + usuario + "&" + PARAM_PASS + pass;

    xmlhttp.open("post", UrlToSend, true); // true for asynchronous 
    xmlhttp.send(null);
  }  
}

var AjaxSign = {

  send: function(usuario, pass, mail){
    //Intente solucionar el tema que siempre me tire el mismo mensaje
    //pasando otra cantidad de parametros, pero siguio igual.
    
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
      {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
          console.log("Signup llego a ajax.js");
          console.log(xmlhttp.responseText);
          var resEstatus = JSON.parse(xmlhttp.responseText);
          //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
          $("#okModal").modal('show');
          document.getElementById("modal-header").innerHTML=resEstatus.msg;
          document.getElementById("modal-header").style.backgroundColor = "green";
          //console.log(xmlhttp.responseText);
        }
      
        if (xmlhttp.readyState==4 && xmlhttp.status==202)
        {
          console.log("Signup llego a ajax.js");
          console.log(xmlhttp.responseText);
          var resEstatus = JSON.parse(xmlhttp.responseText);
          $("#okModal").modal('show');
          document.getElementById("modal-header").innerHTML=resEstatus.msg;
          document.getElementById("modal-header").style.backgroundColor = "red";
        }
      }
    var UrlToSend = DONDE + PARAM_USUARIO + usuario + "&" + PARAM_PASS + pass + "&" + PARAM_MAIL + mail;

    console.log(UrlToSend);
    xmlhttp.open("post", UrlToSend, true); // true for asynchronous 
    xmlhttp.send(null);
  }  
}

//http://getbootstrap.com/examples/signin/

/*
ORIENTADO A OBJETOS
var Ajax = function(u, p)
 this.usuario = u;
 this.pass = p; 
}

Ajax.prototype.send = function() {
      var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        }
      }

    var UrlToSend = DONDE + PARAM_USUARIO + this.usuario + "&" + PARAM_PASS + this.pass;

    xmlhttp.open("post", UrlToSend, true); // true for asynchronous 
    xmlhttp.send(null);
};

    usuario = document.getElementById("user").value;
    pass = document.getElementById("password").value;
    var ajax = new Ajax("diana", 123456);
        ajax.send();


document.getElementById("loginBtn").addEventListener("click", function(){

    ajax.send();
});*/