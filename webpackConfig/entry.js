const path = require('path')

const entry = (env, argv) => {
    return {
        index: path.resolve(__dirname, '../src/index.js')
    }
}
module.exports = (env, argv) => {
    return entry(env, argv)
}