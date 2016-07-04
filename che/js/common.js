/**
 * Created by hww on 2016/6/13.
 */
/*创建项目模态框的调用*/
$(function () {
    /*箭头导航*/
    // 可视窗口的高度
    var windowH = $(window).height();


    /*单选框选择状态切换*/
    $(".method-item .radio_icon").click(function () {
        var targetNode = $(this).parent().siblings().children(".radio_icon");
        if ($(this).hasClass('ck')) {
            targetNode.removeClass("ck");
        } else {
            $(this).addClass("ck");
            targetNode.removeClass("ck");
        }
    })
    /*设置页面倒计时，时间到页面跳转*/
    var second = 5; // 倒计时时间//几秒
    $(".timer").html(second);//初期值设置
    function changeTime() {
        if (second == 0) {
            window.location.href = "https://www.baidu.com/";   // 到时间后的操作
        }
        if (second > 0) {
            second = second - 1;
            curnum = second;
            $(".timer").html(curnum);
        }
    }

    $(".confirm_btn").click(function (e) {
        e.preventDefault();
        $("#pay_success_modal").css("display", "block");
        $(".modal-wrapper").addClass("fadeInDown");
        setTimeout(changeTime(), 1000);
        /*
         $("#pay_fail_modal").css("display", "block");
         $(".modal-wrapper").addClass("fadeInDown");
         $("#wx_code_modal").css("display", "block");
         $(".modal-wrapper").addClass("fadeInDown");*/
    })
    /*朦层出现*/
    $(".img_inner .img_desc").on({
        mouseenter: function () {
            $(this).siblings(".detail_desc").animate({
                "bottom": "58px"
            }, 400);
        },
        mouseleave: function () {
            $(this).siblings(".detail_desc").animate({
                "bottom": "-100px"
            }, 400);
        }
    });

    $('.star').each(function(index, el) {
        var data=parseInt($(this).attr('data-num'));
        var width=$(this).width();
        $(this).find('i').animate({
            "width":width*data/100+"px"
        }, 1000);
    });
    /*报告气泡提示框*/
    $(".major_accident .danger_icon").bind({
        mouseenter:function(){
            $(this).siblings(".tip_bubble").fadeIn(300);
        },
        mouseout:function(){
            $(this).siblings(".tip_bubble").fadeOut(300);
        }
    })


})
