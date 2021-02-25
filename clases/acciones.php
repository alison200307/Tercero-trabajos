<?php
require_once("usuarios.php");
$usuarios=new usuarios();

if(isset($_POST['op'])){
	
	switch ($_POST['op']) {
		case 1:
			//registar datos
		       if($usuarios->create_user($_POST['datos']) ){
	              return 0;
          }else{
	               return 1;
          }
        break;
		
		case 2:
			//Hacer una consulta de 1 solo usuario
		
			$usuario=mysqli_fetch_all( $usuarios->listar_un_usuario($_POST['usu_id']));
			echo json_encode($usuario[0]);
			break;
			
	}

	
	
}else{
$datos=mysqli_fetch_all( $usuarios->lista_usuarios() );
echo json_encode($datos);

}


?>

