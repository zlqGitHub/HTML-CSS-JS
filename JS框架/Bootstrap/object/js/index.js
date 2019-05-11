$(function () {
    $(window).on("resize",function () {
        // console.log($(window).width());
        //获取页面中的所有item
        var $itemAll = $("#carousel .item");
        // console.log($itemAll);

        //获取当前屏幕的大小
        let clientW = $(window).width();
        let isShowBigImage = clientW >= 800;   //设置临界值

        //循环迭代设置对应的轮播图片
        $itemAll.each(function (index,item) {
            //console.log(item);
            //获取到当前需要展示的具体图片路径
            let src = isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img");
            let imgUrl = 'url("'+src+'")';
            //设置背景
            $(item).css("backgroundImage",imgUrl);

            if(!isShowBigImage){
                let $img = "<img src='"+src+"'>";
                //在加入节点之前需要先清空，否则会出现图片叠加
                $(item).empty().append($img);
            }
            else{
                $(item).empty();
            }
        });
    })
    //页面已加载就开始执行    使用trigger立即执行函数
    $(window).trigger("resize");
});