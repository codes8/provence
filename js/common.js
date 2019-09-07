/** ========================================================= */
// file   : common.js
// wirter : Ryu
// date   : 20190901
/* ========================================================== */
/*----------------------------------------------------------- */
//common funtion
function checkScreen() { //screen size 체크
	/*
	var win_w = $(window).width();
	var win_w = window.innerWidth;
	
	if (win_w <= 1024 && win_w >= 769) {
		$("meta[name=viewport]").attr("content", "width=device-width, initial-scale=0.6, maximum-scale=1.0, minimum-scale=0.6, user-scalable=yes, target-densitydpi=medium-dpi");
	} else if (win_w <= 768 && win_w >= 451) {
		$("meta[name=viewport]").attr("content", "width=device-width, initial-scale=0.5, maximum-scale=1.0, minimum-scale=0.5, user-scalable=yes, target-densitydpi=medium-dpi");
	} else if (win_w <= 450) {
		$("meta[name=viewport]").attr("content", "width=device-width, initial-scale=0.3, maximum-scale=1.0, minimum-scale=0.3, user-scalable=yes, target-densitydpi=medium-dpi");
	} else {
		$("meta[name=viewport]").attr("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi");
	}
	*/
	if($(window).width()<$(window).height()){ //세로
		console.log("세로모드 : "+$(window).width()+" / "+screen.availHeight);
		$('.tagMotionBox').css('height','100%')
	}else if($(window).width()>$(window).height()){ //가로
		console.log("가로모드 : "+$(window).width()+" / "+$(window).height());
		$('.tagMotionBox').css('height','initial')
	}
	//css media query 기준과 동일하게 
	if($(window).width() < 768 ){
		$("body").addClass("scr_mo");
	  $("body").removeClass("scr_pc");
	}else{
		$("body").removeClass("scr_mo");
	  $("body").addClass("scr_pc");
	}
}
function checkDevice(){
	var UserAgent = navigator.userAgent;
	if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null){ //PC가 아닐때
	  $("body").addClass("dvc_mo");
	  $("body").removeClass("dvc_pc");
	}else{ //PC일때	 
		$("body").removeClass("dvc_mo");
	  $("body").addClass("dvc_pc");
	}
}

function objShow(obj){ //obj 보이기
	obj.css('display','block');
}
function objHide(obj){ //obj 숨기기
	obj.css('display','none');
}
function objSlideShow(obj){ //obj slide 보이기
	obj.stop().slideDown(200);
}
function objSlideHide(obj){ //obj slide 숨기기
	obj.stop().slideUp(200);
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
function newWin(url,nw,nh){ //새창열기
	cw=screen.availWidth;
	ch=screen.availHeight;
	ml=(cw-nw)/2;
	mt=(ch-nh)/2;
	optionT='width='+nw+',height='+nh+',top='+mt+',left='+mt+',toolbar=no,location=no,status=no,menubar=no,resizable=auto,scrollbars=yes';
	window.open(url,'TaginTag',optionT);
	return false;
}
function closeWin(){ //창닫기
	window.close();
	return false;
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
/*----------------------------------------------------------- */
$(document).ready(function(){
});	