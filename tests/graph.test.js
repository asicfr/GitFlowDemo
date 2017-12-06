const graph = require('../src/js/graph.js')
const constant = require('./constantsTest.js')

test('graph', () => {
    expect(graph.init()).toEqual(constant.graphInit);
})

test('graphAddCommit', () => {
    expect(graph.addCommit(constant.graphInit)).toEqual(constant.graphFinale);
})
