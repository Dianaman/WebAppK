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
