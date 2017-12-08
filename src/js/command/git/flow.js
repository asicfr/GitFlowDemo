const functions = {
    flow : require('./flow/feature')
}

module.exports = (command, graph) => {
    const {words} = command

    const fn = functions[words[1]]
    if (!fn) {
        throw new Error('Invalid command')
    }

    return fn(command, graph)
}