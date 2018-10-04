var result = `
body{
    background:blue;
}
`



var n = 0
var id = setInterval(()=>{

    n += 1
    code.innerHTML = result.substring(0,n)
    console.log('一轮')
    if(n >= result.length){
        window.clearInterval(id)
    }
},200)