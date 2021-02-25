$(function(){ //CUANDO CARGE LA PAGINA

	traer_datos();

})

$(document).on("click",".btn_editar", function(){
 let usu_id=$(this).attr('usu_id');
 $.ajax({
 	url:'./clases/acciones.php',
 	method:'POST',
 	data:{op:2,usu_id:usu_id},
 	success:(result)=>{

 		const usuario=$.parseJSON(result);
 		console.log(usuario);
 		$("#apellidos").val(usuario[1]);
 		$("#nombres").val(usuario[2]);
 		$("#correo").val(usuario[3]);
 		$("#fecha_nacimiento").val(usuario[4]);
 		$("#"+usuario[5]).prop("checked",true);
 		$("#usuario").val(usuario[6]);
 		$("#password").val(usuario[7]);
 		$("#ciudad").val(usuario[8]);
 		$("#direccion").val(usuario[9]);
 		$("#telefono").val(usuario[10]);



 	}
 });

})


$(document).on("click",".btn_registrar",()=>{
	let ap = $("#apellidos").val();
	if(ap.length==0){
		$("#msj_apellidos").attr("class","bg-danger");
		return false;
	}
	let n = $("#nombres").val();
	if(n.length==0){
		$("#msj_nombres").attr("class","bg-danger");
		return false;
	}
	let co = $("#correo").val();
	if(co.length==0){
		$("#msj_correo").attr("class","bg-danger");
		return false;
	}
	let fn = $("#fecha_nacimiento").val();
	if(fn.length==0) {
		$("#msj_fecha_nacimiento").attr("class","bg-danger");
		return false;
	}
	let obj_sexo=$(".obj_radio");
	let sexo="";
	$(obj_sexo).map(function(){
		if( $(this).prop('checked')==true){
			sexo=$(this).val();
		}
		
	});
	if(sexo==""){
		alert('Seleccione una opcion');
		return false;
	}
	let us = $("#usuario").val();
	if(us.length==0) {
		$("#msj_usuario").attr("class","bg-danger");
		return false;
	}	
	let password = $("#password").val();
	if(password.length==0) {
		$("#msj_password").attr("class","bg-danger");
		return false;
	}
    let city = $("#ciudad").val();
	if(city.length==0) {
		$("#msj_ciudad").attr("class","bg-danger");
		return false;
	}
	let drc = $("#direccion").val();
	if(drc.length==0) {
		$("#msj_direccion").attr("class","bg-danger");
		return false;
	}
	let tlf = $("#telefono").val();
	if(tlf.length==0) {
		$("#msj_telefono").attr("class","bg-danger");
		return false;
	}	
		
	
    let terminos=$('#terminos');
    if( $(terminos).prop('checked')==false){
	    alerta('error','Debe aceptar los terminos y condiciones','Alerta',true,'center',0);
	    return false;
}
 let datos=[ap,n,co,fn,sexo,us,password,city,drc,tlf];
 //console.log(datos);
envio_datos(datos);
 //alerta('success','Datos Registrados','Proceso correcto',false,'bottom-end',3000);

 })
const alerta=(icon,text,title,showConfirmButton,position,timer)=>{
Swal.fire({
  icon: icon,
  title: title,
  text: text,
  position: position,
  showConfirmButton:showConfirmButton,
  timer: timer,
})
}

//const datos=[
    // {apellidos:'Toapanta', nombres:'Alison', cedula:'1718285454', correo:'dayanatoapanta@gmail.com', ciudad:'Quito', sexo:'Mujer'},
      //{apellidos:'Perez', nombres:'Marlon', cedula:'1718552525', correo:'marolperez@gmail.com', ciudad:'Guayaquil', sexo:'Hombre'},
      //{apellidos:'Sanchez', nombres:'Marisol', cedula:'1701123654', correo:'marisol@gmail.com', ciudad:'Manta', sexo:'Mujer'},
      //{apellidos:'Pinto', nombres:'Saul', cedula:'1778945612', correo:'saul@gmail.com', ciudad:'Quito', sexo:'Hombre'},
      //{apellidos:'Mancheno', nombres:'Helen', cedula:'1726155521', correo:'helen@gmail.com', ciudad:'Guayaquil', sexo:'Mujer'},
      //{apellidos:'Morales', nombres:'Andy', cedula:'1703248925', correo:'andy@gmail.com', ciudad:'Manta', sexo:'Hombre'}


//];
const traer_datos=()=>{
	$.ajax({
		url:'./clases/acciones.php',
		method:'GET',
		beforesend:()=>{	
		},
		success:(result)=>{
			const usuarios=$.parseJSON(result);
			let row="";
			usuarios.map( (item)=>{	
			row+=`<tr>   <td></td>
			             <td>${item[1]}</td>
			             <td>${item[2]}</td>
			             <td>${item[3]}</td>
			             <td>${item[4]}</td>
			             <td>${item[5]}</td>
			             <td>${item[6]}</td>
			             <td>${item[7]}</td>
			             <td>${item[8]}</td>
			             <td>${item[9]}</td>
			             <td>${item[10]}</td>
			             <td>${item[11]}</td>
			             <td>${item[12]}</td>
			             <td><i usu_id='${item[0]}' class=" btn fas fa-pencil-alt btn_editar">Editar</i></td>
                         <td><i class="btn fas fa-trash-alt btn_eliminar">Eliminar</i></td>
			            
			    </tr>`;
})
	$("#tbody_datos").html(row);
		
		
		}
		
	});
}

const envio_datos=(datos)=>{
	$.ajax({
		url:'./clases/acciones.php' ,
		method:'POST' ,
		data:{datos:datos,op:1} ,
		beforeSend:()=>{
		},
		success:(result)=>{
			//console.log(result);
			if(result==0) {
		alerta('success','Datos Registrados correctamente','Registro correcto',true);
        window.history.go(0);        
}else{
	alerta('error','Algo salio mal','Error',true);

			}
		}
	})

}
//$(function() {
	//alert('ok');
	
//})
//$(document).on("click",".btn_registrar",()=>{
	//let city= $("#ciudad").val();
	//if(city.length==0) {
		//$("msj_ciudad").attr("class","bg-danger");

	//}
