
//import './scss/tours.scss';
//import './css/tours.css';
import 'bootstrap-v4-rtl/dist/css/bootstrap.min.css';

import './css/style.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/js/all.min';
import 'jquery.animate';

//$('.main-btn').click(function(){
//window.location.herf='./src/tours.html';
//})

    document.getElementById("myButton").onclick = function () {
        location.href = "toursTourkey.html";
    };

    document.getElementById("myButtonn").onclick = function () {
        location.href = "toursEygpt.html";
    };

  /*  document.getElementById("register-account").onclick = function () {
        location.href = "registerinto.html";
    };*/
    $("register-account").click(function () {
        $("form").attr("action", "registerinto.html");
 });
 /*
 function validate(){

    if(!document.getElementById("password").value==document.getElementById("confirm_password").value)alert("Passwords do no match");
    return document.getElementById("password").value==document.getElementById("confirm_password").value;
   return false;
    }
*/
/*
function validate(){

    var a = document.getElementById("password").value;
    var b = document.getElementById("confirm_password").value;
    if (a!=b) {
       alert("Passwords do no match");
       return false;
    }
}
*/
function verifyPassword() {
    var pw = document.getElementById("password").value;  
    if(pw.length < 5) {  
        document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
        return false;  
     }  
     
   //maximum length of password validation  
     if(pw.length > 15) {  
        document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
        return false;  
     } else {  
        alert("Password is correct");  
     }  
    }