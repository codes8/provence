/**
 * Common Methods
 */
;(function ( $ ) {
	$(document).ready(function() {
		/*tab*/
		if($('.hsome_main').hasClass('global') == false){ // 180713 if문 추가
			$('.main_cont_tab .bar').css({
				'left' : $('.main_cont_tab li.on a').position().left ,
				'width' : $('.main_cont_tab li.on').width()
			});
		};
		
		$(document).on('click', '.main_cont_tab li a', function(){
			bodyScroll = $('html, body').scrollTop();
			tabOff = $('.main_cont_tab').offset().top;
			thispos = $(this).position().left;
			thisWid = $(this).parent('li').width();

			$('html, body').stop().animate({ scrollTop : tabOff } , 200);
			
			function barani(del){$('.main_cont_tab .bar').delay(del).stop().animate({ 
				'left' : thispos ,
				'width' : thisWid
				} , 200);
			};

			barani();

			if(bodyScroll != tabOff){
				barani(200);
			}else{
				barani(0);
			};

			/*슬라이드 재실행*/
			swiperTab0101.update();
			swiperTab0102.update();
			swiperTab0103.update();
			swiperTab0104.update();
			swiperTab0201.update();
			swiperTab0202.update();
			swiperTab0203.update();
			swiperTab0204.update();
			swiperTab0205.update();
			swiperTab0206.update();
			swiperTab0207.update();
		});

		/*slide_visual*/
		var swiper01 = new Swiper('.swiper01.swiper-container', {
			loop: true,
			autoplay: {
				delay: 4000,
		        autoplayDisableOnInteraction: true, // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
		      },
		      speed: 500,
					pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
		        type: 'progressbar'
		      },
		      parallax: true
		});

		var trans ;
		function titleHide(slideTit){
			if(trans < - 150){ $(slideTit).prev('.slide_tit').animate( {opacity : 1} , 10 )
			}else if(trans < - 110){ $(slideTit).prev('.slide_tit').animate( {opacity : 0} , 10 )
			}else if(trans < - 90){ $(slideTit).prev('.slide_tit').animate( {opacity : .2} , 10 )
			}else if(trans < - 70){ $(slideTit).prev('.slide_tit').animate( {opacity : .4} , 10 )
			}else if(trans < - 50){ $(slideTit).prev('.slide_tit').animate( {opacity : .6} , 10 )
			}else if(trans < - 30){ $(slideTit).prev('.slide_tit').animate( {opacity : .8} , 10 )
			}else{
				$('.slide_tit').animate( {opacity : 1} , 10 )	
			};

			// swiperTab0101 , swiperTab0104 , swiperTab0202 , swiperTab0203 , swiperTab0204 , swiperTab0207
		};

		/*tab1 slide*/
		var swiperTab0101 = new Swiper('.swiper_tab0101.swiper-container', {
			slidesPerView:'auto',
			freeMode: true ,
			spaceBetween:10
		});

		swiperTab0101.on('sliderMove , transitionEnd', function() { 
			trans = swiperTab0101.translate;
			titleHide('.swiper_tab0101'); 
		});

		var swiperTab0102 = new Swiper('.swiper_tab0102.swiper-container', {
			slidesPerView:'auto',
			spaceBetween:10
		});

		var swiperTab0103 = new Swiper('.swiper_tab0103.swiper-container', {
			slidesPerView:'auto',
			spaceBetween:10
		});

		var swiperTab0104 = new Swiper('.swiper_tab0104.swiper-container', {
			slidesPerView:'auto',
			freeMode: true ,
			spaceBetween:10,
		});

		swiperTab0104.on('sliderMove , transitionEnd', function() { 
			trans = swiperTab0104.translate;
			titleHide('.swiper_tab0104'); 
		});

		/*tab2 slide*/
		var swiperTab0201 = new Swiper('.swiper_tab0201.swiper-container', {
			slidesPerView:'auto',
			spaceBetween:5,
			freeMode:true
		});

		var swiperTab0202 = new Swiper('.swiper_tab0202.swiper-container', {
			slidesPerView:'auto',
			freeMode: true ,
			spaceBetween:10
		});

		swiperTab0202.on('sliderMove , transitionEnd', function() { 
			trans = swiperTab0202.translate;
			titleHide('.swiper_tab0202'); 
		});

		var swiperTab0203 = new Swiper('.swiper_tab0203.swiper-container', {
			slidesPerView:'auto',
			freeMode: true ,
			spaceBetween:10
		});

		swiperTab0203.on('sliderMove , transitionEnd', function() { 
			trans = swiperTab0203.translate;
			titleHide('.swiper_tab0203'); 
		});

		var swiperTab0204 = new Swiper('.swiper_tab0204.swiper-container', {
			slidesPerView:'auto',
			freeMode: true ,
			spaceBetween:10
		});

		swiperTab0204.on('sliderMove , transitionEnd', function() { 
			trans = swiperTab0204.translate;
			titleHide('.swiper_tab0204'); 
		});

		var swiperTab0205 = new Swiper('.swiper_tab0205.swiper-container', {
			slidesPerView:'auto',
			spaceBetween:10
		});

		var swiperTab0206 = new Swiper('.swiper_tab0206.swiper-container', {
			slidesPerView:'auto',
			spaceBetween:10
		});

		var swiperTab0207 = new Swiper('.swiper_tab0207.swiper-container', {
			slidesPerView:'auto',
			freeMode: true ,
			spaceBetween:10,
		});

		swiperTab0207.on('sliderMove , transitionEnd', function() { 
			trans = swiperTab0207.translate;
			titleHide('.swiper_tab0207'); 
		});
	});
})( jQuery );
