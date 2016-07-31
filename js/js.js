$(window).scroll(function(){
	
	var scrollval=$("body").scrollTop()+$("html").scrollTop();//获得网页的滚动条垂直距离，$("body").scrollTop()支持IE,$("html").scrollTop()支持非ie
	//var positionTop=$(".s-one-middle1").position().top;
	//var navTop=$(".nav").offset().top;//offset()到窗口的距离
	//console.log(scrollval,navTop);
	//var pm=$(window).height();//获得屏幕的高度
	//var navObj=$(".nav").height();//获得导航的高度
	//var centerObj=(pm-navObj)/2;//屏幕的高度-导航的高度就等于剩下的高度除以2让导航居中
	//console.log(pm,navObj,centerObj);
	if(scrollval>=380)
	{
		$(".nav").css({"position":"fixed","top":"350px"});
		
	}
	else
	{
		$(".nav").css({"position":"absolute","top":"780px"});
	}
	
});
