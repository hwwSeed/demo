$(function () {
//			section0动画效果

    $('.section0_text').addClass("zoomIn");
    $(".up").removeClass("up_bg");
    $('.section_birds').addClass("fadeInRight");
    setTimeout(function () {
        $(".section0_child").addClass("fadeInRight");
    }, 1000)
    $("#section0_info").addClass("zoomIn");

    $("#dowebok").fullpage({

        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11'],
        // 垂直方向是否循环滑动
        "continuousVertical": true,
        // 滚动速度
        "scrollingSpeed": 200,
        // // 滚动到某一屏后的回调函数
        afterLoad: function (anchorLink, index) {
            if (index == 1 || index == 10) {
                $(".up").removeClass("up_bg");
            } else {
                $(".up").addClass("up_bg");
            }
            if (index == 1) {

                $('.section0_text').addClass("zoomIn");
                $('.section_birds').addClass("fadeInRight");
                setTimeout(function () {
                    $(".section0_child").addClass("fadeInRight");
                }, 1000)
                $("#section0_info").addClass("zoomIn");


            }
            if (index == 2) {

                $(".section1_img1").addClass("fadeInLeft");
                setTimeout(function () {
                    $('#section1_img2').addClass("zoomIn");
                }, 1000)
                setTimeout(function () {
                    $('#section1_img3').addClass("zoomIn");
                }, 1500)
                setTimeout(function () {
                    $('#section1_img4').addClass("zoomIn");
                }, 2000)


            }
            if (index == 3) {
                $('.section2 .inner').addClass("flipInY");
                $('#section2_img2').addClass("fadeInUp");
                $('.section2 .section1_img1').addClass("fadeInDown");
                $("#imgItem1").animate({opacity: "1"}, 1000);
                setTimeout(function () {
                    $("#imgItem2").animate({opacity: "1"}, 1000);
                }, 500)
                setTimeout(function () {
                    $("#imgItem3").animate({opacity: "1"}, 1000);
                }, 1000)
                setTimeout(function () {
                    $("#imgItem4").animate({opacity: "1"}, 1000);
                }, 1500)
                setTimeout(function () {
                    $("#imgItem5").animate({opacity: "1"}, 1000);
                }, 2000)
                setTimeout(function () {
                    $("#imgItem0").animate({opacity: "1"}, 1000);
                }, 2500)
                setTimeout(function () {
                    $(".Magnify_text").animate({opacity: "1"}, 1000);
                }, 3000)


            }
            if (index == 4) {
                $('.section3 .inner').addClass("zoomIn");
                $('#section3_img2').addClass("fadeInUp");
                setTimeout(function () {
                    $('.section3 .section1_img3').addClass("fadeInLeft");
                }, 900)
                setTimeout(function () {
                    $('.section3 .inner_text p').addClass("bounceIn");
                }, 900)


            }
            if (index == 5) {
                $('.orange').addClass("fadeInLeft");
                $('.blue').addClass("fadeInRight");

                $('.section4 .inner').addClass("bounceIn");
                $('.section4 .section1_img1').addClass("fadeInDown");

                /**/
                $("#section4_panel").animate({opacity: "1"}, 1000);
                setTimeout(function () {
                    $("#section4_img1").animate({opacity: "1"}, 1000);
                }, 500)
                setTimeout(function () {
                    $("#section4_img2").animate({opacity: "1"}, 1000);
                }, 1000)


            }
            if (index == 6) {
                $('.section5 .inner').addClass("flipInY");
                $('.section5 .section1_img1').addClass("fadeInDown");


                $('#section6_img1').addClass("fadeInDown");
                $('#section6_img2').addClass("fadeInLeft");
                $('#section6_img3').addClass("fadeInRight");
                $('#section6_img4').addClass("fadeInUp");
                $('#section6_img5').addClass("fadeInUp");
            }
            if (index == 7) {
                $(".section6_top").addClass("fadeInDown");
                $('#right1').addClass("fadeInRight");
                setTimeout(function () {
                    $('#left1').addClass("fadeInLeft");
                }, 300)
                setTimeout(function () {
                    $('#right2').addClass("fadeInRight");
                }, 600)
                setTimeout(function () {
                    $('#left2').addClass("fadeInLeft");
                }, 900)
                setTimeout(function () {
                    $('#right3').addClass("fadeInRight");
                }, 1200)
                setTimeout(function () {
                    $('#left3').addClass("fadeInLeft");
                }, 1500)
            }
            if (index == 8) {
                $("#section7_img1").addClass("fadeInDown");
                $("#section7_img2").addClass("bounceIn");

                setTimeout(function () {
                    $("#section7_img3").animate({opacity: "1"}, 1000);
                }, 1000)


                $(".section7_img1text").addClass("fadeInRight");

            }
            if (index == 9) {
                $(".butterfly1").addClass("fadeInLeft");
                $(".butterfly2").addClass("fadeInRight");
                $("#section8_img3").animate({opacity: "1"}, 1000);
                setTimeout(function () {
                    $("#section8_img1").animate({opacity: "1"}, 1000);
                }, 500)
                setTimeout(function () {
                    $("#section8_img2").animate({opacity: "1"}, 1000);
                }, 1000)
                setTimeout(function () {
                    $("#section8_img4").animate({opacity: "1"}, 1000);
                }, 1500)
                setTimeout(function () {
                    $("#section8_img5").animate({opacity: "1"}, 1000);
                }, 2000)

            }
            if (index == 10) {
              /*  $('#section9_top').addClass("flipInY");*/

                $("#section9_img1").addClass("zoomIn");
                $("#section9_img2").addClass("fadeInRight");
            }
            if (index == 11) {
                $('#section10_img2').addClass("zoomIn");

                $("#section10_img3").addClass("bounceInUp");
                $("#section10_img1").addClass("fadeInRight");
            }
        },
        // 离开某一屏后的回调函数
        onLeave: function (index, nextIndex, direction) {
            if (index == 1) {
                $('.section0_text').removeClass("zoomIn");
                $('.section_birds').removeClass("fadeInRight");
                setTimeout(function () {
                    $(".section0_child").removeClass("fadeInRight");
                }, 1000)
                $("#section0_info").removeClass("zoomIn");

            }
            if (index == 2) {
                $(".section1_img1").removeClass("fadeInLeft");
                setTimeout(function () {
                    $('#section1_img4').removeClass("zoomIn");
                }, 1000)
                setTimeout(function () {
                    $('#section1_img3').removeClass("zoomIn");
                }, 1500)
                setTimeout(function () {
                    $('#section1_img2').removeClass("zoomIn");
                }, 2000)
            }
            if (index == 3) {
                $('.section2 .inner').removeClass("flipInY");
                $('#section2_img2').removeClass("fadeInUp");
                $('.section2 .section1_img1').removeClass("fadeInDown");
                $("#imgItem1").css("opacity", "0");
                $("#imgItem2").css("opacity", "0");
                $("#imgItem3").css("opacity", "0");
                $("#imgItem4").css("opacity", "0");
                $("#imgItem5").css("opacity", "0");
                $("#imgItem0").css("opacity", "0");
                $(".Magnify_text").css("opacity", "0");
                /*$(".Magnify_text p").removeClass("font-transition");*/

            }
            if (index == 4) {
                $('.section3 .inner').removeClass("zoomIn");
                $('#section3_img2').removeClass("fadeInUp");

                /*i*/
                $('.section3 .section1_img3').removeClass("fadeInLeft");
                $('.section3 .inner_text p').removeClass("bounceIn");
                $('.section3 .section1_img3').css("opacity", "0");
                $('.section3 .inner_text p').css("opacity", "0");
            }
            if (index == 5) {
                $('.orange').removeClass("fadeInLeft");
                $('.blue').removeClass("fadeInRight");
                $("#section4_panel").css("opacity", "0")
                $("#section4_img1").css("opacity", "0")
                $("#section4_img2").css("opacity", "0")
                $('.section4 .inner').removeClass("bounceIn");
                $('.section4 .section1_img1').removeClass("fadeInDown");
            }
            if (index == 6) {
                $('.section5 .section1_img1').removeClass("fadeInDown");
                $('.section5 .inner').removeClass("flipInY");


                $('#section6_img1').removeClass("fadeInDown");
                $('#section6_img2').removeClass("fadeInLeft");
                $('#section6_img3').removeClass("fadeInRight");
                $('#section6_img4').removeClass("fadeInUp");
                $('#section6_img5').removeClass("fadeInUp");
            }
            if (index == 7) {
                $(".section6_top").removeClass("fadeInDown");
                $('#right1').removeClass("fadeInRight");
                $('#left1').removeClass("fadeInLeft");
                $('#right2').removeClass("fadeInRight");
                $('#left2').removeClass("fadeInLeft");
                $('#right3').removeClass("fadeInRight");
                $('#left3').removeClass("fadeInLeft");
            }
            if (index == 8) {
                $("#section7_img1").removeClass("fadeInDown");
                $("#section7_img2").removeClass("bounceIn");
                $("#section7_img3").stop().css("opacity", "0");
                $(".section7_img1text").removeClass("fadeInRight");

            }
            if (index == 9) {


                $("#section8_img1").stop().css("opacity", "0");
                $("#section8_img2").stop().css("opacity", "0");
                $("#section8_img3").stop().css("opacity", "0");
                $("#section8_img4").stop().css("opacity", "0");
                $("#section8_img5").stop().css("opacity", "0");

                $(".butterfly1").removeClass("fadeInLeft");
                $(".butterfly2").removeClass("fadeInRight");
            }
            if (index == 10) {
               /* $('#section9_top').removeClass("flipInY");*/
                $("#section9_img1").removeClass("zoomIn");
                $("#section9_img2").removeClass("fadeInRight");
            }
            if (index == 11) {
                $('#section10_img2').removeClass("zoomIn");

                $("#section10_img3").removeClass("bounceInUp");
                $("#section10_img1").removeClass("fadeInRight");
            }
        },
        // 页面初始化完成后的回调函数
        afterRender: function () {
            $(".section9 .fp-tableCell").css("vertical-align", "inherit");
        },
    })

})
window.onload = function () {
    $(".table").height($(window).height() - $(".footer").height());
}
