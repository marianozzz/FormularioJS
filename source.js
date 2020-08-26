function validacion()
{
   //obteniendo el valor que se puso en campo text del formulario

   var nombre = document.getElementById("nombre").value;
   var apellido = document.getElementById("apellido").value;
   var email = document.getElementById("email").value;


 
  if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {

    document.getElementById('alert').removeAttribute("hidden"); 
        
    //con el return false evito que se recargue el form
    return false;
  }

  if ( nombre.length > 20){
    document.getElementById('alert').removeAttribute("hidden");
    document.getElementById('alert').textContent =" El nombre no puede superar los 20 caracteres";
    return false;
  }
  //Campo Apellido

  if (apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
     document.getElementById('alert-2').removeAttribute("hidden"); 
    //document.getElementById('alert').hidden = false;
        
    //con el return false evito que se recargue el form
    return false;
  }

/****************/
/*Validar Email */
/****************/

if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)) ) {
  
  document.getElementById('alert-email').removeAttribute("hidden");
  document.getElementById('alert-email').textContent ="Escriba una direccion validad de email";
  return false;
}

  /*
   if (name.length == 0) {
     //  return false;
       alert("hola mundo");
   }
   return true;*/
   
}