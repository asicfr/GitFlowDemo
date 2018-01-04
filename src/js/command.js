module.exports = (command, graph) => {
    const {words} = command
    if(words[0] === 'git') {
       return require('./command/git')(command, graph)
    } else if (words == '') {
        throw new Error('')
    } else {
        throw new Error('Invalid command')
    }
}