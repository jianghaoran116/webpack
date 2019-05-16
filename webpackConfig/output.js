const path = require('path');

const output = (env, argv) => {
    return {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        chunkFilename: '[name]-[chunkhash:8].js'
    }
}

module.exports = (env, argv) => {
    return output(env, argv)
}