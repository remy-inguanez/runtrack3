
var but = document.getElementById('button');
function addone()
{	
   var comp=document.getElementById("compteur").innerHTML ;
   comp++;
   document.getElementById("compteur").innerHTML = comp ;
 }
but.onclick= addone;
