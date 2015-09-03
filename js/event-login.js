//2do paso

//ATRAPA EL EVENTO CLICK CON LOGINBTN
document.getElementById("loginBtn").addEventListener("click", function(){
    var usuario = document.getElementById("user").value;
    var pass = document.getElementById("password").value;
    var ruta = "login";
   	var auth = new Auth(usuario, pass, ruta);
    console.log("atrapo el evento loginBtn");
   	auth.login();  
});

//Error:
//Con el codigo como esta solo atrapa el primer boton,
//el codigo termina inactivando las demas funciones.
//Si pongo la funcion de SignBtn arriba funciona "registrarse" pero no "entrar".

//ATRAPA EL EVENTO CLICK CON SIGNUPBTN

//ATRAPA EL EVENTO CLICK CON LOGOUTBTN

//console.log("llego a event");

/*
$('#loginid').on("click", document.getElementById("loginBtn"), function() {
    console.log("atrapo el evento loginBtn");
    var usuario = document.getElementById("user").value;
    var pass = document.getElementById("password").value;
    var ruta = "login";
    var auth = new Auth(usuario, pass, ruta);
    auth.login();  
});

$('#signid').on("click", "#signupBtn", function() {
    console.log("atrapo el evento signBtn");
    var usuario = document.getElementById("userSign").value;
    var pass = document.getElementById("passwordSign").value;
    var ruta = "signup";
    var auth = new Auth(usuario, pass, ruta);
    auth.signup();  
});

*/