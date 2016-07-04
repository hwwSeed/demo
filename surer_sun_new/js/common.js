$(function(){
	
//	导航
	$("#nav li").hover(
		function(){
			var name = $(this).attr("name");
			$(".level2_nav").removeClass("ttd");		
			$(".level2_nav[name="+name+"]").removeClass("dtt").addClass("ttd");	
		}
	)
	
	$(".level2_nav .liSec a").hover(
		function(){
			$(".level2_nav .liThi").hide();
			var name = $(this).attr("name");		
			$(".level2_nav li[name="+name+"]").show();
		}
	)
	
	$(".level2_nav").hover(function(){},
	function(){
		$(this).removeClass("ttd").addClass("dtt");
	})

	$(".up").click(function(){
		$(this).parent(".level2_nav").removeClass("ttd").addClass("dtt");
	})
	
//	朦层
	// $("#mc").height($(window).height());
	$("#mc").click(function(){
		$(this).hide();
		$('body').css("overflow-y","auto");
		$("#sideNav").removeClass("rtl").addClass("ltr");
	})

//	显示侧导航
	$("#nav_mobile").click(function(){
		$("#mc").show();
		$("#sideNav").addClass("rtl");
		$('body').css("overflow-y","hidden");
	})

//  关闭侧导航
	$("#close").click(function(){
		$("#sideNav").removeClass("rtl").addClass("ltr");
		$("#mc").hide();
		$('body').css("overflow-y","auto");
	})

	if($(window).width()<=768){
		$("#undertake img").attr("src","img/undertakeMobile.png");
	}

	// 关闭弹出轮播
	$(".popHeader").click(function(){
		$(".lunboPop").hide();
		$("#mc").hide();
	})
	
	$("#mc").click(function(){
		$(".lunboPop").hide();
		$("#mc").hide();
	})

	// 弹出轮播
	$(".appreciation").click(function(){
		var name = $(this).attr("name");		
		$("#mc").show();
		$("#"+name).show().css("margin-top",-$("#"+name).height()/2);	
	})
})

$(window).resize(function(){
	if($(window).width()<=768){
		$("#undertake img").attr("src","img/undertakeMobile.png");
	}else{
		$("#undertake img").attr("src","img/undertake.png");
	}
})
