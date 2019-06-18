// import counter from './counter';
// import number from './number';
// import temp from './temp';

// import './index.less'

// counter();
// number();
// temp()

// if(module.hot) {
// 	module.hot.accept('./number', () => {
// 		document.body.removeChild(document.getElementById('number'));
// 		number();
// 	})
// 	module.hot.accept('./temp', () => {
// 		temp();
// 	})
// }
// import React, { Component } from 'react';
// import ReactDom from 'react-dom';

// class App extends Component {
// 	render() {
// 		return <div>Hello World</div>
// 	}
// }

// ReactDom.render(<App />, document.getElementById('root'));

import { add } from './match.js'

add(1, 2)