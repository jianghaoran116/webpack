const path = require('path');

const output = (env, argv) => {
    return {
        path: path.resolve(__dirname, '../bundle'),
        filename: 'js/[name]-[hash:8].js',
        chunkFilename: 'js/[name]-[chunkhash:8].js'
    }
}

module.exports = (env, argv) => {
    return output(env, argv)
}