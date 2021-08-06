const color = document.querySelector('#color')
const salida = document.querySelector('#salida')

color.addEventListener('input', ( )  =>  {
    const valor = color.value;
    salida.innerHTML= valor
    salida.style.background = valor
    salida.style.color = '#ffffff'
})
