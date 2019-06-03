$(function () {
    let $box = $(".box");
    let $content = $(".content");
    let $parent = $(".parent");
    let $child = $(".child");

    //当内容区高度小于父元素高度时  设置内容区宽度
    if($content.innerHeight() <= $box.innerHeight()){
        $parent.css({"display":"none"});
        $content.width($box.width());
    }else{     //设置滚动条的高度
        let height = ($box.innerHeight()/$content.innerHeight() * $box.innerHeight());
        // console.log(height);
        $content.width(280);
        $parent.css({"display":"block"});
        //确定滚动条的高度大小
        $child.css({"height":height})

        //使得滚动条的位置在最底部
        $child.css({"top":$parent.innerHeight()-$child.innerHeight()});
        //将内容位置放到最后
        $content.css({"top":-($content.innerHeight() - $box.innerHeight())})
    }

    //滚动条的实现
    $child.on("mousedown",function (event) {
        event = event || window.event;
        //et pOffsetT = $parent.offset().top;
        let clientY = event.clientY;    //点击时获取鼠标的纵坐标
        let offsetT = this.offsetTop;
        let oh = clientY - offsetT;     //点击时鼠标纵坐标与元素的间距（指垂直方向）
        let outHeight = $content.innerHeight() - $box.innerHeight();   //内容超出滚动方向的高度
        let childScrollH = $parent.innerHeight() - $child.innerHeight();    //滚动条在滚动方向上可滚动的高度
        // console.log(outHeight);
        $(document).on("mousemove",function (event) {
            console.log("test");
            event = event || window.event;
            // console.log(event);
            let height = event.clientY - oh;   //滚动条要移动到的位置
            // console.log(changeT);
            if(height < 0){
                height = 0;
            }else if(height > $parent.innerHeight() - $child.innerHeight()){
                height = $parent.innerHeight() - $child.innerHeight();
            }

            let scale = height/childScrollH;// 定义一个滚动的比例
            // console.log(scale);
            //改变滚动条的位置
            $child.css({"top":height})
            //改变内容的高度
            $content.css({"top": -scale * outHeight});

            // console.log($content.offset().top);
        })
        //取消事件
        $(document).on("mouseup",function () {
            $(document).off();
        })
        //return false;   //取消事件的默认行为
        event.preventDefault();
    });

    // $box.on("mousewheel",function () {
    //     $child.mousedown();
    //     $(document).mousemove();
    // })

});
