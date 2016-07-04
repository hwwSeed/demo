/**
 * Created by hww on 2016/5/26.
 */

$(function(){
    /*点击小眼睛显示隐藏密码*/


    $(".hidden").live("click",function(){
        var _this=$(this);
        var input=_this.siblings('input');
        var type=input.attr("type");
        var val=input.val();
        if(type=="password"){
            _this.parent().html('<label>密码:</label><input type="text"class="info"  id="password" name="password" value="'+val+'"><img class="hidden" src="img/visible.png" alt="">')
        }else if(type=="text"){
            _this.parent().html('<label>密码:</label><input type="password" class="info" id="password" name="password" value="'+val+'"><img class="hidden" src="img/visible.png" alt="">')
        }
    });

    /*单选框记住密码*/
    $(".ck").click(function(){
        if($(this).hasClass('uncheck')){
            $(this).removeClass('uncheck');
        }else{
            $(this).addClass('uncheck');
        }

    })

})
