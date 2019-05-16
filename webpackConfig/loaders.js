const path = require('path')

const loaders = (env, argv) => {
	return [
		{
			test: /\.(png|jpg|gif)$/,
			use: [
				{
					loader: 'url-loader',
					options: {
						limit: 204800,
						name: '[name].[ext]'
					}
				}
			]
		}
	]
}
module.exports = (env, argv) => {
	return loaders(env, argv)
}