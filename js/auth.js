"use strict";
function Auth(u,e,p) {
  this.usuario = u;
  this.email = e;
  this.pass = p;
}


// Agregamos un par de métodos a Auth.prototype
Auth.prototype.login = function() {
	Ajax.send(this.usuario, this.pass);
  
};

//DESCRIPCION
Auth.prototype.logout = function(){
	Ajax.send(this.usuario, this.pass);
}

//DESCRIPCION
Auth.prototype.signup = function(){
	Ajax.send(this.usuario, this.pass);
}


