			$(function(){
				$("#mc").height($(window).height());
			  	$("#share").bind("touchstart",function(){
					//显示朦层
				  	$("#mc").show();
			  	});
			  	$("#mc").bind("touchstart",function(){
					//显示朦层
				  	$("#mc").hide();
			  	});
			})
			wx.ready(function () {
				// 分享给朋友
				wx.onMenuShareAppMessage({
				    title: "史上颜值最高的儿童智能手表即将问世！你来吗？", // 分享标题
				    desc: '笑了儿童智能手表新品发布会，诚邀您共同见证非凡时刻', // 分享描述
				    link: 'http://wx.surer.cn/invitation/', // 分享链接
				    imgUrl: 'http://wx.surer.cn/invitation/images/share.png', // 分享图标
				    type: '', // 分享类型,music、video或link，不填默认为link
				    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
				    success: function () { 
				        // 用户确认分享后执行的回调函数
//				        $("#mc").hide();
				    },
				    cancel: function () { 
				        // 用户取消分享后执行的回调函数
				    }
				});
				
				//分享到朋友圈
				wx.onMenuShareTimeline({
				    title: '史上颜值最高的儿童智能手表即将问世！你来吗？', // 分享标题
				    desc: '笑了儿童智能手表新品发布会，诚邀您共同见证非凡时刻', // 分享描述
				    link: 'http://wx.surer.cn/invitation/', // 分享链接
				    imgUrl: 'http://wx.surer.cn/invitation/images/share.png', // 分享图标
				    success: function () { 
				        // 用户确认分享后执行的回调函数
				        $("#mc").hide();
				    },
				    cancel: function () { 
				        // 用户取消分享后执行的回调函数
				    }
				});
			
				function decryptCode(code, callback) {
				    $.getJSON('/jssdk/decrypt_code.php?code=' + encodeURI(code), function (res) {
				      if (res.errcode == 0) {
				        codes.push(res.code);
				      }
    				});
  				}
			});