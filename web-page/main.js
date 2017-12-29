/*global $, alert , console*/

$(function (){
      'use strict';
      //links Add active class


$(".navbar-nav li").click(function (){
          $(this).addClass('active').siblings().removeClass('active');

     });
  
});

//button


