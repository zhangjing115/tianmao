$(function(){
	// 代码中不要使用table和空格混排
	// $('#id')
	// $( $('.aa')[0] )
	// $( '<span>1</span>' )
	// $(function(){})
	// $({aa:0})

	// $({aa:10,bb:2}).animate({aa:1000,bb:200},{
	// 	duration:700,
	// 	step:function(){
	// 		console.log(this.aa,this.bb);
	// 	}
	// })


	//mozilla developer network MDN

	// var aa=$( '<span>1</span>' );
	// console.dir(aa[0].innerHTML);
	// ---------------------头-------------------
	$('.nav-ying').hover(
		function(){
			$(this).find('.ying').show();
		},
		function(){
			$(this).find('.ying').hide();
		})

	
	$('.dong').hover(
		function(){
			$(this).animate({
				marginRight:"5"
			},500)
		},
		function(){
			$(this).animate({
				marginRight:"0"
			},500)
		})

	// ------------------floor中左右动-------------
	$('.dd').hover(
		function(){
			$(this).animate({
				marginLeft:"-5"
			},300)
		},
		function(){
			$(this).animate({
				marginLeft:"0"
			},300)
		})

	// $('.dd').hover(function(){
	//     $(this).css({position:'relative'});
	//     $(this).stop();
	//     $(this).animate({left:-10},200);
	//   },function(){
	//     $(this).stop();
	//     $(this).animate({left:0},200);
 //  });




// -----------------停止时出现顶部-----------
	var ti;
	$(window).scroll( function() { 
		if($(window).scrollTop()>300){
			clearTimeout(ti);
			ti=setTimeout(function(){
					$('.shangtou').show();
				},500);
			}else{
				clearTimeout(ti);
				$('.shangtou').hide();
			}

	} );

// -------------点击返回顶部-----------
	$("#top").click(function(){
    $({top: $(window).scrollTop()}).animate(
      {top: 0},
      {
        duration: 700,
	step: function() {
	  $(window).scrollTop(this.top);
	}
      }
    );
  });

// ---------------------轮播-----------------------
	var index = 0;
	var lunbo  =  function(){
	    $('.item').hide();
	    var el = $('.item')[index];
	    $(el).show();

	    $('.liugequan').removeClass('red');
	    $($('.liugequan')[index]).addClass('red');

	    var arr=['#E8E8E8','#FCF1F7','#63CBA8','#EAEAEA','#C838FC','#607BFB'];
	    $('.main').css({"background":arr[index]});

	    index += 1;
	    if( index === $('.item').length ){
	      index = 0;
	    }
	}
	  $('.liugequan').each(function(i){
	    $(this).data('index',i)
	  });

	  $('.liugequan').hover(function(){
	    clearInterval(timerId);
	    $('.liugequan').removeClass('red');
	    $(this).addClass('red');
	    var i = $(this).data('index');
	    $('.item').hide();
	    $( $('.item')[i] ).show();
	    index = i;
	    var arr=['#E8E8E8','#FCF1F7','#63CBA8','#EAEAEA','#C838FC','#607BFB'];
	    $('.main').css({"background":arr[index]});
	  },function(){
	    clearInterval(timerId);
	    timerId = setInterval(lunbo,1000);
	  });

	  var timerId = setInterval(lunbo,1000);
	  $('.zhong').mouseover(function(){
	  	clearInterval(timerId);
	  });
	  $('.zhong').mouseout(function(){
	  	clearInterval(timerId);
	    timerId = setInterval(lunbo,1000);
	  	
	  })


	 
	// ------------------右侧-----------------------

	$('.nav-r-ying').hover(
		function(){
			$(this).next('.mytequn-zi').show();
		},
		function(){
			$(this).next('.mytequn-zi').hide();
	})


	// -----动画出现------
	// $('.nav-r-ying').hover(
	// 	function(){
	// 		$('.nav-r-ying').stop();
	// 		$(this).next('.mytequn-zi').show(0,function(){
	// 			$(this).animate({left:-90},200)
	// 		});
	// 	},
	// 	function(){
	// 		$('.nav-r-ying').stop();
	// 		$(this).next('.mytequn-zi').css({left:-120}).hide();
	// })

	
	// ------------------左侧---------------------------

	 $('.zuo-ying').each(function(i){
	    $(this).data('index',i)
	  });
	$('.zuo-ying').hover(
		function(){
			var i=$(this).data('index');
			$(this).find('.left-ying').show();
			$('.youtu').hide();
			$($('.youtu')[i]).show();
			if(i!=0){
				clearInterval( timerId );
			}
		},
		function(){

			$(this).find('.left-ying').hide();
			clearInterval(timerId);
	    	timerId = setInterval(lunbo,1000);
		})

	// ..............................................................
	 $('.YING').each(function(i){
	    $(this).data('index',i)

	  });
	  console.log($('.YING'));
	$('.YING').hover(
		function(){
			var i=$(this).data('index');
			$('.item').hide();
			$('.item1').hide();
			$($('.item1')[i]).show();
			var arr1=['#ffd44a','#365373','#015595','#b5151f','#fbaa12','#aff7ec','#ebe8e3','#de0609','#cf2160','#ffc3d3','#29a6ff','#e4e2e3','#ffdedd','#30c4ff','#e2eed6'     ];
	   		$('.main').css({"background":arr1[i]});	
		},
		function(){
			var i=$(this).data('index');
			$('.item').show();
			$('.item1').show();
			$($('.item1')[i]).hide();
		})






	


		

// ---------------------楼层----------------------

	$('.sn').each(function(i){
	    $(this).data('index',i);
	  });
	  $('.sn').click(function(){
	    var i = $(this).data('index');
	    var newtop = $( $('.floor-content')[i] ).offset().top-75 ;
	    $({top: $(window).scrollTop()}).animate(
	      {top: newtop},
	      {
	        duration: 700,
		step: function() {
		  $(window).scrollTop(this.top);
		}
	      }
	    );
  });

// --------------------楼层轮播-------------------
	$('.btn-l').mousedown(function(e){
		e.preventDefault();
	})
	$('.btn-r').mousedown(function(e){
		e.preventDefault();
	})

	  var ind1=0;
	  var xiaolunbo1=function(){
	  	$('.kou1').hide();
	  	$($('.kou1')[ind1]).show();
	  	ind1+=1;
	  	if(ind1==3){
	  		ind1=0;
	  	}
	  }
	  var t1=setInterval(xiaolunbo1,1000);
	  $('#btn1').click(function(){
	  	clearInterval(t1);
	  	$('.kou1').hide();
	  	$($('.kou1')[ind1]).show();
	  	ind1++;
	  	if(ind1==3){
	  		ind1=0;
	  	}
	  })
	  $('#btn11').click(function(){
	  	clearInterval(t1);
	  	$('.kou1').hide();
	  	$($('.kou1')[ind1]).show();
	  	ind1--;
	  	if(ind1==-1){
	  		ind1=2;
	  	}
	  })

	  
	 

	  var ind2=0;
	  var  xiaolunbo2=function(){
	  	$('.kou2').hide();
	  	$($('.kou2')[ind2]).show();
	  	ind2++;
	  	if(ind2===$('.kou2').length){
	  		ind2=0;
	  	}
	  }
	   var t2=setInterval(xiaolunbo2,1000);
	    $('#btn2').click(function(){
		  	clearInterval(t2);
		  	$('.kou2').hide();
		  	$($('.kou2')[ind2]).show();
		  	ind2++;
		  	if(ind2==3){
		  		ind2=0;
		  	}
		  })
		  $('#btn22').click(function(){
		  	clearInterval(t2);
		  	$('.kou2').hide();
		  	$($('.kou2')[ind2]).show();
		  	ind2--;
		  	if(ind2==-1){
		  		ind2=2;
		  	}
	  })



	   var ind3=0;
	   var xiaolunbo3=function(){
	   	$('.kou3').hide();
	   	$($('.kou3')[ind3]).show();
	   	ind3++;
	   	if(ind3===$('.kou3').length){
	   		ind3=0;
	   	}
	   }
	   var t3=setInterval(xiaolunbo3,1000);
	   $('#btn3').click(function(){
	   	clearInterval(t3);
	   	$('.kou3').hide();
	   	$($('.kou3')[ind3]).show();
	   	ind3++;
	   	if(ind3==3){
	   		ind3=0;
	   	}
	   })
	   $('#btn33').click(function(){
	   	clearInterval(t3);
	   	$('.kou3').hide();
	   	$($('.kou3')[ind3]).show();
	   	ind3--;
	   	if(ind3==-1){
	   		ind3=2;
	   	}
	   })

	    var ind4=0;
	   var xiaolunbo4=function(){
	   	$('.kou4').hide();
	   	$($('.kou4')[ind4]).show();
	   	ind4++;
	   	if(ind4===3){
	   		ind4=0;
	   	}
	   }
	   var t4=setInterval(xiaolunbo4,1000);
	    $('#btn4').click(function(){
	   	clearInterval(t4);
	   	$('.kou4').hide();
	   	$($('.kou4')[ind4]).show();
	   	ind4++;
	   	if(ind4==3){
	   		ind4=0;
	   	}
	   })
	   $('#btn44').click(function(){
	   	clearInterval(t4);
	   	$('.kou4').hide();
	   	$($('.kou4')[ind4]).show();
	   	ind4--;
	   	if(ind4==-1){
	   		ind4=2;
	   	}
	   })


	   var ind5=0;
	   var xiaolunbo5=function(){
	   	$('.kou5').hide();
	   	$($('.kou5')[ind5]).show();
	   	ind5++;
	   	if(ind5===$('.kou5').length){
	   		ind5=0;
	   	}
	   }
	   var t5=setInterval(xiaolunbo5,1000);
	    $('#btn5').click(function(){
	   	clearInterval(t5);
	   	$('.kou5').hide();
	   	$($('.kou5')[ind5]).show();
	   	ind5++;
	   	if(ind5==3){
	   		ind5=0;
	   	}
	   })
	   $('#btn55').click(function(){
	   	clearInterval(t5);
	   	$('.kou5').hide();
	   	$($('.kou5')[ind5]).show();
	   	ind5--;
	   	if(ind5==-1){
	   		ind5=2;
	   	}
	   })

	   var ind8=0;
	   var xiaolunbo8=function(){
	   	$('.kou8').hide();
	   	$($('.kou8')[ind8]).show();
	   	ind8++;
	   	if(ind8==$('.kou8').length){
	   		ind8=0;
	   	}
	   }
	   var t8=setInterval(xiaolunbo8,1000);
	   $('#btn8').click(function(){
	   	clearInterval(t8);
	   	$('.kou8').hide();
	   	$($('.kou5')[ind5]).show();
	   	ind5++;
	   	if(ind8==3){
	   		ind8=0;
	   	}
	   })
	   $('#btn88').click(function(){
	   	clearInterval(t8);
	   	$('.kou8').hide();
	   	$($('.kou8')[ind8]).show();
	   	ind8--;
	   	if(ind8==-1){
	   		ind8=2;
	   	}
	   })

	  

	   $('.hot-qian').each(function(J){
	    $(this).data('BB',J)
	  });

	  $('.hot-qian').click(function(){
	    var J = $(this).data('BB');
	    $('.tuzheng').hide();
	    $( $('.tuzheng')[J] ).show();
	  })
	  console.log($('.hot-qian'));


	  // ------------------------fixed----------------
	   var a=[1114,1566,2018,2521,2973,3425,3928,4380,4832,5335,5787,6239];
	  $(window).scroll(function(){
	  	var top=$($('.floor-content')[0]).offset().top-100;
	  	if($(window).scrollTop()>=top){
	  		$('.sn-nav-left').show();
	  	}else{
	  		$('.sn-nav-left').hide();
	  	}
	  	for(var i=0;i<a.length;i++){
	  		if($(window).scrollTop()>=(a[i]-100) && $(window).scrollTop()<=(a[i+1]-100)){
		  		$($('.sn')[i]).css({background:'url(./img/sn'+i+i+'.png) no-repeat'});
		  	}else{
		  		$($('.sn')[i]).css({background:'url(./img/zuofix'+i+'.png) no-repeat 50% 50%'});
		  		
		  	}
	  	}  	
	  })

	


	  








})


// window.onload=function(){
// 	// //------------------------ 头部-------------------------
// 	var el=document.getElementsByClassName('nav-ying');
// 	var ying=document.getElementsByClassName('ying');
// 	for(var i=0;i<el.length;i++){
// 		el[i].index=i;
// 		el[i].onmouseover=function(){
// 			ying[this.index].style.display='block';
// 		};
// 		el[i].onmouseout=function(){
// 			ying[this.index].style.display='none';
// 		};
// 	}
	// // ---------------------右侧-------------------------------
	// var youce=document.getElementsByClassName('nav-r-ying');
	// var tequan=document.getElementsByClassName('mytequn-zi');
	// for(var j=0;j<youce.length;j++){
	// 	youce[j].index1=j;
	// 	youce[j].onmouseover=function(){
	// 		tequan[this.index1].style.display='block';
	// 	};
	// 	youce[j].onmouseout=function(){
	// 		tequan[this.index1].style.display='none';

	// 	};

	// }
	// // -------------------------左侧-------------------------------
	// var zuoce=document.getElementsByClassName('zuo-ying');
	// console.log(zuoce);
	// var leftYing=document.getElementsByClassName('left-ying');
	// console.log(leftYing);
	// for(var k=0;k<zuoce.length;k++){
	// 	zuoce[k].index2=k;
	// 	zuoce[k].onmouseover=function(){
	// 		leftYing[this.index2].style.display='block';
	// 	};
	// 	zuoce[k].onmouseout=function(){
	// 		leftYing[this.index2].style.display='none';
	// 	};
	// }
	// // -----------------------------轮播-----------------------------
	// var $=function(div){
	// 	return document.getElementById(div);
	// };
	// var $$=function(div){
	// 	return document.getElementsByClassName(div);
	// }
	// var items=$$('item'),circles=$$('liugequan');
	// var chang=$('chang'),zhong=$$('zhong'),kaiguan=true;
	// var dong=chang.firstElementChild.offsetWidth;
	// var shang=circles[0];

	// circles[0].style.background='red';
	// var ww=0;
	// var fn=function(){
	// 	shang.style.background='black';
	// 	circles[ww].style.background='red';
	// 	shang=circles[ww];
	// 	chang.style.marginLeft=-dong*ww+'px';
	// 	ww++;
	// 	if(ww==6){
	// 		ww=0;
	// 	}
			
	// };
	// var timeId=setInterval(fn,2000);

	// for(var i=0;i<circles.length;i++){

	// 	circles[i].index1=i;
	// 	circles[i].onclick=function(){
	// 		clearInterval(timeId);
	// 		chang.style.marginLeft=-dong*this.index1+'px';
	// 		if(shang!=null){
	// 			shang.style.background='black';
	// 		}	
	// 		this.style.background='red';
	// 		shang=this;
	// 	}
	// }

	// zhong[0].onmouseover=function(){
	// 	clearInterval(timeId);
	// };
	// zhong[0].onmouseout=function(){
	// 	if(kaiguan){
	// 		clearInterval(timeId);
	// 		timeId=setInterval(fn,1000);
	// 	}	
	// };

	// // ----------------------fixed---------------------------------
	// var shangtou=$$('shangtou');
	// var timeIds;
	// window.onscroll=function(){
	// 	clearTimeout(timeIds);
	// 	if(document.body.scrollTop<100){
	// 		shangtou[0].style.display='none';
	// 	}else{
	// 		timeIds=setTimeout(function(){
	// 			shangtou[0].style.display='block';
	// 		},1000);
	// 	}
	// };


	// // ------------------------------回到顶部-----------------
	// var top=$('top');
	// console.log(top);
	// var SEC=2,TIME=2000;     //2秒动一次，总共2000s
	// top.onclick=function(){
	// 		var scroll=document.body.scrollTop;
	// 		var sudu=scroll/(TIME/SEC);          //TIME/SEC  总共动多少次
	// 		clearInterval(timeId);
	// 		var timeId=setInterval(function(){
	// 			if(scroll<=0){
	// 				clearInterval(timeId);
	// 			}
	// 			document.body.scrollTop=scroll;
	// 			scroll=scroll-sudu;	
	// 		},SEC);			
	// };

// };

