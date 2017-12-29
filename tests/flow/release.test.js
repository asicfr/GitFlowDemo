const controller = require('../../src/js/controller.js')
const constant = require('../constants/constantrelease.js')

// TEST GIT FLOW

test('git flow release start', () => {
    expect(controller.dataControl('git flow release start goku', constant.graphReleaseStart)).toEqual({graph: constant.graphReleaseStart2, console: 'git flow release start goku'})
})

test('git flow release stop', () => {
    expect(controller.dataControl('git flow release finish goku', constant.graphReleaseFinsish)).toEqual({graph: constant.graphReleaseFinish2  , console: 'git flow release finish goku'})
})

