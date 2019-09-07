/**
 * assist Methods (Oder,Mypage,Membership,Customer)
 */

//common s -------------------------------------------------- */
function objShow(obj){ //obj 보이기
	obj.css('display','block');
}
function objHide(obj){ //obj 숨기기
	obj.css('display','none');
}
function objSlideShow(obj){ //obj slide 보이기
	obj.stop().slideDown(300);
}
function objSlideHide(obj){ //obj slide 숨기기
	obj.stop().slideUp(300);
}
function holdBodyToggle(){ //body scroll 막기 토글
	$('body').toggleClass('hold_body');
}
function holdBodyShow(){ //body scroll 막기
	$('body').addClass('hold_body');
}
function holdBodyHide(){ //body scroll 막기해제
	$('body').removeClass('hold_body');
}
function goBack(n){ //뒤로가기
	if(n==undefined){
		n=-1;
	}
	window.history.go(n);	
	return false;
}
function setSelectbox(){ //selectbox http://rwdb.kr/selectjquery_plugin/ 참조
	$('select.sodsb').selectOrDie();
}
function headerBorderReset(){ //header border 초기화
	$('.hsome_header').css('border-bottom','none');
}
function inNumber(obj){ //숫자만 입력
  obj.val(obj.val().replace(/[^0-9]/g,''));
}
function maxLengthCheck(obj){ //글자수제한
  if (obj.val().length > obj.attr('maxLength')) {
    obj.val(obj.val().slice(0, obj.attr('maxLength')));
  }    
}
function setComma(num){ // 숫자콤마
	return String(num).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,'); // 정규식을 통한 콤마 넣기
}
function add_file_name(obj){ // 첨부파일 파일명만 보이기 함수
  var name_input=obj.parents('.hs_input_file_wrap').find('.file_name');
  var fPath=obj.val();
  var fValue=fPath.split("\\");
  var fName=fValue[fValue.length-1]; //파일명
  name_input.val(fName);    
  if(name_input.val() != ''){ // 파일 추가 되면 삭제 버튼 show
    obj.parents('.hs_input_file_wrap').find('.del').show();
  }
}  

function addPlcToTxtArea(){ // textarea placeholder 추가 함수(고객센터 1:1문의 수정 시 추가)
	// defaultValue 는 페이지에 하드 코딩
	var $txtArea = $('.txtArea');
	$txtArea.css('color','#aaa');
	$txtArea.focus(function(e) {
		e.target.value = '';      
		e.target.style.color='#222';
		if (e.target.value == e.target.defaultValue){
			e.target.value = '';
		}
	});
	$txtArea.blur(function(e) {
		if (e.target.value != ''){        
			e.target.style.color='#222';
		} else {
			e.target.value = e.target.defaultValue;
			e.target.style.color='#aaa';
		}
	});
}
function lastBoxActive(){ //last_box 클래스 삽입(.hsome_contents 내에서 .df_box가 마지막일때만 사용)
	var tempLastBoxIdx=Number($('.df_box').length)-1;
	// console.log("tempLastBoxIdx : "+ tempLastBoxIdx)
	$('.hsome_contents .df_box').eq(tempLastBoxIdx).addClass('last_box');
}
function setDatePick(){ //calender set
	$(".hs_datepicker").datepicker({
		dateFormat:'yy.mm.dd',
		// showAnimation:'slide',
		monthNames: ['1 월','2 월','3 월','4 월','5 월','6 월','7 월','8 월','9 월','10 월','11 월','12 월'], // 개월 텍스트 설정
    monthNamesShort: ['1 월','2 월','3 월','4 월','5 월','6 월','7 월','8 월','9 월','10 월','11 월','12 월'], // 개월 텍스트 설정
    dayNames: ['월요일','화요일','수요일','목요일','금요일','토요일','일요일'], // 요일 텍스트 설정
    dayNamesShort: ['월','화','수','목','금','토','일'], // 요일 텍스트 축약 설정&nbsp;   
    dayNamesMin: ['월','화','수','목','금','토','일'], // 요일 최소 축약 텍스트 설정
		showOtherMonths:false,
		selectOtherMonths:true,
		changeYear:true,
		changeMonth:true,
		showButtonPanel:false
	});
}
function currentQuickMenuOn(menu_class){ //현재 퀵메뉴 활성화
	$('.hsome_quickMenu li').removeClass('active');
	$('.hsome_quickMenu').find('.'+menu_class).addClass('active');
}
function chkEffwInview(){ //스크롤 위치 확인
	var win = $(window);
	var win_w = win.width();
	var win_h = win.height();
	var win_top = win.scrollTop();
	var fadeEff = $('.effw');
	var win_bottom = (win_top + win_h);

	$.each(fadeEff, function(){
		var elem = $(this);
		var elem_h = elem.outerHeight();
		var elem_top = elem.offset().top;
		var elem_bottom = (elem_top + elem_h);

		if ((elem_bottom >= win_top) && (elem_top <= win_bottom)){
			elem.addClass('in_view');
		}
		else{
			elem.removeClass('in_view');
		}
	});
}
function chkPromotionInview(){ //스크롤 위치 확인(사용안함:20180718)
	var win = $(window);
	var win_w = win.width();
	var win_h = win.height();
	var win_top = win.scrollTop();
	var chckObj = $('.promotion_wrap');
	var win_bottom = (win_top + win_h);

	$.each(chckObj, function(){
		var elem = $(this);
		var elem_h = elem.outerHeight();
		var elem_top = elem.offset().top;
		var elem_bottom = (elem_top + elem_h);

		if ((elem_bottom >= win_top) && (elem_top <= win_bottom)){
			// objHide($('.btn_hs_promotion'));
			// elem.addClass('in_view');
			$('.btn_hs_promotion').addClass('upper');
		}
		else{
			// objShow($('.btn_hs_promotion'));
			// elem.removeClass('in_view');
			$('.btn_hs_promotion').removeClass('upper');
		}
	});
}
function showLoadingLp(){
	objShow($('.loading_layer_wrap'));
	holdBodyShow();
}
function hideLoadingLp(){
	objHide($('.loading_layer_wrap'));
	holdBodyHide();
}
function scaling(obj){
	obj.addClass('scaling');
		setTimeout(function(){
			obj.removeClass('scaling');
		}, 400);
}
function valchck_shaking(obj){
	$('html, body').stop().animate({
		scrollTop: obj.offset().top - (($(window).height() - obj.outerHeight())/2)
	}, 400, function(){
		setTimeout(function(){
			obj.addClass('shaking');
		}, 300);
	});
	setTimeout(function(){
		obj.removeClass('shaking');
	}, 1520);
}
//common e -------------------------------------------------- */

//레이어팝업관련 s ------------------------------------------ */
var curScrollPosition = 0; //현재 스크롤 위치
var hs_allCon = $('.hsome_allContents'); //all Contents
var layerPopConWrap = $('.hsome_layerpop_contents'); //레이어 팝업 wrap

function getLayerPopup(page_url,depth) { //레이어팝업 URL 불러오기
	$('.hsome_layerpop_contents.lp_'+depth).html('<img src="../../images/common/ico_loader.gif" alt="loading" class="hsome_quickMenu_loader" />');
	jQuery.ajax({
		url: page_url,
		data:'',
		dataType:'',
		type: "get",
		success:function(data){
			// var parser = new DOMParser();
			// var doc = parser.parseFromString(data,"text/html");
			// var elem = $(doc).find('.layerpop_wrap');
			setTimeout(function(){
				$('.hsome_layerpop_contents.lp_'+depth).html(data);
				// $('.hsome_layerpop_contents.lp_'+depth).html(elem);
				$('.hsome_layerpop_contents').on('click', '.btn_lyrpp_close', function(){ //레이어팝업 닫기
					// clsPage(curScrollPosition);
					$(this).parents('.hsome_layerpop_contents').removeClass('active');
					$(this).parents('.hsome_layerpop_contents').removeClass('absolute');
					//$('.hsome_allContents').show();
					hs_allCon.css({ marginTop: curScrollPosition*-1 });
					hs_allCon.removeClass('disabled');
					setTimeout(function(){
						hs_allCon.css({ marginTop: 0 });
						$(window).scrollTop(curScrollPosition);
						$(this).parents('.hsome_layerpop_contents').empty();
					}, 300);
					return false;
				});
			}, 0);
		}
	});
}

function callLayerPopup(targetUrl,depth,style){ //레이어팝업 불러오기
	// console.log(targetUrl+"_"+depth+"_"+style)
	curScrollPosition = $(window).scrollTop();
	var $page_url = targetUrl;
	$('.hsome_layerpop_contents.lp_'+depth).addClass(style); //black 배경 활성화
	$('.hsome_layerpop_contents.lp_'+depth).addClass('active');
	setTimeout(function(){
		getLayerPopup($page_url,depth);
		$('.hsome_layerpop_contents.lp_'+depth).addClass('absolute');
		hs_allCon.addClass('disabled');
	}, 300);
	return false;
}

function lpSizeCheck(obj){
	var screenH=$(window).height();
	var lyrTopH=obj.find('.lyrpp_top').height();
	var lyrMidH=obj.find('.lyrpp_mid').height();
	// console.log("screenH: "+screenH+"/ lyrTopH: "+lyrTopH+"/ lyrMidH: "+lyrMidH);
	if((lyrTopH+lyrMidH) > screenH){
		var tempLyrMidH=screenH-100;
		// console.log("tempLyrMidH: "+tempLyrMidH);
		obj.find('.lyrpp_mid').css('height',tempLyrMidH);
	}
	
}
//레이어팝업관련 e ------------------------------------------ */

//swiper관련 s ---------------------------------------------- */
var trans ;
function swiperActive(obj){ //swiper 활성화 (ex.swiper_recommend_goods)
	var swiperObj = new Swiper('.'+obj+'.swiper-container', {
		slidesPerView:'auto',
		freeMode: true ,
		spaceBetween:5
	});
	swiperObj.on('sliderMove , transitionEnd', function() { 
		// trans = swiperObj.translate;
	});
}

function swiperPageActive(obj){ //swiper 활성화 (ex.swiper_promotion)
	var swiperObj_p = new Swiper('.'+obj+'.swiper-container', {
		loop: true,
		autoplay: {
			delay: 4000,
      autoplayDisableOnInteraction: true, // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
    },
    speed: 500,
    spaceBetween:0,
		pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets'
    },
    parallax: true
	});
}

function swiperCardActive(obj){ //swiper 활성화 (ex.swiper_card_easy_pay )
	var swiperObj_c = new Swiper('.'+obj+'.swiper-container', {
		loop: false,
		slidesPerView:'auto',
		centeredSlides:true,
    speed: 500,
    spaceBetween:20,
		pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'progressbar'
    },
    parallax: true
	});
}

function swiperRPActive(obj){ //swiper 활성화 (ex.swiper_rp_slide )
	var swiperObj_c = new Swiper('.'+obj+'.swiper-container', {
		loop: true,
    slidesPerView: 1, 
    spaceBetween:15
	});
}

function swiperDlvrActive(obj){ //swiper 활성화 (ex.swiper_oclk_delivery_list)
	var swiperObj = new Swiper('.'+obj+'.swiper-container', {
		slidesPerView:'auto',
		freeModeSticky: true,
		slidesOffsetBefore:15,
		slidesOffsetAfter:40,
		spaceBetween:20
	});
}

function uiTabActive(obj,idx){ //swiper 연동 탭이동
	/*
	obj.find('li').removeClass('on');
	obj.find('li').eq(idx).addClass('on');
	obj.parent().find('.tab_cont .cont').removeClass('on');
	obj.parent().find('.tab_cont .cont').eq(idx).addClass('on');
	*/
	obj.find('li').eq(idx).find('a').trigger('click');
}

function swiperPointCardActive(obj){ //swiper 활성화 (ex.swiper_point_slide_wrap )
	var swiperObj_pc = new Swiper('.'+obj+'.swiper-container', {
		loop: false,
		slidesPerView:'auto',
		centeredSlides:true,
    speed: 500,
    spaceBetween:20,
		pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'progressbar'
    },
    parallax: true
	});
	$('body').on('click', '.mp_point_ui_tab.ui_tab li a', function(){  //한섬마일리지,기프트카드 탭 이벤트
		var clickIdx = $('.mp_point_ui_tab.ui_tab li').index($(this).parent());
		swiperObj_pc.slideTo(clickIdx);
	});
	swiperObj_pc.on('slideChangeTransitionEnd', function() { //swiper 이벤트
		uiTabActive($('.'+obj).parent().find('.ui_tab'), swiperObj_pc.activeIndex); //swiper 연동 탭이동
	});
}
//swiper관련 s ---------------------------------------------- */

//주문관련 s ------------------------------------------------ */
function optionEditAreaHide(){ //옵션버튼 클릭 이벤트
	//objSlideHide($('.gl_tgl'));
	// [20180621] 디자인 : 애니메이션 효과 제거
	objHide($('.gl_tgl'));
}

function optionEditAreaShow(obj){ //옵션버튼 클릭 이벤트
	optionEditAreaHide();
	objSlideShow(obj);
}

function optionEditGlCountNum(obj,icr){//수량 변경
	var maxNum=5;
	var crtNum=obj.val();
	switch (icr) {
		case "-":
			if(crtNum > 1){
				crtNum--;	
			}else {
				alert("수량은 1개 이상이여야 합니다.");
			}
			break;
		case "+":
			if(crtNum < maxNum){
				crtNum++;	
			}else {
				alert("재고수량 "+maxNum+"개 이하이여야 합니다.");
			}
			break;
		default:
			console.log("수량을 변경할 수 없습니다.");
	}
	obj.val(crtNum);	
}

function setColorRadio(){ //색상 선택 라디오버튼 활성화
	$('.btn_color_wrap li').each(function(){ // 상품옵션변경 컬러 셋팅
		var clr_var=$(this).find('.gl_color_val').text();
		$(this).find('span').css('background',clr_var);
		$(this).find('span').css('border','1px solid'+clr_var);
		if(clr_var == "#ffffff"){ //컬러가 화이트인 경우
			$(this).find('span').css('border','1px solid #d1d1d1')	
		}
	})
}

function orderBtnOn(){ //주문하기 버튼 show
	objHide($('.pymt_select_first'));
	objShow($('.pymt_order_apply'));
}

function orderBtnOff(){ //주문하기 버튼 hide
	objShow($('.pymt_select_first'));
	objHide($('.pymt_order_apply'));
}

function checkboxCheckExe(obj){ //체크박스 체크유무 체크
	var checkIdx=0;
	$('.'+obj+' > li').each(function(){
			if($(this).find('.check_stl input[type="checkbox"]').is(':checked')){
				checkIdx++;
			}
	});
	if(checkIdx!=0){
		orderBtnOn();
	}else{
		orderBtnOff();
	}
}
function checkBoxCheckActive(obj){ //체크박스 체크유무 활성화
	checkboxCheckExe(obj); // 처음 load 시
	$('.'+obj).on('change', 'li .check_stl input[type="checkbox"]', function(){ // click 이벤트 시
		checkboxCheckExe(obj);
	})	
}
function inputValResetBtnCheck(obj){ //초기화버튼 체크
	if(obj.val()!=""){
		obj.siblings('.btn_input_reset').addClass('btn_input_reset_on');
	}else{
		obj.siblings('.btn_input_reset').removeClass('btn_input_reset_on');
	}
}
function toggleBtnInputApply(obj){ //적용, 취소버튼
	if(obj.hasClass('btn_input_apply')){
		obj.removeClass('btn_input_apply').addClass('btn_input_apply_cancel');
		obj.html('취소');
	}else{
		obj.removeClass('btn_input_apply_cancel').addClass('btn_input_apply');
		obj.html('적용');
	}
}
function pointValCheck(obj){ //포인트 
	if(obj.val()!=''){
		var inputVal=Number(obj.val().replace(/[^0-9]/g,''));
		var inputAllVal=Number(obj.parent().find('.check_stl label span').html().replace(/[^0-9]/g,''));
		if(inputAllVal > inputVal){
			obj.parent().find('.check_stl input').attr('checked',false);
		}else if(inputAllVal == inputVal){
			obj.val(setComma(inputAllVal) + " "+obj.attr('data-unit'));
			obj.parent().find('.check_stl input').attr('checked',true);
		}else if(inputAllVal < inputVal){
			obj.val(setComma(inputAllVal) + " "+obj.attr('data-unit'));
			obj.parent().find('.check_stl input').attr('checked',true);
		}
	}else{
		obj.parent().find('.check_stl input').attr('checked',false);
		obj.parent().find('.btnstl2').removeClass('btn_input_apply_cancel').addClass('btn_input_apply');
		obj.parent().find('.btnstl2').html('적용');
	}
	inputValResetBtnCheck(obj);
}
//주문관련 e ------------------------------------------------ */

//약관체크관련 s -------------------------------------------- */
function checkboxCheck(obj){ //체크박스 체크
	obj.prop("checked",true);
	// obj.parent().siblings('.txt_box_wrap').removeClass('hidden');
}
function checkboxUncheck(obj){ //체크박스 언체크
	obj.prop("checked",false);
	// obj.parent().siblings('.txt_box_wrap').addClass('hidden');
}

function checkboxRoof_all(obj){ //체크박스 확인
	var checkAllBln=0;
	var checkMustBln=0;
	var checkSubMustBln1=0;
	var checkSubMustBln2=0;
	var chk_all_agree=$('input[type="checkbox"].chk_all_agree')
	var chk_must_agree=$('input[type="checkbox"].chk_must_agree')
	var chk_sub_must_agree1=$('input[type="checkbox"].chk_sub_must_agree_1')
	var chk_sub_must_agree2=$('input[type="checkbox"].chk_sub_must_agree_2')
	obj.find('.check_stl input[type="checkbox"]').each(function(){
		if(!($(this).is(':checked'))){ //체크되지 않은 체크박스
			checkAllBln++;
			if($(this).parent().hasClass('must')){
				checkMustBln++;
			}
			if($(this).parent().hasClass('sub_must1')){
				checkSubMustBln1++;
			}
			if($(this).parent().hasClass('sub_must2')){
				checkSubMustBln2++;
			}
		}
	});
	/*
	console.log("checkAllBln : "+checkAllBln);
	console.log("checkMustBln : "+checkMustBln);
	console.log("checkSubMustBln1 : "+checkSubMustBln1);
	console.log("checkSubMustBln2 : "+checkSubMustBln2);
	*/
	if(checkAllBln==0){ //uncheckbox 갯수 : 0
		checkboxCheck(chk_all_agree);
		checkboxCheck(chk_must_agree);
	}else if(checkAllBln!=0 && checkMustBln==0){ 
		checkboxUncheck(chk_all_agree);
		checkboxCheck(chk_must_agree);
		if(checkSubMustBln1==0 && checkSubMustBln2==0){
			if(obj.hasClass('certify_policy_wrap')){
				checkboxCheck(chk_all_agree);
			}			
			checkboxCheck(chk_sub_must_agree1);
			checkboxCheck(chk_sub_must_agree2);
		}else if(checkSubMustBln1==0 && checkSubMustBln2!=0){
			checkboxCheck(chk_sub_must_agree1);
			checkboxUncheck(chk_sub_must_agree2);
		}else if(checkSubMustBln1!=0 && checkSubMustBln2==0){
			checkboxUncheck(chk_sub_must_agree1);
			checkboxCheck(chk_sub_must_agree2);
		}else if(checkSubMustBln1!=0 && checkSubMustBln2!=0){
			 checkboxUncheck(chk_sub_must_agree1);
			 checkboxUncheck(chk_sub_must_agree2);
		}
	}else if(checkAllBln!=0 && checkMustBln!=0){ 
		checkboxUncheck(chk_all_agree);
		checkboxUncheck(chk_must_agree);
	}
}
//약관체크관련 e -------------------------------------------- */

//PG사관련 s ------------------------------------------------ */
function vkeypadPositionScrl(){
	var screenH=$(window).height();
	var vkpadH=$('.vkeypad_box').height();
	var lyrTopH=$('.lyrpp_top').height();
	var lyrMidH=$('.lyrpp_mid').height();
	var mrgbtm=Math.abs(screenH - (lyrTopH + lyrMidH + vkpadH));
	/*
	console.log(lyrTopH +"_"+ lyrMidH +"_"+ vkpadH)
	console.log((lyrTopH +lyrMidH + vkpadH))
	console.log(screenH)
	*/
	if((lyrTopH + lyrMidH + vkpadH) > screenH){
		$('.lyrpp_mid').css('margin-bottom',vkpadH+'px')
	}else{
		$('.lyrpp_mid').css('margin-bottom','0')
	}
}
//PG사관련 e ------------------------------------------------ */

//마이페이지관련 s ------------------------------------------ */
function slideListArrowChck(obj){ //slide list
	obj.find('li').each(function(){
  	if($(this).find('.q_hidden').height() <= 1){
  		$(this).find('.q_ttl').addClass('open');
  	}else{
  		$(this).find('.q_ttl').removeClass('open');
  	}
  })
}
function runChartStart(){ //등급 모션 시작
  chkEffwInview();
  var tempW = $('.lv_anchor').attr('data-value');
  var nidx= Math.floor(tempW / 33.33);
  runChartEnd(nidx);
  $('.lv_anchor').addClass('lv_anchor_'+String(nidx+1));
  $('.progressbar').css('width',tempW+'%');
   // setTimeout(function(){runChartEnd(nidx);}, 5000);
}
function runChartEnd(n){ //등급 모션 시작
  var $curStatus = $('.run_chart > li').eq(n);
  $('.run_chart > li').eq(n).addClass('on');
  $curStatus.prevAll().addClass('past');
  $curStatus.nextAll().addClass('future');
  $curStatus.parent('ul').next().find('li').eq(n).addClass('on');
}
//마이페이지관련 e ------------------------------------------ */

//버튼활성화 s ---------------------------------------------- */
function btnActive(){
	// common s ----------------------------------------------- */
	if($('body').find('.btm_fixed_wrap').length > 0){ // 하단 고정 버튼이 있을시 
		$('.hsome_allContents').addClass('fixed_btn_on'); //본문 하단 여백 추가
		$('a.hsome_topBtn').css('bottom','60px'); // 탑버튼 위치 조정
	}
	// common e ----------------------------------------------- */
	
	// header s ----------------------------------------------- */
	$('.h_prev').on('click', function(){ //뒤로가기
		goBack();
	});
	// header e ----------------------------------------------- */
	
	//input관련 s ------------------------------------------------ */
	$('body').on('keyup', 'input.only_number', function(){ // input 숫자만 입력
		inNumber($(this));
	});
	$('body').on('keyup', 'input[maxlength]', function(){ // 글자수 제한
		maxLengthCheck($(this));
	});
	$('body').on('change', '.attach_file_wrap .file_input input[type="file"]', function(){ //첨부파일 파일명으로 업로드 
		add_file_name($(this));
	}); 
	$('body').on('click', '.attach_file_wrap .del', function(){ //첨부파일 삭제
    $(this).prev('input').val('');
    $(this).hide();
    return false;
  });
  /*
  $('body').on('click', '.hs_datepicker', function(){ //datepicker : 사용안함
  	$(this).datepicker("show");
  });
  */
	//input관련 e ------------------------------------------------ */
	
	//탭관련 s ------------------------------------------------ */
	/*
	$('.tab_head').on('click', 'li a', function(){ //탭 관련
		$(this).parent('li').siblings('li').removeClass('on');
		$(this).parent('li').addClass('on');
		activeCont = $(this).attr('href');
		selectCont = $('.tab_cont .cont'+activeCont+'')
		selectCont.siblings('.cont').removeClass('on');
		$('.tab_cont '+activeCont+'').addClass('on');
		return false;
	});
	*/
	//탭관련 e ------------------------------------------------ */
	
	//divpopup관련 s ------------------------------------------ */
	$('body').on('click', '.btn_popup', function(e) { // divpopup 호출
		e.preventDefault();
		var poptarget=$(this).attr('data-poptarget');
		if(poptarget==undefined){
			// alert("팝업을 찾을 수 없습니다.");
		}else{
			$('.divpop_wrap.'+poptarget).bPopup({
				follow: [false, false], 
				escClose:false,
				modalClose:false,
				opacity:0.7,
				positionStyle: 'fixed',
				onClose: function(){holdBodyHide();}
			});
			holdBodyShow();
		}
		return false;
	});
	//divpopup관련 e ------------------------------------------ */
	
	//툴팁관련 s ---------------------------------------------- */
	$('.btn_tooltip').on('click', function(e){ // 툴팁 열기
		e.preventDefault();
		var tooltipTarget=$(this).attr('data-tooltip-target');
		if(tooltipTarget==undefined){
			alert("팝업을 찾을 수 없습니다.");
		}else{
			var tempHtml=$('.'+tooltipTarget).parent().html();
			$(this).parents().siblings('.tooltip_contens').empty().html(tempHtml);
		}
		objSlideShow($(this).parents().siblings('.tooltip_contens').find('.tooltip_wrap'));
		return false;
	});
	$('.tooltip_contens').on('click', function(){ // 툴팁 닫기
		objSlideHide($(this).find('.tooltip_wrap'));
		return false;
	});
	$('.tooltip_contens').on('click', '.btn_tltp_close', function(){ // 툴팁 닫기
		objSlideHide($(this).parents('.tooltip_wrap'));
		return false;
	});
	//툴팁관련 e ---------------------------------------------- */
	
	//layerpopup관련 s ---------------------------------------- */
	$('body').on('click', '.btn_layerpopup_call', function(){ //layer_popup 호출
		var targetUrl=$(this).attr('href');
		var targetDepth=$(this).attr('data-layerpop-depth');
		var targetStyle=$(this).attr('data-layerpop-style');
		callLayerPopup(targetUrl,targetDepth,targetStyle);
		return false;
	});
	$('body').on('click', '.zipcode_list_wrap a', function(){ //우편번호찾기 : 리스트클릭
		var tempDetail=$(this).parents('.lyrpp_mid').find('.detail_addrs_wrap');
		var tempZipcode=$(this).find('.zpcl_code').html();
		var tempAddrs=$(this).find('.zpcl_adrs_name .zpcl_con').html();
		objHide($(this).parents('.search_box_wrap'));
		objShow(tempDetail);
		tempDetail.find('.detail_addrs_1').val("["+tempZipcode+"] "+tempAddrs);
		tempDetail.find('.detail_addrs_2').focus();
	});
	//layerpopup관련 e ---------------------------------------- */
	
	//약관체크관련 s ------------------------------------------ */
	$('.chk_agree_wrap.view_more').on('change' ,'.check_stl input[type="checkbox"]', function(){	//개별 동의 항목 토글
		if(!$(this).hasClass('chk_sub_must_agree')){
			 checkboxRoof_all($('.chk_agree_wrap.view_more'));
		}		
	});
	$('.chk_agree_wrap').on('change' ,'input[type="checkbox"].chk_all_agree', function(){	//전체 동의 항목 토글
		var all_checkbox=$(this).parents('.chk_agree_wrap').siblings('.view_more').find('.check_stl input[type="checkbox"]');
		if($(this).is(':checked')){
			checkboxCheck(all_checkbox);
		}else{
			checkboxUncheck(all_checkbox);
		}
		checkboxRoof_all($('.chk_agree_wrap.view_more'));
	});
	$('.chk_agree_wrap').on('change' ,'input[type="checkbox"].chk_must_agree', function(){	//필수 동의 항목 토글
		var must_checkbox=$(this).parents('.chk_agree_wrap').siblings('.view_more').find('.check_stl.must input[type="checkbox"]');
		var optional_checkbox=$(this).parents('.chk_agree_wrap').siblings('.view_more').find('.check_stl.optional input[type="checkbox"]');
		if($(this).is(':checked')){
			checkboxCheck(must_checkbox);
			checkboxUncheck(optional_checkbox);
		}else{
			checkboxUncheck(must_checkbox);
			checkboxUncheck(optional_checkbox);
		}
		checkboxRoof_all($('.chk_agree_wrap.view_more'));
	});
	$('.chk_agree_wrap').on('change' ,'input[type="checkbox"].chk_sub_must_agree', function(){	//하위 필수 동의 항목 토글
		var sub_must_checkbox=$(this).parents('.chk_agree_sub_wrap').find('.check_stl.sub_must input[type="checkbox"]');
		var sub_optional_checkbox=$(this).parents('.chk_agree_sub_wrap').find('.check_stl.sub_optional input[type="checkbox"]');
		if($(this).is(':checked')){
			checkboxCheck(sub_must_checkbox);
			checkboxUncheck(sub_optional_checkbox);
		}else{
			checkboxUncheck(sub_must_checkbox);
			checkboxUncheck(sub_optional_checkbox);
		}
		checkboxRoof_all($('.chk_agree_wrap.view_more'));
	});
	$('.chk_agree_wrap').on('click', '.btn_policy_show', function(){ //이용약관동의 > 약관보기
		var targetPolicy=$(this).parents('.chk_agree_wrap').parent().find('.chk_agree_wrap.view_more');
		targetPolicy.find('.txt_box_wrap').removeClass('hidden');
	});
	$('.chk_agree_wrap').on('click', '.btn_policy_show2', function(){ //본인인증 > 약관보기
		var targetPolicy=$(this).parents('.chk_agree_wrap').parent().find('.chk_agree_wrap.view_more');
		$('.certify_policy_wrap').stop().slideToggle(300);
		if($('.certify_policy_wrap').height()>1){
			$(this).html("약관보기");
			$(this).parents('.certify_chk_wrap').removeClass('on');
		}else{
			$(this).html("약관접기");
			$(this).parents('.certify_chk_wrap').addClass('on');
			// $('.certify_policy_wrap').css('display','inline-block');
		}
	});
	$('.chk_agree_wrap.view_more').on('click', '.agree_more_btn', function(){ //본인인증 > 약관내용보기
		var tmpbar = $(this).find('.slide_border_box_icon .bar_horizontal');
		if (tmpbar.hasClass('plus')) {
			tmpbar.removeClass('plus')	
			tmpbar.addClass('minus')
		} else {
			tmpbar.removeClass('minus')	
			tmpbar.addClass('plus')
		}
		var tempTextBox=$(this).parent().siblings('.txt_box_wrap');
		if($(this).hasClass('active')){
			// $(this).parent().siblings('.txt_box_wrap').removeClass('hidden');
			objSlideHide(tempTextBox);
		}else{
			// $(this).parent().siblings('.txt_box_wrap').addClass('hidden');
			objSlideShow(tempTextBox);
		}
		$(this).toggleClass('active');
	});
	//약관체크관련 e ------------------------------------------ */
	
	//주문관련 s ---------------------------------------------- */
	$('body').on('click', '.btn_hs_promotion', function(){ //promotion 플루팅 버튼
		$(this).addClass('upper');
		var targetPst=$('#promotion_wrap').offset().top;
		$('html, body').stop().animate({scrollTop:targetPst - (($(window).height() - $('#promotion_wrap').outerHeight())/2)},500);
	});
	$('body').on('click', '.goods_list_wrap .gl_top_btns a', function(){ //상품 리스트 상단 버튼
		$(this).toggleClass('icon_btn_on');
	});
	$('body').on('click', '.goods_list_wrap .btn_option_edit', function(){ //옵션변경 영역 활성화
		var targetObj=$(this).parents('.gl_item').find('.gl_tgl.gl_tgl_option');
		if(targetObj.css('display')!="none"){
			$(this).removeClass('on');
			objSlideHide(targetObj);
		}else{
			$(this).addClass('on');
			optionEditAreaShow(targetObj);
		}
	});
	$('body').on('click', '.goods_list_wrap .gl_count_edit .btn_minus', function(){ //옵션 수량 - 변경
		optionEditGlCountNum($(this).parent().find('.gl_count_num input[type="text"]'),"-");
		scaling($(this)); //scale interaction
	});
	$('body').on('click', '.goods_list_wrap .gl_count_edit .btn_plus', function(){ //옵션 수량 + 변경
		optionEditGlCountNum($(this).parent().find('.gl_count_num input[type="text"]'),"+");
		scaling($(this)); //scale interaction
	});
	$('body').on('click', '.goods_list_wrap .gl_tgl_btns .btn_cancel', function(){ //옵션변경 영역 비활성화
		optionEditAreaHide();
	});
	$('body').on('click', '.goods_list_wrap .btn_store_edit', function(){ //옵션변경 영역 활성화
		optionEditAreaShow($(this).parents('.gl_item').find('.gl_tgl.gl_tgl_store'));
	});
	$('body').on('click', '.df_box_slide .df_box_tit', function(){ //df_box slide 클릭 이벤트
		$(this).parent().find('.df_box_slide_con').stop().slideToggle(300);
		$(this).parent().toggleClass('df_box_slide_on');
	});
	$('body').on('click', '.df_box_slide_v2 .df_box_slide_v2_anchor', function(){ //df_box slide_v2 클릭 이벤트
		$(this).parent().find('.df_box_slide_con').stop().slideToggle(300);
		$(this).parent().toggleClass('df_box_slide_on');
	});
	
	$('body').on('click', '.select_list_wrap .slcted_item', function(){ //select_list_wrap slide 클릭이벤트
		$(this).parent().find('.slct_list_con').stop().slideToggle(300);
		$(this).parent().toggleClass('select_list_wrap_on');
	});
	$('body').on('change', '.select_list_wrap .radio_stl input[type="radio"]', function(){ //select_list_wrap slide 클릭이벤트(배송지정보)
		if($(this).is(':checked')){
			var tempSlted=$(this).parent().find('.slct_con').html();
		}
		$(this).parents('.select_list_wrap').find('.slcted_item .slct_con').html(tempSlted);
		$(this).parents('.select_list_wrap').removeClass('select_list_wrap_on');
		objSlideHide($(this).parents('.select_list_wrap').find('.slct_list_con'));
	});
	$('body').on('click', '.select_list_dlvr_msg .slct_list_con .slct_list_item', function(){ //select_list_wrap slide 클릭이벤트(배송메세지 > 직접입력)
		if($(this).hasClass('slct_list_item_self')){
			objSlideShow($('.slct_list_item_self_input'));
		}else {
			objSlideHide($('.slct_list_item_self_input'));
		}
	});
	$('body').on('blur', '.mpg_list_wrap .mpg_input input.set_comma', function(){ // 포인트사용관련 : blur
		if($(this).val()!=""){
			$(this).val(setComma($(this).val()) + " "+$(this).attr('data-unit'));
		}
		inputValResetBtnCheck($(this));
		pointValCheck($(this));
	});
	$('body').on('focus', '.mpg_list_wrap .mpg_input input.set_comma', function(){ // 포인트사용관련 : focus
		inNumber($(this));
		inputValResetBtnCheck($(this));
	});
	$('body').on('change', '.mpg_list_wrap .mpg_input .check_stl input', function(){ // 포인트사용관련 : 전액사용
		var tempVal=$(this).siblings('label').find('span').html();
		var tempInput=$(this).parents('.mpg_input').find('input.set_comma');
		if($(this).is(':checked')){
			tempInput.val(setComma(tempVal) + " "+tempInput.attr('data-unit'));
			inputValResetBtnCheck(tempInput);
		}else{
			tempInput.val("");
			inputValResetBtnCheck(tempInput);
		}
	});
	$('body').on('click', '.mpg_list_wrap .mpg_input .btn_input_reset', function(){ // 포인트사용관련 : 초기화
		$(this).parent().find('.set_comma').val('');
		pointValCheck($(this).parent().find('.set_comma'));
	});	
	$('body').on('click', '.mpg_list_wrap .mpg_input .btn_input_apply', function(){ // 포인트사용관련 : 적용버튼
		toggleBtnInputApply($(this));
	});
	$('body').on('click', '.mpg_list_wrap .mpg_input .btn_input_apply_cancel', function(){ // 포인트사용관련 : 취소버튼
		toggleBtnInputApply($(this));
		$(this).parent().find('.set_comma').val('');
		pointValCheck($(this).parent().find('.set_comma'));
	});
	$('body').on('change', '.coupon_list_wrap .check_stl input[type="checkbox"]', function(){ // 쿠폰적용관련 : 체크박스 하나만 유지
		var tempIdx=$('.coupon_list_wrap li').index($(this).parents('li'));
		$('.coupon_list_wrap li').each(function(i){
			if(i!=tempIdx){
				$(this).find('.check_stl input[type="checkbox"]').attr("checked",false);
			}
		});
	});
	$('body').on('blur', '.coupon_insert input[type="text"]', function(){ // 쿠폰적용관련 : blur
		inputValResetBtnCheck($(this));
	});
	$('body').on('click', '.coupon_insert .btn_input_reset', function(){ // 쿠폰적용관련 : 초기화
		$(this).parent().find('input[type="text"]').val('');
		inputValResetBtnCheck($(this).parent().find('input[type="text"]'));
		$(this).parent().find('.btnstl2').removeClass('btn_input_apply_cancel').addClass('btn_input_apply');
		$(this).parent().find('.btnstl2').html('적용');
	});
	$('body').on('click', '.coupon_insert .btn_input_apply', function(){ // 쿠폰적용관련 : 적용버튼
		toggleBtnInputApply($(this));
	});
	$('body').on('click', '.coupon_insert .btn_input_apply_cancel', function(){ // 쿠폰적용관련 : 취소버튼
		toggleBtnInputApply($(this));
	});
	$('body').on('click', '.general_pay_list > li a', function(){ //일반결제 탭 클릭
		var tempVal=$(this).attr('data-g-pay-kind');
		$('.general_pay_list li').removeClass('on');
		$('.general_pay_desc').removeClass('on');
		$(this).parent().addClass('on');
		$('.general_pay_desc.gpd_con_'+tempVal).addClass('on');
	});
	$('body').on('click', '.receive_store_info_wrap .btn_receive_date_edit', function(){ // 수령일변경 활성화
		objSlideHide($('.receive_store_info_tgl'));
		$(this).parents('.df_box').siblings('.tgl_receive_date_edit').stop().slideToggle(300);
	});
	$('body').on('click', '.receive_store_info_tgl .btn_cancel', function(){ // 수령일변경 비활성화
		objSlideHide($(this).parents('.receive_store_info_tgl'));
	});
	$('body').on('click', '.receive_store_info_wrap .location_btn', function(){ // 수령매장 지도 활성화
		objSlideHide($('.receive_store_info_tgl'));
		$(this).parents('.df_box').siblings('.tgl_receive_store_map').stop().slideToggle(300);
	});
	//주문관련 e ---------------------------------------------- */
	
	//멤버쉽관련 s -------------------------------------------- */
	$('body').on('change', '.input_group input', function(){ // input 텍스트 값 존재 여부 체크
		var str = $(this);
		if(str.val().length > 0){
			str.addClass('input_active');
		}else {
			str.removeClass('input_active');
		}
	});
	$('body').on('change', '.nonmember_wrap .input_group > div', function(){ // 주문번호 uppercase
		$(this).find('input.login_ord_num').addClass('txt_upr');
	});
	$('body').on('click', '.hsmember_wrap .find_opt.certi > li', function(){ //본인인증 방법 선택
		$(this).siblings().removeClass('on');
		$(this).addClass('on');
	});
	$('body').on('click', '.idpw_find_result .ui_tab li', function(){  //아이디 찾기 결과 페이지에서 통합회원찾기 영역 숨김
		var $curTab = $(this).find('a').attr('href'),
				$resId = '#tab_01',
				$findLogin = $('.login_find_area');					
		// console.log($curTab != $resId);	
		if($curTab != $resId){
			$findLogin.show();
		} else{
			$findLogin.hide();
		}
	});
	//멤버쉽관련 e -------------------------------------------- */
	
	//고객센터관련 s -------------------------------------------- */
	$('body').on('click', '.cs_list_hd', function(){// list 내용 토글
    $(this).next('.cs_list_ct').slideToggle(300);
  });
	$('body').on('click', '.search_result_list .del', function(){ //상품 검색 결과 목록 삭제
    $(this).parents('.search_res_prod').remove();
    return false;
	});
	$('body').on('click', '.cs_online_mbr_wrap .btn_more', function(){
      $(this).parents('.df_box').find('.tgl_box').toggleClass('on');
      $(this).toggleClass('on');
    });
  //고객센터관련 e -------------------------------------------- */
  
  //마이페이지관련 s ------------------------------------------ */
  $('body').on('click', '.time_line_wrap .ntfc_item_slide', function(){ //알림 클릭
  	if($(this).hasClass('on')){
  		objSlideHide($(this).find('.ntfc_txt_detail_con'));
  	}else{
  		objSlideShow($(this).find('.ntfc_txt_detail_con'));
  	}
  	$(this).toggleClass('on')
  });
  $('body').on('click', '.btn_more_action', function(){ //주문상태 변경 버튼
  	$(this).parents('.mp_order_dlvr_list_wrap').find('.more_action_ul_wrap').hide();
  	$(this).next('.more_action_ul_wrap').show();
  });
  $('body').on('click', '.more_action_ul_wrap .btn_more_action_ul_close', function(){ //주문상태 변경 레이어팝업 닫기
  	$(this).parents('.more_action_ul_wrap').hide();
  });
  $('body').on('click', '.slide_border_box .sbb_tit', function(){ //slide_border_box 클릭이벤트
  	var tmpbar = $(this).find('.slide_border_box_icon .bar_horizontal');
		if (tmpbar.hasClass('plus')) {
			tmpbar.removeClass('plus')	
			tmpbar.addClass('minus')
		} else {
			tmpbar.removeClass('minus')	
			tmpbar.addClass('plus')
		}
  	$(this).parents('.slide_border_box').toggleClass('slide_border_box_on');
  	$(this).next('.sbb_slide_con').slideToggle(300);

  });
  var $sla_cur_index, $sla_pre_index;
  $('body').on('click','.slide_list_arrow_wrap .qna_l_list li > a', function(){ //slide_list_arrow style (ex. 1:1문의, 상품문의)
    $sla_cur_index = $(this).parent().index();
    if ($sla_cur_index == $sla_pre_index) {
      $(this).next().stop(false, true).slideToggle('fast');
      $('.qna_l_list li.on').toggleClass('on');
    } else {
      $('.qna_l_list li .q_hidden').stop(false, true).slideUp('fast');
      $('.qna_l_list li.on').removeClass('on');
      $('.qna_l_list li').eq($sla_cur_index).find('.q_hidden').stop(false, true).slideDown('fast');
      $('.qna_l_list li').eq($sla_cur_index).addClass('on');
    }
    $sla_pre_index = $sla_cur_index;
    slideListArrowChck($(this).parents('.qna_l_list'));
    return false;
  });
  $('body').on('click', '.grid_4 li > a', function(e){ // 기간 조건검색시 날짜선택 박스 show/hide
  	$(this).parents('ul').find('li').removeClass('on');
  	$(this).parent().addClass('on');
    if(e.target.className != 'sort_date'){
      objSlideHide($(this).parents('ul').next('.sort_date_input_wrap'));
    } else{          
      objSlideShow($(this).parents('ul').next('.sort_date_input_wrap'));
    }        
  })
	$('body').on('click', '.select_list_back_reason.slct_depth_1 .slct_list_con .slct_list_item', function(){ //반품사유 depth1 관련
			objSlideShow($('.select_list_back_reason.slct_depth_2'));
			if($(this).hasClass('slct_list_item_backprice') && $(this).find('input').is(':checked')){
				objSlideShow($('.select_list_back_price'));
			}else {
				objSlideHide($('.select_list_back_price'));
			}
	});
	$('body').on('click', '.select_list_back_reason.slct_depth_2 .slct_list_con .slct_list_item', function(){ //반품사유 depth2 관련
			if($(this).hasClass('slct_list_item_etc') && $(this).find('input').is(':checked')){
				objSlideShow($('.slct_list_item_self_input'));
			}else {
				objSlideHide($('.slct_list_item_self_input'));
			}
	});
	$('body').on('click', '.benefit_list > li > a', function(){ //회원등급 슬라이드 리스트
    if($(this).parent('li').hasClass('on')){
    	objSlideHide($(this).parent('li').find('.bf_txt'));
    	$(this).parent('li').removeClass('on');
    }else{
    	objSlideShow($(this).parent('li').find('.bf_txt'));
    	$(this).parent('li').addClass('on');
    }    
  });
  $('body').on('click', '.my_size_wrap .my_size_set', function(){ //나의 사이즈 설정 토글
    if($(this).parent('.my_size_wrap').hasClass('on')){
    	objSlideHide($(this).parent('.my_size_wrap').find('.hs_form_list'));
    	objSlideHide($(this).parent('.my_size_wrap').find('.btn_wrap'));
    }else{
    	objSlideShow($(this).parent('.my_size_wrap').find('.hs_form_list'));
    	objSlideShow($(this).parent('.my_size_wrap').find('.btn_wrap'));
    }
    $(this).parent('.my_size_wrap').toggleClass('on');
  });
  $('body').on('click', '.review_con_wrap', function(){ //상품평 펼쳐보기
  	if($(this).hasClass('on')){
  		objSlideHide($(this).find('.review'));
  		objSlideShow($(this).find('.review_thumb'));
  	}else{
  		objHide($('.review_con_wrap.on .review'));
	  	objShow($('.review_con_wrap.on .review_thumb'));
	  	$('.review_con_wrap.on').removeClass('on');
	  	objHide($(this).find('.review_thumb'));
	  	objSlideShow($(this).find('.review'));
  	}
  	$(this).toggleClass('on');
  });
  //마이페이지관련 s ------------------------------------------ */
}
//버튼활성화 e ---------------------------------------------- */

//ready s --------------------------------------------------- */
;(function ( $ ) {
	$(document).ready(function() {
		setSelectbox(); //셀렉트박스 플러그인
		btnActive(); //버튼 활성화
	});
})( jQuery );
//ready e --------------------------------------------------- */

//scroll s --------------------------------------------------- */

var lastScrollPosition_fixbtn;
var scrollPosition_fixbtn = 0;
$(window).scroll(function(){
	
	chkEffwInview(); //effw 위치 확인

	//fixed 버튼 show & hide
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
});
//scroll s --------------------------------------------------- */