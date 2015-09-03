document.getElementById("logoutBtn").addEventListener("click", function(){
    var usuario = document.getElementById("user").value;
    var pass = document.getElementById("password").value;
    var ruta = "logout";
   	var auth = new Auth(usuario, pass, ruta);
   	auth.logout();  
});