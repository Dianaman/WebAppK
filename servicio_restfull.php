<?php 	
//Paso 5
	
	header('Content-type: application/json');
	//problemas de seguridad entonces se le agrega la siguiente liniea
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
	header('Access-Control-Allow-Methods: GET, POST, PUT');

 	//DECLARACION DE MOCKS Y CONSTANTES
	define("MOCK_USER", "Diana");
	define("MOCK_PASS", 123456);

	$response_login = array("code"=>"number", "msg"=>"mensaje", "m"=>"m", "user"=>"user");
	$response_logout = array("code"=>"number", "msg"=>"mensaje", "m"=>"m", "user"=>"user");
	$response_signup = array("code"=>"number", "msg"=>"mensaje", "m"=>"m", "user"=>"user");
	$response_delete = array("code"=>"number", "msg"=>"mensaje", "m"=>"m", "user"=>"user");
	
	//DECLARACION DE LA CLASE
	class Auth{
		
		// Declaración de una propiedad
    	// public $user;
    	// public $pass;

    	//DECLARACION DEL METODO
    	function login($user, $pass){
			if($user == MOCK_USER && $pass == MOCK_PASS){
				$response_login["code"] = 202;
				$response_login["msg"] = "BIENVENIDA!";
				$response_login["m"] = "m";
				$response_login["user"] = $user; 
			}
			else{
				$response_login["code"] = 404;
				$response_login["msg"] = "No es bienvenido!";
				$response_login["m"] = "m_e";
				$response_login["user"] = $user; 
			}
			echo json_encode($response_login);
    	}

    	function logout($user, $pass){
    		$response_logout["code"] = 202;
			$response_logout["msg"] = "Hasta la vista, baby";
			$response_logout["m"] = "m";
			$response_logout["user"] = $user;
			echo json_encode($response_logout);	
    	}
    	
    	function signup($user, $pass){
    		if($user != MOCK_USER){
				$response_signup["code"] = 202;
				$response_signup["msg"] = "Registro exitoso!";
				$response_signup["m"] = "m_c";
				$response_signup["user"] = $user; 
			}
			else {
				$response_signup["code"] = 404;
				$response_signup["msg"] = "Error en el registro!";
				$response_signup["m"] = "m_c_e";
				$response_signup["user"] = $user; 
			}
    		echo json_encode($response_signup);
    	}

    	function read($user, $pass){
    		if($user == MOCK_USER){
				$response_signup["code"] = 202;
				$response_signup["msg"] = "Registro exitoso!";
				$response_signup["m"] = "m_r";
				$response_signup["user"] = $user; 
			}
			else {
				$response_signup["code"] = 404;
				$response_signup["msg"] = "Error en el registro!";
				$response_signup["m"] = "m_r_e";
				$response_signup["user"] = $user; 
			}
    		echo json_encode($response_signup);
    	}

    	function update($user, $pass){
    		if($user == MOCK_USER){
				$response_signup["code"] = 202;
				$response_signup["msg"] = "Registro exitoso!";
				$response_signup["m"] = "m_u";
				$response_signup["user"] = $user; 
			}
			else {
				$response_signup["code"] = 404;
				$response_signup["msg"] = "Error en el registro!";
				$response_signup["m"] = "m_u_e";
				$response_signup["user"] = $user; 
			}
    		echo json_encode($response_signup);
    	}
    	function delete($user, $pass){
    		if($user == MOCK_USER){
				$response_delete["code"] = 202;
				$response_delete["msg"] = "Usuario eliminado!";
				$response_delete["m"] = "m_d";
				$response_delete["user"] = $user;
			} 
			else {
				$response_delete["code"] = 404;
				$response_delete["msg"] = "Usuario no encontrado";
				$response_delete["m"] = "m_d_e";
				$response_delete["user"] = $user; 
			}
    		echo json_encode($response_delete);
    	}


	}

	if(isset($_REQUEST['usuario'])) { $tomar_usuario = $_GET['usuario'];}
	else {$tomar_usuario = (json_decode(file_get_contents('php://input'), true)["usuario"]); }

	if(isset($_REQUEST['contra']) )	{ $tomar_contra = $_GET['contra'];}
	else {$tomar_contra = (json_decode(file_get_contents('php://input'), true)["contra"]); }

	if(isset($_REQUEST['ruta']) )	{ $tomar_ruta = $_GET['ruta'];}
	else {$tomar_ruta = (json_decode(file_get_contents('php://input'), true)["ruta"]); }


	//CREAR OBJETO
	$auth = new Auth();

	//LLAMAR AL MÉTODO DEL OBJETO
	switch($tomar_ruta){
		case "login":
			$auth->login($tomar_usuario, $tomar_contra);
			break;
		case "logout":
			$auth->logout($tomar_usuario, $tomar_contra);
			break;
		case "signup":
			$auth->signup($tomar_usuario, $tomar_contra);
			break;
		case "delete":
			$auth->delete($tomar_usuario, $tomar_contra);
			break;
		case "":
			break;
	}
/*
	if (isset($_REQUEST['idioma'])) {
		$idioma = $_GET['idioma'];
	} else {
		$idioma = (json_decode(file_get_contents('php://input'), true)["idioma"]);
	}
	isset($_REQUEST['mensaje']) ? $mensaje = $_GET['mensaje'] : $mensaje = (json_decode(file_get_contents('php://input'), true)["idioma"]);
	/*$valmsg = new Valmsg();
	//echo $_POST['ruta'];
	switch($idioma){
		case 1:
			$valmsg->en($mensaje);
			break;
		case 2:
			$valmsg->es($mensaje);
			break;
		case 3:
			$valmsg->pv($mensaje);
			break;
	}

	$response_en = array("id"=>"number", "msg"=>"mensaje");
	$response_es = array("id"=>"number", "msg"=>"mensaje");
	$response_pv = array("id"=>"number", "msg"=>"mensaje");
	

	class Valmsg
	{
		function en($mensaje){
			$response_en["id"] = "1";
			$response_en["msg"] = "m_e";
			echo json_encode($response_en);
		}
		function es($mensaje){
			$response_es["id"] = "2";
			$response_es["msg"] = "m_e";
			echo json_encode($response_es);
		}
		function pv($mensaje){
			$response_pv["id"] = "3";
			$response_pv["msg"] = "m_e";
			echo json_encode($response_pv);
		}
	}
	*/
	//echo "servicio_restful connected";
?>
