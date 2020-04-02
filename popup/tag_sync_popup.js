       
//debugger;
//
 
 /*
 const log = document.querySelector('#divid');



function op_auto() {
//log.textContent="ttttttt";//autocomplete (arr, inp.value);
//document.getElementById("country").textContent = "Johnny Bravo"; 
var rrr=document.getElementById("country");
rrr.value = "Johnny Bravo"; 
}


document.querySelector("#op_restart").addEventListener("click",op_auto);;  


// JavaScript Document
 */
 
 let msg = document.querySelector("#op_restart").textContent;
 console.log(msg);
 
msg = document.querySelector("#divid").textContent;
 console.log(msg);
 
 
// document.querySelector("#jhjh").value="neu";
 msg = document.querySelector("#jhjh").value;
 console.log(msg);
 
 
 
function op_auto() {
//log.textContent="ttttttt";//autocomplete (arr, inp.value);
//document.getElementById("country").textContent = "Johnny Bravo"; 
var rrr=document.querySelector("#jhjh");
rrr.value = "Johnny Bravo"; 
 msg = document.querySelector("#jhjh").value;
 console.log(msg);
 } 
 
 
 
 document.querySelector("#op_restart").addEventListener("click",op_auto);;  
  document.querySelector("#jhjh").addEventListener("keyup",op_auto);;  
