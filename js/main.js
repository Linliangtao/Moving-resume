var result = `/* 
 * 面试官你好，我是林良涛
 * 只用文字作做自我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */
/* 首先给所有元素加上过渡效果 */
*{
  transition: all 1s;
}
/* 背景太单调，我们加点背景*/
html{
  color: rgb(222,222,222); background: rgb(0,43,54);
}
#code{
  border: 1px solid #aaa;
  padding: 16px;
}
/* 文字离边框太近了 */
 #code {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 我需要一点代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }



/* 加点 3D 效果呗 */
html{
  perspective: 1000px;
}
#code {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}


/* 好了，我来介绍我自己吧 */
/* 我需要一张白纸 */
#paper{
  width: 100px;
  height:100px;
  background:red;
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
        fn2()
        fn3()
    }
},10)

function fn2(){
  var paper = document.createElement('div')
  paper.id = 'paper'
  document.body.appendChild(paper)
}
function fn3(preResult){
  var result = `
  #paper{
    width: 100px;height:100px;
    background:red;
  }
  `
  var n =0
  var id = setInterval(()=>{
    n += 1
    code.innerHTML = preResult + preresult.substring(0,n)
    code.innerHTML =
     Prism.highlight(code.innerHTML, Prism.languages.css);
    if(n >= result.length){
      window.clearInterval(id)
    }
  },10)
}