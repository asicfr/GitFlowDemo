const graph = require('../src/js/graph.js')
const constant = require('./constantsTest.js')


test('graphAddCommit', () => {
    expect(graph.addCommit(constant.graphInit)).toEqual(constant.graphFinale);
})
