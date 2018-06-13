/*jslint browser: true*/
/*global $, jQuery, alert*/

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