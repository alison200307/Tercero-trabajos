$(document).on("click","btn_registrar",()=>{
  lent ap=$('#apellidos').val();
  lent nm=$('#nombres').val();
  lent tl=$('#telefono').val();
  lent co=$('#correo').val();
    if (ap.lenght<5 ) {
      $('#msj_apellidos').text('Error: debe escribir minimo 6 caracteres');
      $('#msj_apellidos').attr('class','text-danger');

      return false;
    }
    if (nm.lenght<5 ) {
      $('#msj_nombres').text('Error: debe escribir minimo 6 caracteres');
      $('#msj_nombres').attr('class','text-danger');
      return false;
    }
        if (tl.lenght<5 ) {
      $('#msj_telefono').text('Error: debe escribir minimo 6 caracteres');
      $('#msj_telefono').attr('class','text-danger');
      return false;
    }
        if (co.lenght<5 ) {
      $('#msj_correo').text('Error: debe escribir minimo 6 caracteres');
      $('#msj_correo').attr('class','text-danger');
      return false;
    }
    alert('llene')
 })
  