import controller from '../../src/js/controller'
import constant from '../constants/constantrelease'
// TEST GIT FLOW

test('git flow release start', () => {
  expect(controller.dataControl('git flow release start goku', constant.releaseStartIn)).toEqual(constant.releaseStartOut)
})

test('git flow release stop', () => {
  expect(controller.dataControl('git flow release finish goku', constant.releaseFinishIn)).toEqual(constant.releaseFinishOut)
})

