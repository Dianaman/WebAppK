"use strict";
function Auth(u,e,p) {
  this.usuario = u;
  this.email = e;
  this.pass = p;
}


// Agregamos un par de métodos a Auth.prototype
Auth.prototype.login = function() {
	console.log("Login llego a Auth.js");
	Ajax.send(this.usuario, this.pass);
};

//DESCRIPCION
Auth.prototype.logout = function(){
	console.log("Logout llego a Auth.js");
	Ajax.send(this.usuario, this.pass);
	
}

//DESCRIPCION
Auth.prototype.signup = function(){
	console.log("Signup llego a Auth.js");
	AjaxSign.send(this.usuario, this.pass);
}


