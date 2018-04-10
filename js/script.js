
$(document).ready(function () {
	/* settings */
	var navItems = $('.admin-menu > a');
        var navListItems = $('.admin-menu a');
        var allWells = $('.admin-content');
        var allWellsExceptFirst = $('.admin-content:not(:first)');
        allWellsExceptFirst.hide();
        navItems.click(function(e)
        {
			
            e.preventDefault();
            navListItems.removeClass('active');
            $(this).closest('li').addClass('active');
            allWells.hide();
            var target = $(this).attr('data-target-id');
            $('#' + target).show();
			
			$('#settings #cancel').click(function()
		{
		
		$('#settings').css('display','none');
		$('.admin-menu').removeClass('active');
		
		});
		
			
        });
		
	

	
	
	
	/* home page */
	/* sign in and sign up */
	
	
	$(".signin-menu").click(function () {
		$(".forgetpwdform, .signupform, .otp-form").hide();
		$(".signinform").slideDown(100);
		$(".signup-menu").removeClass("activelink");
		$(".signinform #signin-signup").click(function()
		{
			$(".signinform").hide();
			$(".signin-menu").removeClass("activelink");
			$(".signup-menu").addClass("activelink");
			/*$(".signupform").slideDown();*/
			$(".signup-menu").click();
		});
		
	});
	$(".signup-menu").click(function()
	{
		$(".forgetpwdform, .signinform, .otp-form").hide();
		$(".signin-menu").removeClass("activelink");
		$(".signupform").slideDown(100);
		$(".signupform #signup-signin").click(function()
		{
			$(".signupform").hide();
			$(".signup-menu").removeClass("activelink");
			$(".signin-menu").addClass("activelink");
			/*$(".signinform").slideDown();*/
			$(".signin-menu").click();
			
			
		});
		
		

	});
	$('.pwd').click(function()
    {    
    	$(".signupform, .signinform, otp-form").hide();
		 $(".signup-menu, .signin-menu").removeClass("activelink");
		$(".forgetpwdform").slideDown(100);
		
		
		
	});
	$('.signupform #signup-signup').click(function()
    {    
	
    	$(".signupform, .signinform, .forgetpwdform").hide();
		 $(".signup-menu, .signin-menu").removeClass("activelink");
		$(".otp-form").slideDown(100);
		
		
	});
	
	$("header, .explore-for-form, .video-container, .writetous, .footer-container").click(function()
		{
			$(".signupform, .signinform, .otp-form, .forgetpwdform").hide();
			
		});



	
	
	
	var header=$(".banner-coloumn").height()-$(".profile .user").height()-$('.menu-logos-list').height();
		 
		var windowwidth=$(window).width();
	var windowheight=$(window).height();
	
	var headerwidth=$(".topmenu").width();
	var headerwidthper=(((headerwidth/headerwidth)*100)+'%');
	/* alert("headerwidthper: "+headerwidthper);*/
	
	var logonavwidth=$('.brand-logo').width()+$('.navbar-nav').width();
	var logonavwidthper=(((logonavwidth/headerwidth)*100)+'%');
	/* alert("logonavwidth:"+logonavwidthper);*/
	
	var remainwidth=headerwidth-logonavwidth;
	var remainwidthper=(((remainwidth/headerwidth)*100)+'%');
	/* alert("remaining width free: "+remainwidthper);*/
	
	var menufixed=$(".menu-logos-list-fixed").width();
	var menufixedper=(((menufixed/headerwidth)*100)+'%');
	
	var navwidth=$(".topmenutxt").width()+40;
	var navwidthper=(((navwidth/windowwidth)*100)+'%');
	
	var headerheight=$("nav").height();
	var headerheightper=(((headerheight/windowheight)*100)+'%');
	/* alert(headerheightper);*/
	
	if(remainwidthper>=menufixedper)
	{
		/* alert("fix in same row");*/
		$(".menu-logos-list-fixed").css({
    'right': (navwidthper)
	});
	
	}
	

	
	
	
	
	   $(window).scroll(function(){
		   
		  
	function mediaSize() { 	  
		
	if (window.matchMedia('(min-width: 768px)').matches) {
	
    if ($(window).scrollTop() > header) {
	
		
       /*$('.menu-logos-list').hide();
	   $('.menu-logos-list a i .menu-logos').css({'display':'none'});
	   $('.menu-logos-list a i').css({'height':'99px'});*/
	   
	   
	   
	   $('.menu-logos-list-fixed').fadeIn();
	   	  
	  
	    
    }
    else {
        $('.menu-logos-list').fadeIn();
		
		 $('.menu-logos-list-fixed').hide();
		}
	}
	
	else
	{
		var s_user=$(".user").height();
		var s_image=$(".image").height();
		var s_header=s_user+s_image;
		var s_height=$(".navbar-header-fixed").height();
		var s_heightper=(((s_height/windowheight)*100)+'%');
		
		if ($(window).scrollTop() > s_header) {
	
		
       /*$('.menu-logos-list').hide();
	   $('.menu-logos-list a i .menu-logos').css({'display':'none'});
	   $('.menu-logos-list a i').css({'height':'99px'});*/
	   
	   $(".menu-logos-list-fixed").css({
    'top': '101%','width':'100%','position':'relative','left':'0'
	});
	   
	   $('.menu-logos-list-fixed').fadeIn();
	   	  
	  
	    
    }
    else {
        $('.menu-logos-list').fadeIn();
		
		 $('.menu-logos-list-fixed').hide();
		}
		
		
	}
	};
	mediaSize();
	window.addEventListener('resize', mediaSize, false); 
		
	
});




/* $('.down-arrow-col .down').click(function()
{
	
	$(".hidden-one, .hidden-two").show();
	$(".down-arrow-col .fa-angle-down").replaceWith( "<a class='up' href='javascript:void(0);'><i class='fa fa-angle-up down-arrow' aria-hidden='true'><p class='view-past-trips-txt'>View less Past Trips</p></i></a>" );
	
	
	
});*/



//WISHLIST POPUP

$( "#location-popup" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      },
	  dialogClass: 'myTitleClass'
    });
 
    $( "#add-location" ).on( "click", function() {
      $( "#location-popup" ).dialog( "open" );
    });

    
//DATE PICKER

//    $( "#datepicker-start, #datepicker-end" ).datepicker();
//    $( "#datepicker-start, #datepicker-end" ).datepicker('setDate', 'today');
//    $( "#datepicker-start, #datepicker-end" ).datepicker('dateFormat', 'mm/dd/yy');

    $( "#datepicker-start, #datepicker-end" ).datepicker();
    $( "#datepicker-start, #datepicker-end" ).datepicker('setDate', 'today');
   
//CREATE TRIP
    
 
    $( "#start-loc" ).on( "click", function() {
      $( "#map-add, #map-add-close" ).show();
    });
    
    $( "#map-add-close span" ).on( "click", function() {
        $( "#map-add, #map-add-close" ).hide();
    });
    
//    show companinon
    
    
    $( "#add-comp" ).on( "click", function() {
      $( "#show-comp, #show-comp-close" ).show();
    });
    
    $( "#show-comp-close" ).on( "click", function() {
      $( "#show-comp, #show-comp-close" ).hide();
    });
  
});


