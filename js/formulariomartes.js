
 $(document).on("click","btn_registrar",()=>{
  lent nm=$('#nombre').val();
  lent ap=$('#nombre').val();
  lent tl=$('#telefono').val();
  lent co=$('#correo').val();
    if (nm.lenght<5 ) {
      $('#nombre').text('Error: debe escribir minimo 6 caracteres');
      $('#nombre').attr('class','text-danger');

      return false;
    }
    if (ap.lenght<5 ) {
      $('#apellidos').text('Error: debe escribir minimo 6 caracteres');
      $('#apellidos').attr('class','text-danger');
      return false;
    }
        if (ap.lenght<5 ) {
      $('#telefono').text('Error: debe escribir minimo 6 caracteres');
      $('#telefono').attr('class','text-danger');
      return false;
    }
        if (ap.lenght<5 ) {
      $('#correo').text('Error: debe escribir minimo 6 caracteres');
      $('#correo').attr('class','text-danger');
      return false;
    }
 })