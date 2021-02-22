<?php
require_once("usuarios.php");
$usuarios=new usuarios();

if(isset($_POST['op'])){

	if($usuarios->create_user($_POST['datos']) ){
	return 0;
}else{
	return 1;
}
	
}else{
$datos=mysqli_fetch_all( $usuarios->listar_usuarios() );
echo json_encode($datos);

}


?>

