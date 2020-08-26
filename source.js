
function validacion()
{
   //obteniendo el valor que se puso en campo text del formulario
   var valor = document.getElementById("nombre").value;
   //la condición
 
  if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
    document.getElementById('alert').removeAttribute("hidden"); 
    //document.getElementById('alert').hidden = false;
        
    //con el return false evito que se recargue el form
    return false;
  }

  /*
   if (name.length == 0) {
     //  return false;
       alert("hola mundo");
   }
   return true;*/
   
}