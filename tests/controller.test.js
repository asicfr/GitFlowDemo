const controller = require('../src/js/controller.js')
const constant = require('./constantsTest.js')




test('git init', () => {
    expect(controller.init()).toEqual(constant.graphInit);
})

test('git commit', () => {
    expect(controller.dataControl("git commit", constant.graphInit)).toEqual({graph: constant.graphFinale, command: "git commit"});
})

test('git commit bad argument', () => {
    expect(controller.dataControl("git commit yolo", constant.graphInit)).toEqual({graph: constant.graphInit, command: "Invalid argument"});
})

test('git checkout', () => {
    expect(controller.dataControl("git checkout master", constant.graphCheckoutInit)).toEqual({graph: constant.graphCheckoutFinale  , command: "git checkout master"});
})

test('git invalid command', () => {
    expect(controller.dataControl("a", constant.graphInit)).toEqual({graph: constant.graphInit, command: "Invalid Command"});
})

test('git invalid command 2', () => {
    expect(controller.dataControl("git yolo", constant.graphInit)).toEqual({graph: constant.graphInit, command: "Invalid Command"});
})
