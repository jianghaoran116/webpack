const path = require('path')

const entry = require('./webpackConfig/entry')
const output = require('./webpackConfig/output')
const plugins = require('./webpackConfig/plugins')
const loaders = require('./webpackConfig/loaders')
const optimization = require('./webpackConfig/optimization')
const resolve = require('./webpackConfig/resolve')

const config =  (env, argv) => {
  return {
    mode: env,
    devtool: (env=='development'?'cheap-module-eval-source-map':'cheap-module-source-map'),
    entry: entry(env, argv),
    output: output(env, argv),
    module: {
        rules: loaders(env, argv)
    },
    optimization: optimization(env, argv),
    plugins: plugins(env, argv),
    resolve: resolve(env, argv),
  }
}; 

module.exports = (env, argv) => {
  return config(env, argv);
}; 