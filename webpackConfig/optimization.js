const optimization = (env, argv) => {
    return {
        usedExports: true,
        splitChunks: {
            chunks: "all"
        }
    }
}
module.exports = (env, argv) => {
    return optimization(env, argv)
}