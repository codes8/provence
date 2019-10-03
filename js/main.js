/** ========================================================= */
// file   : common.js
// wirter : Ryu
// date   : 20190901
/* ========================================================== */
/*----------------------------------------------------------- */

/*----------------------------------------------------------- */
/* ready s -------------------------------------------------- */
$(document).ready(function(){
	//메인배너
	var swiper_main_banner = new Swiper('.swiper-container.swiper_main_banner', {
		slidesPerView:1,
		loop: true,
		autoHeight:true,
		//spaceBetween: 30,
		centeredSlides: true,
		autoplay: {
		  delay: 3500,
		  disableOnInteraction: false,
		},
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		  
		},
		navigation: {
		  nextEl: '.swiper-mb-button-next',
		  prevEl: '.swiper-mb-button-prev',
		},
	});

	//포스트리스트(이벤트)
	var swiper_post = new Swiper('.swiper-container.swiper_post_list', {
		slidesPerView: 3,
		spaceBetween: 30,
		centeredSlides: false,
		loop: false,
		speed: 500,
		autoHeight:true,
		grabCursor: true,
		autoplay: {
		  delay: 2500,
		  autoplayDisableOnInteraction: true,
		},
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
		navigation: {
		  nextEl: '.swiper-post-button-next',
		  prevEl: '.swiper-post-button-prev',
		},
		breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      }
    }
		//parallax: true
	});

	/* main_popup */
	$(document).on('click','.btn_mpp_close',function(){
		$(this).parents('.main_popup').addClass('dN');
		var idx_pop_langth=0;
		$('.main_popup_wrap .main_popup').each(function(idx,item){
			if($(this).is(':visible')){
				idx_pop_langth++;;
			}
		});
		if(idx_pop_langth < 1){
			$('.main_popup_wrap').addClass('dN');
		}
	});
});	
/* ready e -------------------------------------------------- */
/*----------------------------------------------------------- */