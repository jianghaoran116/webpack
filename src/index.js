import logo from './logo.png'
import style from './index.less'

let rootDom = document.getElementById('root');
let _div = document.createElement("div")

let img = new Image()
img.src = logo;

let _frontP = document.createElement("p")
_frontP.className = "iconfont iconabacus"

let _button = document.createElement("button")
_button.innerHTML = 'add2'
_div.appendChild(_button)
_button.onclick = function() {
  let _div2 = document.createElement("div")
  _div2.className = `${style.test}`
  _div2.innerHTML = 'item1'
  rootDom.appendChild(_div2)
}

_div.className = `${style.modCss}`
_div.appendChild(img)
_div.appendChild(_frontP)

rootDom.appendChild(_div)