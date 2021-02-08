window.addEventlistener("load",()=>{

	document.getElementById('btn_registrar').addEventlistener("click",()=>{
		
		let nm=document.getElementById('nombres');
		let ap=document.getElementById('apellidos');
		let tlf=document.getElementById('telefono');
		let c=document.getElementById('correo');
        if (nm.value.trim().length>5){
			alert=('NOMBRES incorrectos');
		}else{
		document.getElementById('msj_nombres').innerHTML='Error:debe escribir minimo 6 caracteres';
		document.getElementById('msj_nombres').className='text-danger';
	}
		if (ap.value.trim().length>5){
			alert=('APELLIDOS incorrectos');
		}else{
		document.getElementById('msj_apellidos').innerHTML='Error:debe escribir minimo 6 caracteres';
		document.getElementById('msj_apellidos').className='text-danger';
	}
		if (tlf.value.trim().length>9){
			alert=('TELEFONO incorrectos');
		}else{
		document.getElementById('msj_telefono').innerHTML='Error:debe escribir minimo 6 caracteres';
		document.getElementById('msj_telefono').className='text-danger';
	}
		if (c.value.trim().length>15){
			alert=('CORREO incorrectos');
		}else{
		document.getElementById('msj_correo').innerHTML='Error:debe escribir minimo 6 caracteres';
		document.getElementById('msj_correo').className='text-danger'

}
})
})