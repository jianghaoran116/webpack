const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CleanWebpackPlugin = require('clean-webpack-plugin');

const plugins = (env, argv) => {
    return [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html')
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: [`${path.resolve(__dirname, '../')}dist*.*`]
        })
    ]
}
module.exports = (env, argv) => {
    return plugins(env, argv)
}