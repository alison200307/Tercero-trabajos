$(document).on("click","#btn_registrar",()=>{
let nm=$('#nombres').val();
let ap=$('#apellidos').val();
let tl=$('#telefono').val();
let c=$('#correo').val();

 if(nm.trim().length<5){
 	$('msj_nombres').attr('class','text-danger');
      return false;
}

if(ap.trim().length<5){
   $('msj_apellidos').attr('class','text-danger');
      return false;
}

if(tl.trim().length<10){
	$('msj_telefono').attr('class','text-danger');
      return false;
}

if(c.trim().length<16){
	$('msj_correo').attr('class','text-danger');
     return false;
}
  Swal.fire({
  icon: 'success',
  title: 'Registro correcto',
  text: 'Hola',
 
})
})
   