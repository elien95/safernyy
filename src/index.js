
import './scss/styles.scss';
import './css/style.css';
//import '../node_modules/@laylazi/bootstrap-rtl-scss/scss/bootstrap-rtl.scss';
import 'bootstrap-v4-rtl/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/js/all.min';
import 'jquery.animate';
import 'jquery'
//$('.main-btn').click(function(){
//window.location.herf='./src/tours.html';
//})
//window.onload = function() {
  document.getElementById("myButtonne").onclick = function () {
    location.href = "toursEygpt.html";
};
    document.getElementById("myButton").onclick = function () {
        location.href = "toursTourkey.html";
    };
//};
  document.getElementById("init-account").onclick=function(event){
    document.getElementsByClassName("account-btn").select();
  }
     
   /*
    var check = function() {
        if (document.getElementById('password').value ==
          document.getElementById('confirm_password').value) {
          document.getElementById('message').style.color = 'green';
          document.getElementById('message').innerHTML = 'matching';
        } else {
          document.getElementById('message').style.color = 'red';
          document.getElementById('message').innerHTML = 'not matching';
        }
      }*/
      
      var password=document.getElementById("password");
      var confirm_password=document.getElementById("confirm_password");
      var button_login=document.getElementById("register-account");
     button_login.onclick=function(event){
       if (confirm_password.value==password.value)
       {
         alert("ok");
       }
       else {
         alert("password don't match")
       }
     }
        
      