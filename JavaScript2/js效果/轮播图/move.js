function move(obj,attr,target,speed,callback){
	clearInterval(obj.timer);
	// alert(styleValue);
	
	//判断速度的正负   0->800向右移动     800->0向左移动
	var current = parseInt(getStyle(obj,attr));
	// console.log(current);
	if(current >= target){
		speed = -speed;
	}
	obj.timer = setInterval(function(){
		var oldValue = parseInt(getStyle(obj,attr));    //类型转换，便于计算
		var newValue =oldValue + speed;
		//通过speed判断
		if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)){    //让div恰好停在600px位置的处
			newValue = target;    
		}
		//当到达目的地时关闭定时器
		if(newValue == target){
			clearInterval(obj.timer);  
			//动画执行完毕后，调用回调函数
			callback && callback();   //首先判断是否有回调函数
		}
		obj.style[attr] = newValue + "px";
	},30);
}


function move2(obj,attr,iTarget,fnEnd){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){

		var current = 0;
		if(attr == "opacity")
		{
			current = Math.round(parseFloat(getStyle(obj,attr))*100);   //Math.round 四舍五入
		}
		else
		{
			current = parseInt(getStyle(obj,attr));
		}

		var speed = (iTarget - current)/6;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

		if(current == iTarget)
		{
			clearInterval(obj.timer);
			if(fnEnd)fnEnd();
		}
		else
		{
			if(attr == "opacity")
			{
				obj.style.opacity = ( current + speed )/100;
				obj.style.filter = "alpha(opacity:"+ (current + speed) +")";
			}
			else
			{
				obj.style[attr] = current + speed + "px";
			}
		}

	},30);
}	



//获取任何元素的属性值
function getStyle(obj,name){
	//兼容性处理
	//火狐、谷歌上的兼容
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[name];
	}
	//IE上兼容
	else{
		return obj.currentStyle[name];
	}
}
