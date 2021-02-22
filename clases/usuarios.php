<?php
require_once("conexion.php");

class Usuarios extends conexion
{

function listar_usuarios(){
	if($this->con){
		//devuelve una consulta de la tabla usuarios
		return $this->con->query("SELECT * FROM usuarios");
	}
}
function create_user($datos){
	$fecha=date('Y-m-d');
	if($this->con){
		return $this->con->query("
			INSERT INTO usuarios 
			(apellidos,
			nombres,
			correo,
			fecha_nacimiento,
			sexo,
			usuario,
			password,
			ciudad,
			direccion,
			telefono,
			fecha_registro
			)
			values('$datos[0]',
			'$datos[1]',
			'$datos[2]',
			'$datos[3]',
			'$datos[4]',
			'$datos[5]',
			'$datos[6]',
			'$datos[7]',
			'$datos[8]',
			'$datos[9]',
			'$fecha'
			)
			");

	}
 }
}



// 	if($this->con){
// 		return $this->con->query("INSERT INTO usuarios 
//                                 (id,apellidos,nombres,ciudad,direccion,telefono,correo,sexo,fecha_nacimiento,usuario,contraseña,estado,fecha_registro)
//                                 VALUES (6,'Pilca','Damaris','Quito','El conde','0995212854','damaris@gmail.com','Mujer','2004-12-10','damaris','0789',0,'2021-02-08')");	
// 	}
// }

// function actualizar_usuarios($ape,$nm,$cd,$drc,$tlf,$cor,$sex,$fn,$us,$ps,$id){
// 	if($this->con){
// 		//devuelve una consulta de la tabla de usuarios
// 		return $this->con->query("UPDATE usuarios SET
// 			apellidos='$ape',
// 			nombres='$nm' ,
// 			ciudad='$cd' ,
// 			direccion='$drc' ,
// 			telefono='$tlf' ,
// 			correo='$cor' ,
// 			sexo='$sex' ,
// 			fecha_nacimiento='$fn' ,
// 			usuario='$us' ,
// 			password='$ps' 
// 			WHERE id='$id'
// 			");

// 	    }
 


//$Conexion=new conexion();
//$Conexion->actualizar_usuarios('Abad','Alison','Manta','Bretaña','0998694716','alison@gmail.com','Mujer','2003-08-03','alison','123',1);
//$Conexion->actualizar_usuarios('Castillo','Fernando','Quito','El valle','0984739133','fernando@gmail.com','Hombre','2000-02-25','fernando','123',2);
//$Conexion->actualizar_usuarios('Palomo','Yadira','Guayaquil','El conde','0983808926','yadira@gmail.com','Mujer','2006-01-15','yadira','123',3);
//$Conexion->actualizar_usuarios('Romero','Kleinger','Manta','Quitumbe','0953450171','kleinger@gmail.com','Hombre','1980-10-06','kleinger','123',4);
//$Conexion->actualizar_usuarios('Toapanta','Alison','Quito','El pintado','0986847304','alison@gmail.com','Mujer','2002-02-03','alison','123',5);

?>
