<?php

require_once("usuarios.php");
$usuarios=new usuarios();

if(isset($_POST['op'])){
	echo "Alison Toapanta Listo para insertar desde php";
	print_r($_POST['datos']);
}else{
$datos=mysqli_fetch_all( $usuarios->listar_usuarios() );

echo json_encode($datos);

}


?>

