define(function(){
	//原型模式+构造函数模式
    function Fun1(title,html,type){
		this.title =title;
		this.html=html;
		this.type= type;
		alert("it works");
    }
	Fun1.prototype.setHtml=function(){
		alert('Set Html');
	}
	return Fun1;
});

