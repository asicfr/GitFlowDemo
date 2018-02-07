import controller from '../../src/js/controller'
import constant from '../constants/constanthotfix'


// TEST GIT FLOW

test('hotfix start', () => {
  expect(controller.dataControl('git flow hotfix start fix', constant.hotfixStartIn)).toEqual(constant.hotfixStartOut)
})

test('hotfix stop', () => {
  expect(controller.dataControl('git flow hotfix finish fix', constant.hotfixFinishIn)).toEqual(constant.hotfixFinishOut)
})

