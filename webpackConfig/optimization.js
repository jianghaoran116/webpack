const optimization = (env, argv) => {
    return {
        usedExports: true
    }
}
module.exports = (env, argv) => {
    return optimization(env, argv)
}