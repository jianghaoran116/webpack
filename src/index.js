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

// import {Stack} from './helpers/dataStructure/Stack'

// function divideBy2(decNumber){

//   var remStack = new Stack(),
//     rem,
//     binaryString = '';

//   while (decNumber > 0){ 
//     rem = Math.floor(decNumber % 2); 
//     remStack.push(rem); 
//     decNumber = Math.floor(decNumber / 2); 
//   }

//   while (!remStack.isEmpty()){ 
//     binaryString += remStack.pop().toString();
//   }

//   return binaryString;
// }

// console.log(divideBy2(10))


// import {Queue} from './helpers/dataStructure/Queue'

// let queue = new Queue()

// queue.enqueue(2)
// queue.print()


// import {PriorityQueue} from './helpers/dataStructure/PriorityQueue'

// let priorityQueue = new PriorityQueue()

// priorityQueue.enqueue(2, 1)
// priorityQueue.enqueue(3, 0)
// priorityQueue.print()

import {DoublyLinkedList} from './helpers/dataStructure/DoublyLinkedList'

let linkedList = new DoublyLinkedList()
linkedList.append(145)
linkedList.append(15)
console.log(linkedList)
console.log(linkedList.toString())
console.log(linkedList.remove(15))
console.log(linkedList.toString())