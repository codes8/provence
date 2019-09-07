// var $delivery_progress = false;//바로구매로 수령 매장 팝업 호출 여부
;(function ( $ ) {
	$(document).ready(function() {

	});

	$(window).load(function(){

		////////////////////////////////레이어 팝업(우->좌로 슬라이딩) 시작 180627 수정
		//레이어 팝업 열기 시작
		var win_scroll_pos = 0;
		var pop_open_cnt = 0;//팝업 open 횟수
		$(document).on('click', '.btn_popup_trigger', function(){
			pop_open_cnt++;
			// console.log(pop_open_cnt);
			win_scroll_pos = $(window).scrollTop();

			var $popup = $(this).attr('href');
			
			$('body').addClass('hidden');

			if (pop_open_cnt > 1) {//180710 추가
				$($popup).css({ zIndex: $($popup).css('z-index')*1 + pop_open_cnt });
			}

			$($popup).addClass('visible');

			if($(this).hasClass('delay') == false){ // 시간 delay있는 팝업 delay 클래스 추가 후 별도 제어
				setTimeout(function(){
					$($popup).addClass('active')
				}, 0);
				setTimeout(function(){
					// $('body').removeClass('hidden');
					// $('.hsome_allContents').css({ transform: 'translateY(' + (win_scroll_pos*-1) + 'px' });
					// $('.hsome_allContents').css({ top: win_scroll_pos*-1 });
					// $('.hsome_allContents').addClass('disabled');	

					$($popup).addClass('activated');
				}, 400);
			} // 180709 if문 추가
			
      return false;
		});
		//레이어 팝업 열기 끝

		//레이어 팝업 닫기 시작
		$('.hsome_layer_popup .pop-comm-cls').click(function(){
			pop_open_cnt--;
			// console.log('닫기 눌렀음 : ' + pop_open_cnt);
			var $popup = $(this).closest('.hsome_layer_popup');
			$popup.removeClass('activated');
			$popup.removeClass('active');

			if (pop_open_cnt <= 0) {
				$(window).scrollTop(win_scroll_pos);
				$('body').removeClass('hidden');
			}
			
			setTimeout(function(){
				$popup.removeClass('visible');
			}, 400);
			return false;
		});
		//레이어 팝업 닫기 끝
		////////////////////////////////레이어 팝업(우->좌로 슬라이딩) 끝 180627 수정

		////////////////////////////////레이어 팝업(아래->위로 슬라이딩) 시작
		//레이어 팝업 열기 시작
		$(document).on('click', '.btn_popup_btot', function(){
			var $popup = $(this).attr('href');

			$($popup).addClass('visible');
			setTimeout(function(){
				$($popup).addClass('active');	
			}, 0);

			$('.hs_pro_view_layer').fadeIn('fast');
			
      		return false;
		});
		//레이어 팝업 열기 끝

		//레이어 팝업 닫기 시작
		$('.hsome_layer_popup02 .pop-comm-cls').click(function(){
			$('.hsome_layer_popup02').removeClass('active');
			$('.hsome_layer_popup02').addClass('disabled');
			$('.hs_pro_view_layer').fadeOut('fast');

			setTimeout(function(){
				$('.hsome_layer_popup02').removeClass('disabled');
			}, 400);

			return false;

		});
		//레이어 팝업 닫기 끝
		////////////////////////////////레이어 팝업(아래->위로 슬라이딩) 끝

		// 180627추가 레이어 팝업 닫기 시작
		$('.hsome_layer_popup03 .pop-comm-cls').click(function(){
			$('.hsome_layer_popup03').removeClass('active');
			$('.hsome_layer_popup03').addClass('disabled');
			$('.hs_pro_view_layer').fadeOut('fast');

			setTimeout(function(){
				$('.hsome_layer_popup03').removeClass('disabled');
			}, 400);

			return false;

		});
		// 180627추가 레이어 팝업 닫기 끝
		
	});

})( jQuery );