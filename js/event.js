
//ATRAPA EL EVENTO CLICK CON LOGINBTN
document.getElementById("loginBtn").addEventListener("click", function(){
    var usuario = document.getElementById("user").value;
    var pass = document.getElementById("password").value;
   	var auth = new Auth(usuario, "email@email.com", pass);
   	auth.login();  
});


//ATRAPA EL EVENTO CLICK CON SIGNUPBTN
document.getElementById("signBtn").addEventListener("click", function(){
    var newusuario = document.getElementById("userSign").value;
    var newpass = document.getElementById("passwordSign").value;
   	var newauth = new Auth(newusuario, "email@email.com", newpass);
   	newauth.signup();  
});


//ATRAPA EL EVENTO CLICK CON LOGOUTBTN
/*document.getElementById("logoutBtn").addEventListener("click", function(){
    var usuario = document.getElementById("user").value;
    var pass = document.getElementById("password").value;
   	var auth = new Auth(usuario, "email@email.com", pass);
   	auth.logout();  
});*/
