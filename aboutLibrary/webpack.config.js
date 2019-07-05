const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'dast.js',
		library: 'root',
		libraryTarget: 'umd'
	}
}