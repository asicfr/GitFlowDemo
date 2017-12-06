const controller = require('../src/js/controller.js')
const constant = require('./constantsTest.js')




test('git init', () => {
    expect(controller.init()).toEqual(constant.graphInit);
})

test('git commit', () => {
    expect(controller.dataControl("git commit", constant.graphInit)).toEqual({graph: constant.graphFinale, command: "git commit"});
})

test('git invalid command', () => {
    expect(controller.dataControl("a", constant.graphInit)).toEqual({graph: constant.graphInit, command: "Invalid Command"});
})

test('git invalid command 2', () => {
    expect(controller.dataControl("git yolo", constant.graphInit)).toEqual({graph: constant.graphInit, command: "Invalid Command"});
})

test('git push', () => {
    expect(controller.dataControl("git push",constant.graphFinale)).toEqual(({graph: constant.graphPush, command: "git push"}));
})