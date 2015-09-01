//2do paso

//ATRAPA EL EVENTO CLICK CON LOGINBTN
document.getElementById("loginBtn").addEventListener("click", function(){
    var usuario = document.getElementById("user").value;
    var pass = document.getElementById("password").value;
   	var auth = new Auth(usuario, "email@email.com", pass);
    console.log("atrapo el evento loginBtn");
   	auth.login();  
});

//Error:
//Con el codigo como esta solo atrapa el primer boton,
//el codigo termina inactivando las demas funciones.
//Si pongo la funcion de SignBtn arriba funciona "registrarse" pero no "entrar".

//ATRAPA EL EVENTO CLICK CON SIGNUPBTN
document.getElementById("signBtn").addEventListener("click", function(){
    console.log("atrapo el evento signBtn");
    var newusuario = document.getElementById("userSign").value;
    var newpass = document.getElementById("passwordSign").value;
    var auth = new Auth(newusuario, "email@email.com", newpass);
    auth.signup();  
});


//ATRAPA EL EVENTO CLICK CON LOGOUTBTN
document.getElementById("logoutBtn").addEventListener("click", function(){
    var usuario = document.getElementById("user").value;
    var pass = document.getElementById("password").value;
   	var auth = new Auth(usuario, "email@email.com", pass);
   	auth.logout();  
});
