// aos
AOS.init();
// aos end
// // Open Sub Menu
// $('.drp_btn').click(function () {
//     $(this).siblings('.sub_menu').slideToggle();
// })

// // Preloader JS

// function preloader_fade() {
//     $("#preloader").fadeOut('slow');
// }

// $(document).ready(function () {
//     window.setTimeout("preloader_fade();", 500); //call fade in .5 seconds
// })

// navbar scrolling
$(window).scroll(function () {
	var scrolling = $(window).scrollTop();

	if (scrolling > 20) {
		$(".menu_bg").addClass("bg")
	} else {
		$(".menu_bg").removeClass("bg")
	};
});
// navbar scrolling
$('.owl-carousel').owlCarousel({
	rtl: false,
	loop: true,
	margin: 10,
	nav: true,
	autoplay: true,
	smartSpeed: 1000,
	responsive: {
		0: {
			items: 1
		},
		// 600:{
		//     items:3
		// },
		// 1000:{
		//     items:5
		// }
	}
})
// Back to top button
$(window).scroll(function () {
	if ($(this).scrollTop() > 80) {
		$('.back2top').fadeIn('slow');
	} else {
		$('.back2top').fadeOut('slow');
	};
});
// Back to top button
// 991px navbar toogler
$('.menu_btn').click(function () {
	$('.navbar .menu_bar').toggleClass('active')
});
$('.menu_btn').click(function () {
	$('.menu_btn i').toggleClass("xxxx");
});
// 991px navbar toogler