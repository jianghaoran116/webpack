function number() {
	var div = document.createElement('div');
	div.setAttribute('id', 'number');
	div.innerHTML = 4000;
	div.setAttribute('class', 'test')
	document.body.appendChild(div);
}

export default number;