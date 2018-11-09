var oQrcode = document.getElementById('J_qrcode');
// 给id为J_qrcode元素绑定鼠标移入事件
oQrcode.onmouseover = movedown;

// 给id为J_qrcode元素绑定鼠标移出事件
oQrcode.onmouseout = moveup;


var oPhone = document.getElementById('J_phone');
// 给id为J_phone元素绑定鼠标移入事件
oPhone.onmouseover = movedown;

// 给id为J_phone元素绑定鼠标移出事件
oPhone.onmouseout = moveup;


// 定义一个鼠标移入事件
function movedown(){
	this.className = "item active";
}

// 定义一个鼠标移出事件
function moveup(){
	this.className = "item unactive";
}			