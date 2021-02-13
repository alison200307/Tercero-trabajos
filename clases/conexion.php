<?php
class conexion {

	var $con;
	function __construct()
	{
		$this->con = new mysqli("localhost","root","","tercero");
	}
}

?>