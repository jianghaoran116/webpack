const loaderUtils = require('loader-utils');

module.exports = function(source) {
	return source.replace('hello', 'jhr loader');
}