var lista=["baner1.jpg","baner2.jpg","baner3.jpg","baner4.jpg"];
var i=0;
var rotacion;
function carrusel(){
	document.getElementById("baner").src="../img/baner/"+lista[i];
	i++;
	if(i>=lista.length) i=0;
	rotacion=setTimeout("carrusel()",1000);
}

$(document).ready(function(){
	
		carrusel();
	
		$(".imgsocial").mouseover(function(){
			$(this).css("opacity","0.5");		
			$(this).css("transition","all 0.5s");
		});
	
		$(".imgsocial").mouseout(function(){
			$(this).css("opacity","1.0");
			$(this).css("transition","all 0.5s");
		});
		
		$(".acontrol").click(function(){
			
			clearTimeout(rotacion);
			i=$(this).data("op");
			carrusel();
		});
	
	
		$(".artanzuelo").mouseover(function(){					
			$(this).children('img').css("height","0px");
			$(this).children('img').css("transition","all 0.5s");			
		});
	
		$(".artanzuelo").mouseout(function(){						
			$(this).children('img').css("height","240px");
			$(this).children('img').css("transition","all 0.5s");			
		});
	
});
