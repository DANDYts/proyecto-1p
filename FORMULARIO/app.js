const imprimir = () => {
  var folio=document.querySelector("#folio").value;
  var aciertos=document.querySelector("#aciertos").value;
  var correo=document.querySelector("#correo").value;
  var fecha=document.querySelector("#fecha").value;
    var nombre=document.querySelector("#nombre").value;
  var ap=document.querySelector("#ap").value;
  var am=document.querySelector("#am").value;
  var fecha=document.querySelector("#fecha").value;
var dia=document.querySelector("#dia").value;
var mes=document.querySelector("#mes").value;
  var año=document.querySelector("#año").value;
  var telaspirante=document.querySelector("#teleaspirante").value;
  var curp=document.querySelector("#curp").value;
  var sexo=document.querySelector("#sexo").value;
  var alergia=document.querySelector("#alergia").value;
  var carrera=document.querySelector("#carrera").value;
   var correot=document.querySelector("#correot").value; 
  var nacimiento=document.querySelector("#nacimiento").value; 
   
  document.querySelector("#Sfolio").innerHTML= folio;
  document.querySelector("#Saciertos").innerHTML= aciertos;
  document.querySelector("#Scarrera").innerHTML= carrera;
  document.querySelector("#Scorreo").innerHTML= correo;
  document.querySelector("#Sfecha").innerHTML= fecha;
  document.querySelector("#Snombre").innerHTML= nombre;
  document.querySelector("#Sap").innerHTML= ap;
  document.querySelector("#Sam").innerHTML= am;
  document.querySelector("#Sdia").innerHTML= dia;
  document.querySelector("#Smes").innerHTML= mes;
  document.querySelector("#Saño").innerHTML= año;
  document.querySelector("#Scurp").innerHTML= curp;
  document.querySelector("#Ssexo").innerHTML= sexo;
  document.querySelector("#Salergia").innerHTML= alergia;
  document.querySelector("#Stelaspirante").innerHTML= telaspirante;
  document.querySelector("#Scorreot").innerHTML= correot;
document.querySelector("#Snacimiento").innerHTML= nacimiento;
  
  
  
  
  };
  

const borrar=()=>{
  document.querySelector("#Sfolio").innerHTML= ' ';
  document.querySelector("#Saciertos").innerHTML= ' ';
  document.querySelector("#Scorreo").innerHTML= ' ';
  document.querySelector("#Sfecha").innerHTML= ' ';
  document.querySelector("#Snombre").innerHTML= ' ';
  document.querySelector("#Scarrera").innerHTML= ' ';
  document.querySelector("#Sap").innerHTML= '';
  document.querySelector("#Sam").innerHTML= '';
  document.querySelector("#Sdia").innerHTML= '';
  document.querySelector("#Smes").innerHTML= '';
  document.querySelector("#Saño").innerHTML= '';
  document.querySelector("#Scurp").innerHTML= '';
  document.querySelector("#Ssexo").innerHTML= '';
  document.querySelector("#Salergia").innerHTML= ' ';
  document.querySelector("#Stelaspirante").innerHTML= ' ';
  document.querySelector("#Scorreot").innerHTML= ' ';
  document.querySelector("#Snacimiento").innerHTML= ' ';
  
}
