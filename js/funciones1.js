$(function(){ //CUANDO CARGE LA PAGINA

	//traer_datos();

	alert("ok");

});

	


/*
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
	let cd = $("#cedula").val();
	if(cd.length==0){
		$("#msj_cedula").attr("class","bg-danger");
		return false;
	}
	let co = $("#correo").val();
	if(co.length==0){
		$("#msj_correo").attr("class","bg-danger");
		return false;
	}
    let city = $("#ciudad").val();
	if(city.length==0) {
		$("#msj_ciudad").attr("class","bg-danger");
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
    let terminos=$('#terminos');
    if( $(terminos).prop('checked')==false){
	    alerta('error','Debe aceptar los terminos y condiciones','Alerta',true,'center',0);
	    return false;
}
 alerta('success','Datos Registrados','Proceso correcto',false,'bottom-end',3000);

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
//const traer_datos=()=>{
	//alert("ok");
	//$.ajax({
		//url:'./clases/acciones.php',
		//method:'GET',
		//beforesend:()=>{	


		//},
		//success:(result)=>{
			//const usuarios=$.parseJSON(result);
			//let row="";
			////usuarios.map( (item)=>{	
			////row+=`<tr>   <td> </td>
			            // <td>${item[1]}</td>
			            // <td>${item[2]}</td>
			            // <td>${item[3]}</td>
			            // <td>${item[4]}</td>
			            // <td>${item[5]}</td>
			            // <td>${item[6]}</td>
			            // <td>${item[7]}</td>
			            // <td>${item[8]}</td>
			            // <td>${item[9]}</td>
			           //<td>${item[10]}</td>
			          // <td>${item[11]}</td>
			          // <td>${item[12]}</td>
			    //</tr>`;
//})
	//$("#tbody_datos").html(row);
		
		//}
		
	//});
//}
//$(function() {
	//alert('ok');
	
//})
//$(document).on("click",".btn_registrar",()=>{
	//let city= $("#ciudad").val();
	//if(city.length==0) {
		//$("msj_ciudad").attr("class","bg-danger");

	//}
*/