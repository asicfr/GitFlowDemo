import controller from '../../src/js/controller'
import constant from '../constants/constantfeature'

// TEST GIT FLOW

test('git flow feature start', () => {
  expect(controller.dataControl('git flow feature start yolow', constant.featureStartIn)).toEqual(constant.featureStartOut)
})

test('git flow feature stop', () => {
  expect(controller.dataControl('git flow feature finish yolow', constant.featureFinishIn)).toEqual(constant.featureFinishOut)
})

test('git feature commit', () => {
  expect(controller.dataControl('git commit', constant.featureCommitIn)).toEqual(constant.featureCommitOut)
})
