var lista=["baner1.jpg","baner2.jpg","baner3.jpg","baner4.jpg"];
var i=0;
var rotacion;
var c=0



function preferencia() {

	// recuperando la colección "chks" (nombre del arreglo de checkbox)
	//var imgs=new Array(7);
	var lista = document.getElementsByName("chks");
	var t = lista.length;

	var s="Los cursos de tu preferencia son:\n";

	for(var i=0;i<=lista.length;i++){
		if(lista[i].checked == true){
			s+=lista[i].value+"\n";
			alert(s);}	
	}


	
}
function ver(n){
	c=n;
	window.document["imagen"].src=imgs[c];
}

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

