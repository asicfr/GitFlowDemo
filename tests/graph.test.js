const graph = require('../src/js/graph.js')

const graphInit = {
    tree: ['C1'],
    master: ""
}

const graphFinale = {
    tree: [
        'C1', 'C2'
    ],
    master: ""
}

test('graph', () => {
    expect(graph.init()).toEqual(graphInit);
})

test('graph', () => {
    expect(graph.addCommit(graphInit)).toEqual(graphFinale);
})
