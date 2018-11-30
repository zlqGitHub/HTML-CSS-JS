// 链式运动框架  (回调函数)
function move(obj,attr,iTarget,fnEnd){
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

//取非行间样式
function getStyle(obj,name)
{

	if(obj.currentStyle)
	{
		return obj.currentStyle[name]; //兼容IE
	}
	else
	{
		return getComputedStyle(obj,false)[name];  //兼容FF等
	}
}			