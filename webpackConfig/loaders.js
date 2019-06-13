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
		},
		{
			test: /\.(eot|svg|ttf|woff|woff2)\w*/,
			use: [
				{
					loader: 'file-loader'
				}
			]
		},
		{
			test:  /\.less$/,
			use: [
				'style-loader', 
				{
					loader: 'css-loader',
					options: {
						'importLoaders': 2,
						'modules': true,
						'localIdentName': '[hash:base64:5]'
					}
				},
				{
					loader: 'postcss-loader',
					options: {
						ident: 'postcss',
						plugins: (loader) => [
							require('autoprefixer')({
								browsers: ['last 5 versions']
							})
						]
					}
				},
				'less-loader'
			]
		},
		{
			test: /\.css$/,
			use: [
				'style-loader', 
				'css-loader',
				'postcss-loader'
			]
		}
	]
}
module.exports = (env, argv) => {
	return loaders(env, argv)
}