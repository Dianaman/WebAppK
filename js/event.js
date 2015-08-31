
//ATRATA EL EVENTO CLICK CON LOGINBTN
document.getElementById("loginBtn").addEventListener("click", function(){
    var usuario = document.getElementById("user").value;
    var pass = document.getElementById("password").value;
   	var persona1 = new Auth(usuario, "email@email.com", pass);
   	persona1.login();  
});