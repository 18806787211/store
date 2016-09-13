$(window).scroll(function(){
	
	var scrollval=$("body").scrollTop()+$("html").scrollTop();
	if(scrollval>=380)
	{
		$(".nav").css({"position":"fixed","top":"350px"});
		
	}
	else
	{
		$(".nav").css({"position":"absolute","top":"780px"});
	}
	
});
