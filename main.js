var text = "body{color:red;}"


var result = `/* 
 * 面试官你好，我是林良涛
 * 只用文字作做自我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */
*{
  transition: all 1s;
}
html{
  background: rgb(222,222,222);
  font-size:16px;
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
    code.innerHTML =
     Prism.highlight(code.innerHTML, Prism.languages.css);
    styleTag.innerHTML = result.substring(0,n)
    if(n >= result.length){
        window.clearInterval(id)
    }
},10)