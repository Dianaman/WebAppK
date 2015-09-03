document.getElementById("signBtn").addEventListener("click", function(){
    console.log("atrapo el evento signBtn");
    var usuario = document.getElementById("userSign").value;
    var pass = document.getElementById("passwordSign").value;
    var ruta = "signup";
    var auth = new Auth(usuario, pass, ruta);
    auth.signup();  
});
