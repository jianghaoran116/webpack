const path = require('path');

const output = (env, argv) => {
    return {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    }
}

module.exports = (env, argv) => {
    return output(env, argv)
}