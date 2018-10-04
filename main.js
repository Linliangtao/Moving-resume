var result = `
body{
    background:#444;
}
`



var n = 0
var id = setInterval(()=>{

    n += 1
    code.innerHTML = result.substring(0,n)
    styleTag.innerHTML = result.substring(0,n)
    console.log('一轮')
    if(n >= result.length){
        window.clearInterval(id)
    }
},100)