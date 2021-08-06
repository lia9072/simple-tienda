var imgs=new Array(7);
imgs[0]="../img/banner01.jpg";
imgs[1]="../img/banner02.jpg";
imgs[2]="../img/banner03.jpg";
imgs[3]="../img/banner04.jpg";
imgs[4]="../img/banner05.jpg";
imgs[5]="../img/banner06.jpg";
imgs[6]="../img/banner07.jpg";
var c=0;

function rotacion() {

	window.document["imagen"].src=imgs[c];
	
	c++;
	if(c>=imgs.length)
		c=0;
	setTimeout("rotacion()",2000);
}


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