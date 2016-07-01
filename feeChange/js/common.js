/**
 * Created by hww on 2016/6/13.
 */


$(function () {


    /*单选*/
    $("ul li .choice_item").click(function () {
        var This = $(this);
        var targetNode = This.children(".choice_icon");
        if (targetNode.hasClass('checked')) {
            This.siblings(".choice_item").children(".choice_icon").removeClass("checked");
            This.parent().siblings("li").children(".choice_item").children(".choice_icon").removeClass("checked");
        } else {
            targetNode.addClass("checked");
            This.siblings(".choice_item").children(".choice_icon").removeClass("checked");
            This.parent().siblings("li").children(".choice_item").children(".choice_icon").removeClass("checked");
        }
    })
    /*多选*/
    $("#isPeccancyContainer .container .choice__inner .choice_item").click(function () {
        var This = $(this);
        var targetNode = This.children(".choice_icon");
        if (targetNode.hasClass('checked')) {
            targetNode.removeClass("checked")
        } else {
            targetNode.addClass("checked");
        }
    })


})
