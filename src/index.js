import counter from './counter';
import number from './number';
import temp from './temp';

import './index.less'

counter();
number();
temp()

if(module.hot) {
	module.hot.accept('./number', () => {
		document.body.removeChild(document.getElementById('number'));
		number();
	})
	module.hot.accept('./temp', () => {
		temp();
	})
}