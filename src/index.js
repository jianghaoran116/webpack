// async function getComponent() {
// 	const { default: _ } = await import(/* webpackChunkName:"lodash" */ 'lodash');
// 	const element = document.createElement('div');
// 	element.innerHTML = _.join(['Dell', 'Lee'], '-');
// 	return element;
// }

// document.addEventListener('click', () =>{
// 	getComponent().then(element => {
// 		document.body.appendChild(element);
// 	});
// })

document.addEventListener('click', () =>{
	import(/* webpackPrefetch: true */ './click.js').then(({default: func})=>{
		func()
	})
})