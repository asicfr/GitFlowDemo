const controller = require('../src/js/controller.js')

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



test('git push', () => {
    expect(controller.dataControl("git push",graphInit)).toEqual(({graph: graphInit, command: "git push"}));
})

test('git init', () => {
    expect(controller.init()).toEqual(graphInit);
})

test('git commit', () => {
    expect(controller.dataControl("git commit", graphInit)).toEqual({graph: graphFinale, command: "git commit"});
})

test('git invalid command', () => {
    expect(controller.dataControl("a", graphInit)).toEqual({graph: graphFinale, command: "Invalid Command"});
})