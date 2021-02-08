$(document).on("click","#btn_registrar",()=> {
		let ap=$('#apellidos').val();
		if( ap.trim().length<5 ){
			$("#msj_apellidos").attr("class","text-danger");
			return false;
		}


		let nm=$('#nombres').val();
		if( nm.trim().length<5 ){
			$("#msj_nombres").attr("class","text-danger");
			return false;
		}

		let tl=$('#telefono').val();
		if( tl.trim().length<5 ){
			$("#msj_telefono").attr("class","text-danger");
			return false;
		}

		let co=$('#correo').val();
		if( co.trim().length<5 ){
			$('#msj_correo').attr("class","text-danger");
			return false;
		}


		Swal.fire({
  		icon: 'success',
  		title: 'Correcto',
  		text: 'Llene los datos correctamente',

})
 })