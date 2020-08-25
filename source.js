
function validacion()
{
   //obteniendo el valor que se puso en campo text del formulario
   var name = document.getElementById("nombre").value;
   //la condición
   if (name.length == 0) {
     //  return false;
       alert("hola mundo");
   }
   return true;
   
}