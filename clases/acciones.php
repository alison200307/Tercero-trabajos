<?php

require_once("usuarios.php");

$usuarios=new usuarios();
$datos=mysqli_fetch_all( $usuarios->listar_usuarios() );

echo json_encode($datos);
?>

