const graph = require('../src/js/graph.js')

const graphInit = {
    tree: {0: {commit: 'C1', child: {}},
    master: ""
    }
}

const graphFinale = {
    tree: {0: {commit: 'C1', child: {
        commit: 'C1', child: {}
        }
    },
    master: ""
    }
}


test('graph', () => {
    expect(graph.init()).toEqual(graphInit);
})

test('graph', () => {
    expect(graph.addCommit(graphInit)).toEqual(graphFinale);
})
