import logo from './logo.png'

import style from './index.less'
console.log(logo)

let img = new Image()
img.src = logo;

let _div = document.createElement("div")
_div.className = `${style.modCss}`
_div.appendChild(img)

let rootDom = document.getElementById('root');
rootDom.appendChild(_div)