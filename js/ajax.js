function createXHR(){//生成AJAX对象，不用考虑
	if(typeof XMLHttpRequest != "undefined"){//非IE
		return new XMLHttpRequest();
	}else if(typeof ActiveXObject != "undefined"){//IE
		var version = [
			'MSXML2.XMLHttp.6.0',
			'MSXML2.XMLHttp.3.0',
			'MSXML2.XMLHttp',
		];

		for(var i=0;i<version.length;i++){
			try{
				return new ActiveXObject(version[i]);
			}catch(e){
				//跳过
			}
		}
	}else{
		throw new Error("你的系统不支持XHR");
	}
}

/*同步处理，容易造成浏览器卡死
document.onclick = function(){
var xhr = createXHR();
xhr.open('get','http://127.0.0.1:8888/js/ajax.php?rand='+ Math.random(),false); 
xhr.send(null);
alert(xhr.responseText);
}
*/
/*


window.onload = function(){
 alert(document.getElementsByName("bt1").length);
};
*/


/*
window.onload = function(){
	document.getElementsByName("bt1")[0].onclick = function(){
		var show = document.getElementById("showDate");
		var code = document.getElementById("status");
		code.innerHTML = "";
		var xhr = createXHR();
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if(xhr.status == 200){
					show.innerHTML = xhr.responseText;
					code.innerHTML = xhr.getAllResponseHeaders();
				}
			}
		};
		xhr.open("get","http://127.0.0.1:8888/js/Ajax.php?rand="+Math.random(),true);
		xhr.send(null);
	};
};
*/

/*

function createXHR(){
	if(typeof XMLHttpRequest != "undefined"){//非IE
		return new XMLHttpRequest();
	}else if(typeof ActiveXObject != "undefined"){//IE
		var version = [
			'MSXML2.XMLHttp.6.0',
			'MSXML2.XMLHttp.3.0',
			'MSXML2.XMLHttp',
		];

		for(var i=0;i<version.length;i++){
			try{
				return new ActiveXObject(version[i]);
			}catch(e){
				//跳过
			}
		}
	}else{
		throw new Error("你的系统不支持XHR");
	}
}


window.onload = function(){
	document.getElementsByName("bt1")[0].onclick = function(){
		var show = document.getElementById("showDate");
		var xhr = createXHR();
		var data = 
			{
				"name":"zhaosong",
				"age":23
			}
		;
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if(xhr.status == 200){
					show.innerHTML = xhr.responseText;
				}
			}
		};
		xhr.open("post","http://127.0.0.1:8888/js/ajax.php?rand="+Math.random(),true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send("name=zhaosong&age=23");
	};
};
*/


