const functions = {
    flow : require('./git/flow'),
    commit : require('./git/commit'),
    checkout: require('./git/checkout')
}

module.exports = (command, graph) => {
    const {words} = command
    const fn = functions[words[1]]
    if (!fn) {
        throw new Error('Invalid git command')
    }

    return fn(command, graph)
}   