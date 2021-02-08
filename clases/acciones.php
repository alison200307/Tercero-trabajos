<?php
class Conexion {

	var $con;
	function_construct()
{
	//al inicio se crea una instancia de la conexion;
    $this->con = new mysqli("localhost","root","tercero");
}
function listar_usuarios(){
	if($this->con){
		//devuelve una consulta de la tabla usuarios
		return $this->con->query("SELECT * FROM usuarios");
	}
}
function inserta_usuarios(){
	if($this->con){
		return $this->con->query("");	
	}
}

function actualizar_usuario($ape,$nm,$cd,$drc,$tlf,$cor,$fn,$us,$sex,$con,$est,$fr,$id)
}

?>