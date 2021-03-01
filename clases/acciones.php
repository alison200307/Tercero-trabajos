<?php
require_once("usuarios.php");
$usuarios=new usuarios();

if(isset($_POST['op'])){

	switch ($_POST['op']) {
		case 1:
		///registra datos
		if ($_POST['datos'][10]>0) { ////DEL ARREGLO DE DATOS EN LA POSICION 10
			//Modifica Usuario
			$usuarios->modifica_usuario($_POST['datos']);
		}else{
			//Crea nuevo usuario 
			if($usuarios->create_user($_POST['datos']) ){
				return 0;
			}else{
				return 1;
			}
		}

		break;
		case 2:
		///Hacer consulta de 1 solo usuario
		//echo "Solicito Consulta:".$_POST['usu_id'];
		$usuario=mysqli_fetch_all( $usuarios->listar_un_usuario($_POST['usu_id']) );
		echo json_encode($usuario[0]);
		break;
		case 3:
		//Elimino 1 usuaio
		if( $usuarios->eliminar_usuario($_POST['usu_id']) ){
			return 0;

		}else{

			return 1;
		}

		break;
	
	
	}

}else{

$datos=mysqli_fetch_all( $usuarios->listar_usuarios() );
echo json_encode($datos);

}


?>

