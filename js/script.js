$(function() {
    "use strict";


    /**
    * ----------------------------------------------
    * Preloader
    * ----------------------------------------------
    */

    $(window).on('load', function() {
        preloader();
    })


    function preloader(){
        $(".loading").delay(4500).fadeOut();
        $(".preloader").delay(5000).fadeOut("slow").delay(5000, function(){
            $(this).remove();
        });
    }



    /**
    * ----------------------------------------------
    * Menu
    * ----------------------------------------------
    */


    $(window).load(function() {
        $("body").addClass("loaded")
    }),$("body").scrollspy({
        target: ".menu"
    });
    var e = $(".menu"),
        o = $(".toggle-btn"),
        s = $("section, footer, .toggle-btn");
    o.on("click", function(o) {
        e.hasClass("show-menu") ? e.removeClass("show-menu") : e.addClass("show-menu"), o.stopPropagation()
    }), o.on("click", function() {
        s.hasClass("push-content") ? s.removeClass("push-content") : s.addClass("push-content")
    }), o.on("click", function() {
        o.hasClass("toggle-close") ? o.removeClass("toggle-close") : o.addClass("toggle-close")
    });



    /**
    * ----------------------------------------------
    * Nicescroll Scroll Bar
    * ----------------------------------------------
    */

    $("body").niceScroll({
        scrollspeed: 40,
        mousescrollstep: 30,
        zindex: 1,
        cursorwidth: 5,
        cursorborder: false,
        cursorborderradius: 0,
        cursorcolor: "#07cb79",
        horizrailenabled: false,
    });

    // Call resize whenever mouse move
    $("body").mouseover(function() {
      $("body").getNiceScroll().resize();
    });



    /**
    * ----------------------------------------------
    * Click To Top
    * ----------------------------------------------
    */


    $(".back-to-top").hide();
        
    $('.back-to-top a').on('click', function(e) {
        e.preventDefault();
        $('body,html').animate({scrollTop:0},800);
        return false;
    });


    $(window).on('scroll', function() {
        // Back to top                          
        if($(this).scrollTop()>150){
            $('.back-to-top').fadeIn();
        }
        else{
            $('.back-to-top').fadeOut();
        }
    });



    /**
    * ----------------------------------------------
    * Scroll
    * ----------------------------------------------
    */


    $("a[href^='#']").on("click", function(event) {
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top
        }, 1500, "easeInOutQuart"), event.preventDefault()
    });
    


    



    /**
    * ----------------------------------------------
    * Skills
    * ----------------------------------------------
    */

    var $progress_bars = $( ".progress-bar-container .progress-bar" ),
        methods = {
            init: function() {
                // Bind events
                methods.bindEvents();
            },
            bindEvents: function() {
                // Loop through each of the bars...
                $progress_bars.each( function() {
                    var $progress_bar = $( this ),
                        $progress_percentage = $progress_bar.find( ".progress-percentage" ),
                        data = $progress_bar.data( "progress-bar" );
                    setTimeout( function() {
                        $progress_bar
                            .addClass( "progress-bar-active" )
                            .animate({
                                "width": $progress_percentage.html()
                            }, data.speed || 3000, function() {
                                $progress_percentage.addClass( "progress-percentage-active" );
                            });
                    }, data.delay || 0 );           
                });
            }
        };

    // Initialize on page load
    methods.init();


    /**
    * ----------------------------------------------
    * Mixitup
    * ----------------------------------------------
    */

    var containerEl = document.querySelector('#portfolio .portfolio-mixitup');

    var mixer = mixitup(containerEl, {
        animation: {
            effects: 'fade scale stagger(50ms)'
        },
        load: {
            filter: 'none'
        }
    });

    mixer.show()
        .then(function() {

            mixer.configure({
                animation: {
                    effects: 'fade scale'
                }
            });
        });


    /**
    * ----------------------------------------------
    * FancyBox
    * ----------------------------------------------
    */

    $('.fancybox').fancybox();


    /**
    * ----------------------------------------------
    * Owl Carousel
    * ----------------------------------------------
    */

    $(".testimonial-slider").owlCarousel({
        items:1,
        dots:true,
        dotsSpeed: 200,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });

    

});