import controller from '../src/js/controller'
import constant from './constants/constantgit'
import constantmerge from './constants/constantmerge'

test('git init', () => {
  expect(controller.init()).toEqual(constant.init)
})

test('git commit', () => {
  expect(controller.dataControl('git commit', constant.init)).toEqual(constant.commmitOut)
})

test('git commit with argument', () => {
  expect(controller.dataControl('git commit -b "ok"', constant.init)).toEqual(constant.initError)
})

test('git checkout', () => {
  expect(controller.dataControl('git checkout master', constant.checkoutInit)).toEqual(constant.checkoutFinale)
})

test('git checkout gitflow', () => {
  expect(controller.dataControl('git checkout feature/yolow', constant.checkoutGitFlowIn)).toEqual(constant.checkoutGitFlowOut)
})

test('git flow list', () => {
  expect(controller.dataControl('git flow feature', constant.checkoutGitFlowIn)).toEqual(constant.checkoutGitFlowOut)
})

test('git merge', () => {
  expect(controller.dataControl('git merge develop', constantmerge.mergeIn)).toEqual(constantmerge.mergeOut)
})

test('git merge', () => {
  expect(controller.dataControl('git merge develop', constantmerge.mergeIn2)).toEqual(constantmerge.mergeOut2)
})

