<?php
	$enlace =  mysqli_connect('localhost', 'root', '', 'siana');
	if (!$enlace) {
	    die('No pudo conectarse: ' . mysql_error());
	}
	//echo 'Conectado satisfactoriamente';

	$sql = "SELECT p.nombre_provincia FROM usuarios u INNER JOIN provicias p ON u.ID_provincia=p.ID_provincia";
	$result = mysqli_query($enlace, $sql);
	var_dump($result);

	mysqli_close($enlace);

	/*$servername = "localhost";
$username = "root";
$password = "";
$dbname = "siana";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    echo 'mal';
} 
echo 'b';
$sql = "SELECT 1";
$result = $conn->query($sql);
var_dump($result);*/
?>


<!--SELECT s.sexo FROM usuarios u INNER JOIN sexo s ON u.Id_sexo=s.ID_sexo-->