const controller = require('../src/js/controller.js')
const constant = require('./constantsTest.js')

test('git init', () => {
    expect(controller.init()).toEqual(constant.graphInit)
})

test('git init', () => {
    expect(controller.init()).toEqual(constant.graphInit)
})

test('git commit', () => {
    expect(controller.dataControl('git commit', constant.graphInit)).toEqual({graph: constant.graphFinale, console: 'git commit'})
})

test('git commit bad argument', () => {
    expect(controller.dataControl('git commit yolo', constant.graphInit)).toEqual({graph: constant.graphInit, console: 'Too many words'})
})

test('git checkout', () => {
    expect(controller.dataControl('git checkout master', constant.graphCheckoutInit)).toEqual({graph: constant.graphCheckoutFinale  , console: 'git checkout master'})
})

test('git invalid console', () => {
    expect(controller.dataControl('a', constant.graphInit)).toEqual({graph: constant.graphInit, console: 'Invalid command'})
})

test('git invalid console 2', () => {
    expect(controller.dataControl('git yolo', constant.graphInit)).toEqual({graph: constant.graphInit, console: 'Invalid command'})
})


// TEST GIT FLOW

test('git flow feature start', () => {
    expect(controller.dataControl('git flow feature start yolow', constant.graphFeatureStart)).toEqual({graph: constant.graphFeatureStart2, console: 'git flow feature start yolow'})
})

test('git flow feature stop', () => {
    expect(controller.dataControl('git flow feature finish yolow', constant.graphFeatureFinsish)).toEqual({graph: constant.graphFeatureFinish2  , console: 'git flow feature finish yolow'})
})
