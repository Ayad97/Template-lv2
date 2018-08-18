/*jslint browser: true*/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.getElemenById("ch-down").style.marginLeft = "-27%";
    
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    document.getElemenById("ch-down").style.marginLeft = "0";
}
/*global $, jQuery, alert*/
(function(){
  function id(v){ return document.getElementById(v); }
  function loadbar() {
    var ovrl = id("overlay"),
        prog = id("progress"),
        stat = id("progstat"),
        img = document.images,
        c = 0,
        tot = img.length;
    if(tot == 0) return doneLoading();

    function imgLoaded(){
      c += 1;
      var perc = ((100/tot*c) << 0) +"%";
      prog.style.width = perc;
      stat.innerHTML = "Loading "+ perc;
      if(c===tot) return doneLoading();
    }
    function doneLoading(){
      ovrl.style.opacity = 0;
      setTimeout(function(){ 
        ovrl.style.display = "none";
      }, 1200);
    }
    for(var i=0; i<tot; i++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }    
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);
}());

$(function () {
    
    'use strict';

    $('html').niceScroll({
        cursorcolor:'#f7600f',
        cursorwidth:8,
        cursorborder:'1px solid #f7600f'
    });
    
    $('.header').height($(window).height());

    $('.header .arrow i').click(function(){
        $('html , body').animate({
            scrollTop:$('.features').offset().top
        }, 1000);
    });

    $('.sh-btn').click(function(){
        $('.our-work .hidden').fadeIn(2000),
        $('.sh-btn').hide();
    });

    /* check testimonial chevron*/

        var leftArrow = $('.testimonials .fa-chevron-left'),
            rightArrow=$('.testimonials .fa-chevron-right');

    function checkClient(){
        if($('.client:first').hasClass('active')){
            leftArrow.fadeOut();
        }
            else
            {
                leftArrow.fadeIn();
            }
        if($('.client:last').hasClass('active')){
            rightArrow.fadeOut();
        }
            else
            {
                rightArrow.fadeIn();
            }

        }
        checkClient();
   
        $('.testimonials i').click(function(){
            if($(this).hasClass('fa-chevron-right')){
                $('.testimonials .active').fadeOut(100 , function(){
                    $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                    checkClient();
                });
            } else {
                $('.testimonials .active').fadeOut(100 , function(){
                    $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                    checkClient();
                });
            }
        });
    });
