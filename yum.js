require.config(
	{
		baseUrl:'js',
		paths:{
			"jquery":"jquery-2.0.3"
			,"a":"a"
		}	
	}
);

require(["jquery","a"],function($,a){	
	//alert('loaded finished');
	$("#title").html("555555555555");
	$("#body").click(function(){
		a = new a('title1','test_name','2');
		a.setHtml();
	});
});