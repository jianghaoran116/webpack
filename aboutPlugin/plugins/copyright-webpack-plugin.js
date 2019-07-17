class CopyrightWebpackPlugin {

	apply(compiler) { // compiler可以理解成webpack实例

		compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
			console.log('compiler');
		})

		compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
			debugger;
			// console.log(compilation.assets)
			compilation.assets['copyright.txt']= {
				source: function() {
					return 'copyright by joge'
				},
				size: function() {
					return 21;
				}
			};
			cb();
		})
	}

}

module.exports = CopyrightWebpackPlugin;