var result = `
/* 
 * 面试官你好，我是林良涛
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */
*{
  transition: all 1s;
}
html{
  background: #eee;
}
#code{
  border: 1px solid #aaa;
  padding: 16px;
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