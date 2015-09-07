//Paso 4

"use strict";

/*separar en una archivo las constantes*/
var DONDE = "http://localhost/webappk/servicio_restfull.php?";
var PARAM_USUARIO = "usuario=";
var PARAM_PASS = "contra=";
var PARAM_RUTA = "ruta=";
/*separar en una archivo las constantes*/

var Ajax = {

  send: function(usuario, pass, ruta){
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
        console.log(xmlhttp.responseText);
        var resEstatus = JSON.parse(xmlhttp.responseText);
        //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        $("#okModal").modal('show');
        document.getElementById("modal-header").innerHTML=resEstatus.msg;
        document.getElementById("modal-header").style.backgroundColor = "green";
        document.getElementById("modal-body").innerHTML=resEstatus.user;
        //console.log(xmlhttp.responseText);
      }
    
      if (xmlhttp.readyState==4 && xmlhttp.status==202)
      {
        console.log(xmlhttp.responseText);
        var resEstatus = JSON.parse(xmlhttp.responseText);
        $("#okModal").modal('show');
        document.getElementById("modal-header").innerHTML=resEstatus.msg;
        document.getElementById("modal-header").style.backgroundColor = "red";
        document.getElementById("modal-body").innerHTML=resEstatus.user;
      }
    }

    
    var UrlToSend = DONDE + PARAM_USUARIO + usuario + "&" + PARAM_PASS + pass + "&" + PARAM_RUTA + ruta;

    xmlhttp.open("post", UrlToSend, true); // true for asynchronous 
    xmlhttp.send(null);
  }  
}
