import controller from '../../src/js/controller'
import constant from '../constants/constantfeature'

// TEST GIT FLOW

test('git flow feature start', () => {
  expect(controller.dataControl('git flow feature start yolow', constant.graphFeatureStart)).toEqual({ graph: constant.graphFeatureStart2, console: 'git flow feature start yolow' })
})

test('git flow feature stop', () => {
  expect(controller.dataControl('git flow feature finish yolow', constant.graphFeatureFinsish)).toEqual({ graph: constant.graphFeatureFinish2, console: 'git flow feature finish yolow' })
})

test('git feature commit', () => {
  expect(controller.dataControl('git commit', constant.graphFeatureCommmit1)).toEqual({ graph: constant.graphFeatureCommmit2, console: 'git commit' })
})
