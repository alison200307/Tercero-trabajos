//Jonathan Jami
<?php
class Conexion {
	var $con;
	function __construct()

{
     // al inicio se crea una instancia de la conexion
$this->con = new mysqli("localhost","root","","TERCERO");

}
function listar_usuarios(){
	if($this->con){
		// devuelve una consulta de la tabla usuarios
return $this->con->query("SELECT * FROM usuarios");

	}
}
function inserta_usuario(){
	if($this->con){
		return $this->con->query("");
	}
}
function actualizar_usuarios($ape,$nm,$ciu,$dire,$tlf,$corr,$sexo,$fecha_na,$usu,$pass,$id){
	if($this->con){
		return $this->con->query("UPDATE usuarios SET 
            apellidos='$ape',
            nombres='$nm',
            ciudad='$ciu',
            direccion='$dire',
			telefono='$tlf',
			correo='$corr',
			sexo='$sexo',
			fecha_nacimiento='$fecha_na',
			usuario='$usu',
			password='$pass',
			WHERE id=2 

			");
}
}
}
$Conexion=new Conexion();
$Conexion->actualizar_usuarios('Morales','Juan','Cuenca','Santa rosa','09808808808','@gmail.com','Masculino','02/01/2000','juan','juan','1')
$Conexion->actualizar_usuarios('Lopez','Adrian','Quito','El Blanqueado','09808416315','users@gmail.com','H','02/01/2005','adrian','adrian','2')

$Conexion->actualizar_usuarios('Poma','Carlos','Guayaquil','Santa Barbara','0885545412','carlos@gmail.com','H','02/12/2002','carlos','carlos','3')

$Conexion->actualizar_usuarios('Altamirano','Anahi','El oro','San Ingnacio','098512345','anahi@gmail.com','M','14/01/2000','Anahi','Anahi','4')

$Conexion->actualizar_usuarios('Toalombo','Abigail','Quito','Paquisha','0945632145','toalombo@gmail.com','M','12/11/2005','abigail','abigail','5')

?>


