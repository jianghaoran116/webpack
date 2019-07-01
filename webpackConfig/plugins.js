const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CleanWebpackPlugin = require('clean-webpack-plugin');

const plugins = (env, argv) => {
    return [

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html')
        }),
		new CleanWebpackPlugin([`dist`], {
            root: path.resolve(__dirname, '../')
        }),
        // new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
    ]
}
module.exports = (env, argv) => {
    return plugins(env, argv)
}