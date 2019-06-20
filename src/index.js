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

import {Stack} from './helpers/dataStructure/Stack'

function divideBy2(decNumber){

  var remStack = new Stack(),
    rem,
    binaryString = '';

  while (decNumber > 0){ 
    rem = Math.floor(decNumber % 2); 
    remStack.push(rem); 
    decNumber = Math.floor(decNumber / 2); 
  }

  while (!remStack.isEmpty()){ 
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

console.log(divideBy2(10))