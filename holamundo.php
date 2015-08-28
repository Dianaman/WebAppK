<?php 
	//echo "hola mundo";
	
	//function algo()
	//{
	
	header('Content-type: application/json');
	$tomar_usuario=$_GET['usuario'];
	$tomar_contra=$_GET['contra'];
	if($tomar_usuario=="Diana" && $tomar_contra==123456)
	{
		echo json_encode('true');
	}
	else
	{
		echo json_encode('false');
	}
    //$tomar_usuario="lslsls";
	//$tomar_contra="slsklñksñl";
    //echo json_encode($tomar_usuario.$tomar_contra);
	//}
?>