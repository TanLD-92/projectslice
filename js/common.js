var revapi;
var dataContainer;
var itemPhotoPopupActive;
jQuery(document).ready(function() {
	// fullscreen
	var windowWidth = $('body').width();
	var windowHeight = $('body').height();
	if(windowWidth > 1120) {
		$('.wrapper-fullscreen').height(windowHeight);
		revapi = jQuery('.tp-banner').revolution(
		{
			delay:5000,
			startwidth:1170,
			startheight:600,
			hideThumbs:10,
			fullWidth:"off",
			fullScreen:"on",
			onHoverStop:"off",
			fullScreenOffsetContainer: "",
			navigationType : "none",
			autoHeight: "on",
			fullScreenOffsetContainer: ".category-sevice-fullpage"
		});
	}else {
		revapi = jQuery('.tp-banner').revolution(
		{
			delay:5000,
			startwidth:1170,
			startheight:600,
			hideThumbs:10,
			fullWidth:"off",
			fullScreen:"on",
			onHoverStop:"off",
			navigationType : "none",
			autoHeight: "on"
		});
	}


	$('.navbar-header-mobile .dropdown-menu-bt').click(function() {
		$(this).toggleClass("open");
		$('.navbar-header-mobile .nav-mobile-ct').fadeToggle();
	});

	$('#inputdatepickerTo').Zebra_DatePicker({
		direction: true,
		pair: $('#inputdatepickerEnd'),
		format: 'd/m/y'
	});

	$('#inputdatepickerEnd').Zebra_DatePicker({
		direction: 1,
		format: 'd/m/y'
	});
	$('#inputdatepicker').Zebra_DatePicker({
	     direction: true,
	     format: 'd/m/y'
	 });
	$('.item-search-header .btn-search-header').click(function() {
		if ($('.item-booking-header').hasClass('dropdown-active')) {
			$('.item-booking-header').removeClass('dropdown-active');
			$('.item-booking-header').find('.btn-booking-hd').toggleClass('open');
			$('.item-booking-header').find('.booking-header-content').fadeToggle(300);
		}

		$(this).toggleClass('open');
		$(this).parent().toggleClass('dropdown-active');
		$('.item-search-header .search-header-content').fadeToggle(500);
	});

	$('.item-booking-header .btn-booking-hd').click(function () {
	    $('#p-poup-arrow').css('display', 'none');
	    if ($('.item-search-header').hasClass('dropdown-active')) {
	        $('.item-search-header').removeClass('dropdown-active');
	        $('.item-search-header').find('.btn-search-header').toggleClass('open');
	        $('.item-search-header').find('.search-header-content').fadeToggle(300);
	    }

	    $(this).toggleClass('open');
	    $(this).parent().toggleClass('dropdown-active');
	    $('.item-booking-header .booking-header-content').fadeToggle(500);
	});

	$('.item-booking-header .btn-close').click(function () {
	    $('.item-booking-header .btn-booking-hd').toggleClass('open');
	    $('.item-booking-header .booking-header-content').fadeToggle(500);
	});

	$('#btn-book').click(function () {
	    var fromDate = $("#inputdatepickerTo").val();
	    var toDate = $("#inputdatepickerEnd").val();
	    var roomType = $("#reservationRoomType").val().trim();
	    if (fromDate && toDate && roomType) {
	        $('#p-poup-arrow').css('display', 'block');
	    }
	});
	$('.btn-cancel').click(function() {
		$('#p-poup-arrow').css('display','none');
		if ($('.item-booking-header').hasClass('dropdown-active')) {
			$('.item-booking-header').removeClass('dropdown-active');
			$('.item-booking-header').find('.btn-booking-hd').toggleClass('open');
			$('.item-booking-header').find('.booking-header-content').fadeToggle(300);
		}
	});
	autoHeightItemRes(650,390);
	truncateTextRes();
	//auto Length text responsive
	function truncateTextRes() {
		if($(window).width() > 580 && $(window).width() < 992) {
			var listItemResult = $('.item-result-desc-content');
			var itemAboutDescResult = listItemResult.find('.item-info-desc');
			$(itemAboutDescResult).each(function(){
			 if ($(this).text().length >  200) {
				 $(this).text($(this).text().substr(0, 200));
				 $(this).append('...');
			 }
		 });
		}
		else if($(window).width() < 414) {
			var listItemAbout = $('.list-item-about-us');
			var listItemResult = $('.item-result-desc-content');
			var itemAboutDescResult = listItemResult.find('.item-info-desc');
			var aboutDesItem = listItemAbout.find('.desc');
			$(aboutDesItem).each(function(){
			 if ($(this).text().length > 130) {
				 $(this).text($(this).text().substr(0, 130));
				 $(this).append('...');
			 }
		 });
			$(itemAboutDescResult).each(function(){
			 if ($(this).text().length > 130) {
				 $(this).text($(this).text().substr(0, 130));
				 $(this).append('...');
			 }
		 });
		}
	}
	//  $('.hasTooltip').tooltip();
	function autoHeightItemRes(width, height) {
		var itemBanner = $('.swiper-banner-container');
		var widthBannerDefault = 1298;
		var heightBannerDefault = 684;
		var widhtLeftMenu = 303;
		var heightBannerAuto = itemBanner.width()*heightBannerDefault/widthBannerDefault;
		if(width > 0 && height >0) {
			var widthWindow = $(document).width();
			if(widthWindow > 1120) {
				var itemRes = $('.item-haft-res');
				var itemResBanner = $('.item-banner-res');
				var heightItem = $( window ).height()/2;
					console.log( "height win:" + $( window ).height());
				itemRes.css('height',heightItem);
				heightBannerAuto = (itemBanner.width()-widhtLeftMenu)*heightBannerDefault/widthBannerDefault;
			}
			else if(widthWindow > 991) {
				var itemRes = $('.item-haft-res');
				var itemResBanner = $('.item-banner-res');
				var itemBannerFullHeight = $('.swiper-banner-container-full');
				var heightWindow = $(window).height();
					console.log( "height win:" + $( window  ).height());
				var heightItem = heightWindow/2;
				var heightBannerFullHeight = widthWindow/2 + 50;
				itemRes.css('height',heightItem);
				itemBannerFullHeight.css('height',heightWindow -47);
			}
			else {
				var widthWindow = $(document).width();
				var itemRes = $('.item-haft-res');
				var itemBannerFullHeight = $('.swiper-banner-container-full');
				var itemResBanner = $('.item-banner-res');
				var heightRes = (itemRes.width()*height / width).toString() + 'px';
				var heightBannerFullHeight = (widthWindow/2 + 50).toString() + 'px';
				console.log( "height win:" + $( window ).height());
				itemRes.css('height',heightRes);
				itemBannerFullHeight.css('height',heightBannerFullHeight);
			}
			itemBanner.css('height',heightBannerAuto);
		}

	}

	function aud_play_pause() {
	  var myAudio = document.getElementById("myAudio");
	  if (myAudio.paused) {
	    myAudio.play();
	  } else {
	    myAudio.pause();
	  }
	}
	//popup video
	$('.btn-play-video').click(function( e) {
		e.preventDefault();
		var url = $(this).attr('href');
		$('.bs-example-modal-video').modal('show');
  	$('.bs-example-modal-video iframe').attr('src', url);
	});
	$('.btn-close-popup-video').click(function( e) {
			$('.bs-example-modal-video').modal('hidden');
  	$('.bs-example-modal-video iframe').removeAttr('src');
	});
	//popup photo albumn
	$('.item-link-thumb').click(function(e){
		e.preventDefault();
		dataContainer = "#"+$(this).attr('data-container');
		$('.bs-example-modal-album').modal('show');
		itemPhotoPopupActive = $('.bs-example-modal-album').find(dataContainer).first();
		if(itemPhotoPopupActive) {
			$(itemPhotoPopupActive).css("display", "block");
		}
	});
	$('.btn-close-popup-photo').click(function(){
		if(itemPhotoPopupActive) {
			$(itemPhotoPopupActive).css("display", "none");
		}
	});
			$(window).bind("load", function() {
				//  ScaleSliderf();
				 autoHeightItemRes(650,390);
			});
			$( window ).resize(function() {
			  autoHeightItemRes(650,390);
				autoLogoResponsive();
				truncateTextRes();
			});
			$(window).bind("resize", autoHeightItemRes(650,390));
			// $(window).bind("orientationchange", ScaleSlider);
			// $('#btn-view-popup').on('loaded.bs.modal', function () {
			//   ScaleSlider();
			// });
					//responsive code end
					//event window scroll
		function autoLogoResponsive() {
			var mainTitleMobile = $(window).width();
			if(mainTitleMobile < 1121) {
				var numScrollTop = $(window).scrollTop();
				if(numScrollTop > 46) {
					$('.logo-title-content').addClass("tilte-logo-res");
				} else {
					 $('.logo-title-content').removeClass("tilte-logo-res" )
				}
			}
		}
		$(window).scroll(function() {
			autoLogoResponsive();
		});
});	//ready
//windowload
//end windowload
