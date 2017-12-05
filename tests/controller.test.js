const controller = require('../src/js/controller.js')

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
    expect(controller.dataControl("a", graphInit)).toEqual({graph: graphInit, command: "Invalid Command"});
})