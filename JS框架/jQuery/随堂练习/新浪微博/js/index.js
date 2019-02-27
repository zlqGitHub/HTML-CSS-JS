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
        var $weibo = createEle($text);
        $(".messageList").prepend($weibo);
    });

    //注意：动态创建的元素绑定事件通过事件委托
    //监听点赞点击事件
    $("body").delegate(".infoTop","click",function () {
        // console.log(typeof $(this).text());     //string类型
        $(this).text(parseInt($(this).text()) + 1);
    })

    //监听踩点击事件
    $("body").delegate(".infoDrop","click",function () {
        $(this).text(parseInt($(this).text()) + 1);
    })

    //监听删除删除点击事件
    $("body").delegate(".infoDel","click",function () {
        $(this).parents(".info").remove();
    })

    //创建节点的方法
    function createEle(text) {
        var $weibo = $("<div class=\"info\">\n" +
            "                <p class=\"infoText\">"+text+"</p>\n" +
            "                <p class=\"infoOperation\">\n" +
            "                    <span class=\"infoTime\">"+formartDate()+"</span>\n" +
            "                    <span class=\"infoHandle\">\n" +
            "                        <a href=\"javascript:;\" class='infoTop'>0</a>\n" +
            "                        <a href=\"javascript:;\" class='infoDrop'>0</a>\n" +
            "                        <a href=\"javascript:;\" class='infoDel'>删除</a>\n" +
            "                    </span>\n" +
            "                </p>\n" +
            "            </div>");

        return $weibo;
    }
    
    //获取当前时间
    function formartDate() {
        //2019-2-26 21:30:30
        var date = new Date();
        // console.log(date.getFullYear());
        console.log(date.getMonth());   //月份需要加一

        var arr = [date.getFullYear() + "-",
            date.getMonth() + 1 + "-",
            date.getDate() + " ",
            date.getHours() + ":",
            date.getMinutes() + ":",
            date.getSeconds()
        ];

        console.log(arr);
        console.log(arr.join(""));   //将数组转化为json格式

        return arr.join("");
    }

});