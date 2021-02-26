$(function(){ //cuando se carge  la pagina
traer_datos();

});


$(document).on("click","#btn_registrar",()=> {

		let ap=$("#apellidos").val();
		if( ap.trim().length<5 ){
			$("#msj_apellidos").attr("class","text-danger");
			return false;
		}


		let nm=$("#nombres").val();
		if( nm.trim().length<5 ){
			$("#msj_nombres").attr("class","text-danger");
			return false;
		}

		let tl=$("#telefono").val();
		if( tl.trim().length<5 ){
			$("#msj_telefono").attr("class","text-danger");
			return false;
		}

		let co=$("#correo").val();
		if( co.trim().length<5 ){
			$("#msj_correo").attr("class","text-danger");
			return false;
		}

		let city=$("#ciudad").val();
			if( city.length<5 ){
			$("#msj_ciudad").attr("class","text-danger");
			return false;
		}

		let obj_sexo=$("input[name=sexo]");
		
			
		let sexo="";
		$(obj_sexo).map(function(){ 
			if ($(this).prop('checked')==true){
				sexo=$(this).val();

		}
		});
			if (sexo=="") {
				alerta('error','Debe seleccionar una opcion','top-mid',true,0);
				return false;
			}

		let terminos=$("#terminos");
		if ($(terminos).prop('checked')==false) {
			
			alerta('error','Debe aceptar los terminos y condiciones','top-mid',true,0);
			return false;
			
			
		}

			alerta('success','DATOS INGRESADOS CORRECTAMENTE','bottom-end',false,3000);
		

		
 });

		//ecmascript  6+++

const alerta=(icon,title,position,showConfirmButton,timer)=>{
		Swal.fire({	
		position:position,
  		icon:icon,
  		title:title,
  		showConfirmButton:showConfirmButton,
  		timer:timer

		})
	
}

//const datos=[ 
//		{apellidos:'Jami',nombres:'Jonathan',telefono:'0980861340',correo:'jonathanjami765@gmail',ciudad:'Quito',sexo:'H'},
//		{apellidos:'Carrua',nombres:'Mikaela',telefono:'0985632147',correo:'carrua456@gmail',ciudad:'Quito',sexo:'M'},
//		{apellidos:'Llumitasig',nombres:'Jessica',telefono:'0952134578',correo:'kiola23@gmail',ciudad:'Cuenca',sexo:'M'}
//
//];

const traer_datos=()=>{

	$.ajax({
		url:'./clases/acciones.php',
		method:'GET',
		beforeSend:()=>{
			
	},
		success:(result)=>{
			const usuarios=$.parseJSON(result);
			let row="";
			usuarios.map( (item)=>{
				row+=`<tr>
						<td></td>
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
						<td> <i class='btn btn-info btn-xs'>Editar</i></td>
						</tr>`;
			}) 
			$("#tbody_datos").html(row)	

			}	
	});
	
	
}
