/*function loadXMLDoc()
{
  console.log("Holaaaa");

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
    xmlhttp.open("GET","http://localhost/holamundo.php",true);
    xmlhttp.send();
}*/

/*unction httpGet()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://localhost/holamundo.php", false ); // false for synchronous request
    xmlHttp.send( null );
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    return xmlHttp.responseText;
}*/

function httpGetAsync()
{
    var xmlHttp = new XMLHttpRequest();
    var usuario;
    var contra;
    xmlHttp.onreadystatechange = function() { 
      //jQuery.noConflict();
      /*if(xmlHttp.readyState >= 0 && xmlHttp.readyState < 4 && xmlHttp.status == 200)
      {
        $("#chargeModal").modal();
        console.log("llego a charge");
      }*/

      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      { 
        /*console.log("llego a cerrar");
        //$('#chargeModal').dialog('close');
        //$("#chargeModal").close();
        $("#chargeModal").modal('close');*/
        
        /*setTimeout(function(){
          $("#chargeModal").modal('close')
        }, 300);*/

        //document.getElementById("myDiv").innerHTML= xmlHttp.responseText;
        if(xmlHttp.responseText=="true")
        {
          $("#okModal").modal('show');
          console.log("llego a ok");
          /*{
            document.getElementById("myDiv").innerHTML="Ok";
          }*/
        }
        else 
        {
          $("#errModal").modal('show');
          console.log("llego a error");
          /*{
            document.getElementById("myDiv").innerHTML="Error";
          }*/
        }
      }
    }
    //xmlHttp.open("POST", "http://localhost/holamundo.php", true); // true for asynchronous 
    //xmlHttp.send(usuario, contra);   
 
    usuario = document.getElementById("user").value;
    contra = document.getElementById("password").value;

    var PageToSendTo = "http://localhost/holamundo.php?";
    var MyVariable = usuario;
    var VariablePlaceholder = "usuario=";
    var MyVariable2 = contra;
    var VariablePlaceholder2 = "contra=";
    var UrlToSend = PageToSendTo + VariablePlaceholder + MyVariable + "&" + VariablePlaceholder2 + MyVariable2;

    xmlHttp.open("post", UrlToSend, true); // true for asynchronous 
    xmlHttp.send(null);
}