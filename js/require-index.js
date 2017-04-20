require.config({
	paths:{
		"jquery":"http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min",
		"time":"time",
		"index":"index"
	}
});
require(['jquery','time','index'],function($,time,index){
	$(function(){


		      var isMobile = base.isMobile();
              var down=isMobile?'touchstart':'mousedown';
              var up= isMobile?'touchend':'mouseup';
              var move=isMobile?'touchmove':'mousemove';

	   
       
         imgLoad(img_list,function(list,num){
                  if(num == list.length){
                  	 $(".percent-process").css('width','160px');
			      	  $(".percent-process").on('webkitTransitionEnd',function(){
			      	  	$(".index-loading").css("display",'none');
			      	  })
			      	  $(".loading-process").on('transitionEnd',function(){
			      	  	$(".index-loading").css("display",'none');
			      	  })
                  }
          });
	})
	
})