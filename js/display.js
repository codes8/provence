/** ========================================================= */
// file   : display.js
// wirter : Ryu
// date   : 20190901
/* ========================================================== */
/*----------------------------------------------------------- */
//본문바로가기
function skipMenuAct(){
	$('.skip_menu a').on('focus',function(){
		$(this).parents('ul').addClass('on');
	});
	$('.skip_menu').on('focusout', function(){
		$(this).removeClass('on');
	});
	$('.skip_menu a').on('click', function(){
		$(this).parents('ul').removeClass('on');
	});
}

//LNB
function lnbAct(){
	var temp_scr=$('body').is('.scr_mo'); //PC, MO 분기
	if(!temp_scr){ //PC일때(scr_pc)
		$('.scr_pc .lnb_dep1 > li > a').focus(function(){ //lnb_dep1 focus
			if(!$(this).parent().hasClass('lnb_sitemap')){
				hideSitemap();
				$('.lnb_dep1 > li').removeClass('on');
				objSlideHide($('scr_pc .lnb_dep2'));
				objSlideShow($(this).parent().find('.lnb_dep2'));
				$(this).parent().addClass('on');
			}
		});
		$('.scr_pc .lnb_dep1 > li > a').hover(function(){ //lnb_dep1 hover
			if(!$(this).parent().hasClass('lnb_sitemap')){
				hideSitemap();
				$('.lnb_dep1 > li').removeClass('on');
				objSlideHide($('.lnb_dep2'));
				objSlideShow($(this).parent().find('.lnb_dep2'));
				$(this).parent().addClass('on');
			}
		});
		function hideSitemap(){
			objSlideHide($('.lnb_dep2_sitemap'));
			objSlideHide($('.lnb_dep2_stm_item'));
			$(".lnb_sitemap").removeClass('act');
		}
		$('.scr_pc .lnb_dep1 > li.lnb_sitemap > a').on('click', function(){ //lnb_dep2_sitemap click
			$('.lnb_dep1 > li').removeClass('on');
				objSlideHide($('.lnb_dep2'));
				if($(this).parent().find('.lnb_dep2_sitemap').css('display') == "none"){
					objSlideShow($(this).parent().find('.lnb_dep2_sitemap'));
					objSlideShow($(this).parent().find('.lnb_dep2_stm_item'));
				}else{
					objSlideHide($(this).parent().find('.lnb_dep2_sitemap'));
					objSlideHide($(this).parent().find('.lnb_dep2_stm_item'));
				}
				//$(this).parent().find('.lnb_dep2_sitemap:not(:animated)').slideToggle();
				$(this).parent().toggleClass('act');
		});
		$('.scr_pc .btn_sitemap_cls').on('click', function(){ //sitemap close
			hideSitemap();
		});
		
		$('.scr_pc .lnb_dep2 li > a').hover(function(){ //lnb_dep2 hover
			$('.lnb_dep1 > li').removeClass('on');
			$(this).parents('ul').parent().addClass('on');
		});
		
		function hideLnb(){ //lnb 숨기기
			$('.lnb_dep1 > li').removeClass('on');
			objSlideHide($('.lnb_dep2'));
		}
		$('.container').mouseover(function(){
			//hideLnb();
		});
		$('.lng_menu a').mouseover(function(){
			hideLnb();
		});
		$('.sns_menu a').mouseover(function(){
			hideLnb();
		});
		$('.logo_top').mouseover(function(){
			hideLnb();
		});
		$('.contents').mouseover(function(){
			hideLnb();
		});
	}else if(temp_scr){ //MO일때(scr_mo)
		$('.mo_menu_btn .menu_icon').click(function(){
			objSlideHide($('.lnb_dep2'));
			$(this).toggleClass('active');
			$(this).parents('.mo_menu_btn').toggleClass('on');
			$('#nav').toggleClass('on');
			//PC일때 sns_menu를 복사
			var temp_html=$('.sns_menu').html();
			$('.sns_menu_dummy').html(temp_html);
		});
		var clk_cur_idx, clk_pre_idx;
		$('.scr_mo .lnb_dep1 > li > a').on('click',function(){ //lnb_dep1 hover
			var clk_cur_idx=$(this).parent().index();
			if(clk_cur_idx == clk_pre_idx){
				$(this).parent().find('.lnb_dep2').stop().slideToggle('fast');
			}else{
				objSlideHide($('.lnb_dep2'));
				$('.lnb_dep1 > li.on').removeClass('on');
				$(this).parent().find('.lnb_dep2').stop().slideDown('fast');
			}
			$(this).parent().toggleClass('on');
			clk_pre_idx = clk_cur_idx;
		});
	}
}

//breadcrumb 버튼 비활성화
function breadcrumbUnAct(){
	$('.brd_select').stop().slideUp('fast');
	$('.leef').parents('li').removeClass('on');
}

//버튼활성화
function btnAct(){
	skipMenuAct(); //본문바로가기
	lnbAct(); //LNB
	//top버튼
	$('a.top_btn').on('click',function(){
		$('html, body').scrollTop(0);
	});
	//서브페이지 breadcrumb
	$('.breadcrumb_wrap').on('click', '.leef', function(){
		$(this).parent().toggleClass('on');
		$(this).parent().find('.brd_select').stop().slideToggle('fast');
	});
	//서브페이지 Breadcrumb
	$('.brd_select').on('click', 'a', function(){
		breadcrumbUnAct();
		var temp_txt=$(this).find('span').html();
		$(this).parents('li').find('> a > span').html(temp_txt);
	});
	//주차타워 탭
	$('body').on('click','.tab_list a',function(){
		objHide($('.tab_cont'));
		$('.tab_list li').removeClass('on');
		$(this).parents('li').addClass('on');
		objShow($('.'+$(this).attr('target-tab-cont')))
		console.log($(this).attr('target-tab-cont'))
	});
	//sns리뷰
	$('.sns_list a').hover(function(){
		$(this).find('.sns_item').toggleClass('on');
	});
	//리스트공유
	$('body').on('click','.li_share .more',function(){
		if($(this).parents('.li_share').hasClass('on')){
			$(this).parents('.li_share').removeClass('on');
		}else{
			$('.li_share.on').removeClass('on');
			$(this).parents('.li_share').addClass('on');
		}
	});
	$('body').on('click','.li_share .share_btns',function(){
		$('.li_share.on').removeClass('on');
	});
	//faq
	$('body').on('click','.slide_list .sl_q a',function(){
		$(this).parents('.sl_item').find('.sl_a').stop().slideToggle('fast');
	});
}
/* ready s ---------------------------------------------------- */
$(document).ready(function(){
	checkScreen(); //화면사이즈 체크
	btnAct(); //버튼활성화
	/* resize s --------------------------------------------------- */
	$(window).bind('resize', function(e){ //window resize
		window.resizeEvt;
		$(window).resize(function(){
			clearTimeout(window.resizeEvt);
			window.resizeEvt = setTimeout(function(){
				checkScreen(); //화면사이즈 체크
				//code to do after window is resized
				//alert($(window).width()+"____"+screen.availWidth)
				//alert($('html').width());
			}, 150);
		});
	});
	$(window).on("orientationchange",function(){ //화면 회전 이벤트
		checkScreen(); //화면사이즈 체크
		/*
		if(window.orientation == 0){ // Portrait
			alert(window.orientation);
		}else{ // Landscape
			alert(window.orientation);
		}
		*/
	});
	/* resize e --------------------------------------------------- */
	/* scroll s --------------------------------------------------- */
	var lastScrollPosition;
	var scrollPosition = 0;
	var lastScrollPosition_fixbtn;
	var scrollPosition_fixbtn = 0;
	$(window).scroll(function(){
		//chkEffwInview(); //effw 위치 확인
		//fixed 버튼 show & hide
		/*
		scrollPosition_fixbtn = $(this).scrollTop();
		if ((scrollPosition_fixbtn < lastScrollPosition_fixbtn) || (scrollPosition_fixbtn <= 0)) {
			if (scrollPosition_fixbtn >= ($(document).height() - $(window).height())){
				$('.btm_fixed_wrap').removeClass('on');
			} else {
				$('.btm_fixed_wrap').addClass('on');
			}
		} else {
			$('.btm_fixed_wrap').removeClass('on');
		}
		lastScrollPosition_fixbtn = scrollPosition_fixbtn;
		*/
		
		scrollPosition = $(this).scrollTop();
		if ((scrollPosition < lastScrollPosition) || (scrollPosition <= 0)) {
			if (scrollPosition >= ($(document).height() - $(window).height())){
				$('a.top_btn').removeClass('upper');
			} else {
				$('a.top_btn').addClass('upper');
			}
		} else {
			$('a.top_btn').removeClass('upper');
		}
		if (scrollPosition > 0) {
			$('a.top_btn').addClass('active');
		} else {
			$('a.top_btn').removeClass('active');
		}
		lastScrollPosition = scrollPosition;
	});
	//scroll e --------------------------------------------------- */
});	
/* ready e ---------------------------------------------------- */
