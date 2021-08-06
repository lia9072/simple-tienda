var lista=["baner1.jpg","baner2.jpg","baner3.jpg","baner4.jpg"];
var i=0;
var rotacion;
function carrusel(){
	document.getElementById("baner").src="../img/baner/"+lista[i];
	i++;
	if(i>=lista.length) i=0;
	rotacion=setTimeout("carrusel()",1000);
}

function avanza(){
	if(rotacion==null) carrusel();
}

function pausa(){
	if(rotacion!=null){
		clearTimeout(rotacion);
		rotacion=null;
	}
}

$(document).ready(function(){
	
		carrusel();
	
		$(".imgsocial").mouseover(function(){
			$(this).css("transform","scale(1.5)");
			$(this).css("transition","all 0.5s");
		});
	
		$(".imgsocial").mouseout(function(){
			$(this).css("transform","scale(1)");
			$(this).css("transition","all 0.5s");
		});
		
		$("#imgavanza").click(function(){
			avanza();
		}); 
	
		$("#imgpausa").click(function(){
			pausa();
		});
	
		$(".imgart").mouseover(function(){
			$(this).css("transform","scale(1.1)");
			$(this).css("transition","all 0.5s");
		});
	
		$(".imgart").mouseout(function(){
			$(this).css("transform","scale(1)");
			$(this).css("transition","all 0.5s");
		});
	
});
