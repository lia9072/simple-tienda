

var imgs=new Array("../imagenes/banner1.jpg","../imagenes/banner2.jpg","../imagenes/banner3.jpg","../imagenes/banner4.jpg");
var c=0;

function parpadear() {
    
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);

    document.querySelector("h1").style.color="rgb("+r+","+g+","+b+")";
    setTimeout("parpadear()" , 2000);
}
function carrusel(){ 
    c++;
    if (c>=4){c=0;}    
    document.getElementById("baner").setAttribute("src",imgs[c]);
    document.getElementById("baner").style.opacity='1'
    setTimeout("carrusel()",1000);
}




function ver(n){

    if(n==0){
        document.getElementById("titulo").innerText="Cuidado personal";
        document.querySelector('section').style.backgroundColor = '#9ddfd3';
		document.getElementById("imagen").src="../imagenes/Cuidadopersonal.jpg";
        document.getElementById("texto").innerText= " Desde las más antiguas civilizaciones el hombre ha utilizado como forma de alcanzar mejor a en distintas enfermedades"
    }else if(n==1){
        document.getElementById("titulo").innerText="Para la familia";
        document.querySelector('section').style.backgroundColor = '#bdd2b6';
		document.getElementById("imagen").src="../imagenes/Paralafamilia.jpg";
        document.getElementById("texto").innerText= " Productos de origen vegetal, mineral, animal o en los últimos tiempos sintéticos. ";
    
    }else if(n==2){
        document.getElementById("titulo").innerText="Medicamentos ";
        document.querySelector('section').style.backgroundColor = '#fceef5';
		document.getElementById("imagen").src="../imagenes/Medicamentos.jpg";
        document.getElementById("texto").innerText= "El cuidado de la salud estaba en manos de personas que ejercen la doble funci�n de m�dicos y farmac�uticos. ";
        
    }else if(n==3){
        document.getElementById("titulo").innerText="Emergencias ";
        document.querySelector('section').style.backgroundColor = '#ead3cb';
		document.getElementById("imagen").src="../imagenes/Emergencia.jpg";
        document.getElementById("texto").innerText= "Son en realidad médicos que preparan sus propios remedios curativos, llegando alguno de ellos a alcanzar un gran renombre en su �poca, ";
        
    }else{
        document.getElementById("titulo").innerText="Consultas";  
        document.querySelector('section').style.backgroundColor = '#fcf8e8';      
		document.getElementById("imagen").src="../imagenes/Consultas.jpg";
        document.getElementById("texto").innerText= "Como es el caso del griego Galeno (130-200 d.C.). De él proviene el nombre de la Galnica, como la forma adecuada de preparar, dosificar y administrar los f�rmacos. En la cultura romana exist�an numerosas formas de administrar las sustancias utilizadas para curar enfermedades. ";
        
    }
} 
 

window.addEventListener('DOMContentLoaded', ()=>{
    carrusel();
    parpadear() 
    
})



