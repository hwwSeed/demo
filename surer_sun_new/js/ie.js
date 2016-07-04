$(function(){
	
//	导航
	$("#nav li").hover(
		function(){
			var name = $(this).attr("name");
			$(".level2_nav").hide();		
			$(".level2_nav[name="+name+"]").show();	
		}
	)
	
	$(".level2_nav").hover(function(){},
	function(){
		$(this).hide();
	})

	$(".up").click(function(){
		$(this).parent(".level2_nav").hide();
	})

})

