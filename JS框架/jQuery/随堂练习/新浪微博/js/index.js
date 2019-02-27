$(function () {
    //监听内容的时时输入（通过事件委托给body）
    $("body").delegate(".comment","propertychange input",function () {
        // console.log($(this).val());
        if($(this).val().length > 0){
            $(".send").prop("disabled",false);
        }
        else{
            $(".send").prop("disabled",true);
        }
    })
    
    //监听发布按钮的点击
    $(".send").click(function () {
        //获取用户输入的内容
        var $text = $(".comment").val();
        //根据内容创建节点
        
    });
});