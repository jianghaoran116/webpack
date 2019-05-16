import logo from './logo.png'
console.log(logo)

let img = new Image()
img.src = logo;

let rootDom = document.getElementById('root');
rootDom.appendChild(img)