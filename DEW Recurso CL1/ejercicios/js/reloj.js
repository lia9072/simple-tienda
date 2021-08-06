const hora = () =>{
    const fecha = new Date()
     const tiempo = {
         hora: fecha.getHours(),
         minuto: fecha.getMinutes(),
         segundos: fecha.getSeconds()
     }

     const real = `${tiempo.hora} : ${tiempo.minuto} : ${tiempo.segundos}`

     document.querySelector('.reloj').innerHTML = real
}

setInterval(() => {
    hora()
}, 1000);