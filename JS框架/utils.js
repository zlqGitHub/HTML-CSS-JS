// 整理之前封装的功能函数................................
function loading(Obj) {
	//记录下载的个数
	var n = 0;
	//缓存所有图片
	Obj.imgArray.forEach(function(value, index) {
		//创建吐图片对象
		var imgObj = new Image();
		//指定地址开始缓存
		imgObj.src = value;
		//监听缓存过程
		imgObj.onload = function() {
			n++;
			//下载进度
			//progress.value = n / imgArray.length;
			var floatValue = n / Obj.imgArray.length;
			//函数回调的安全判断
			Obj.loadingCallback && Obj.loadingCallback(floatValue);

			//判断所有图片都下载完成
			if (n === Obj.imgArray.length) {
				//mask.style.display = "none";
				// successCallback();
				setTimeout(Obj.successCallback, 100)

			}
		};
	});
}



// 题目: 写一个算法,获取指定元素距离页面最顶端的距离

function getOffsetTop(ele) {
	// ele.offsetTop + ele.offsetParent.clientTop 
	var top = 0;
	while (true) {
		top = top + ele.offsetTop + ele.offsetParent.clientTop;
		//更新偏移父元素
		ele = ele.offsetParent;
		// 当ele是body的时候,就是到顶了
		if (ele.offsetParent == null) {
			break;
		}
	}
	return top;
}

//浏览器高度
function clientHeight() {
	return window.innerHeight || document.documentElement.clientHeight;
}
//上滚动距离
function getScroolTop() {
	return document.documentElement.scrollTop;
}



function randomNumber(a = 1, b = 10) {
	// 这两个函数会做个类型转换, 假如含有其他字符,返回的是NaN
	var max = Math.max(a, b);
	var min = Math.min(a, b);
	if (isNaN(max)) throw "参数不规范!";
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor() {
	//产生一个随机颜色
	var r = randomNumber(0, 255);
	var g = randomNumber(0, 255);
	var b = randomNumber(0, 255);
	//修改元素
	return "rgb(" + r + "," + g + "," + b + ")";
}
