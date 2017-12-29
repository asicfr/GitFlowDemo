const functions = {
    feature : require('./flow/feature'),
    release : require('./flow/release')
}

module.exports = (command, graph) => {
    const {words} = command
    const fn = functions[words[2]]
    if (!fn) {
        throw new Error('Invalid command')
    }

    return fn(command, graph)
}