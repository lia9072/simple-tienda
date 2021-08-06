const canvas= document.querySelector('#canvas')
const w =  document.body.clientWidth
const h = document.body.clientHeight
canvas.width= w
canvas.height = h


const position = Array(300).join(0).split('')
const ctx = canvas.getContext("2d")
console.log(ctx)
const initmatrix = () => {
    ctx.fillstyle = "#00FF00"
    ctx.fillRect(0 , 0 , w , h)
}

setInterval(initmatrix(), 70)