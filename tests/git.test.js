import controller from '../src/js/controller'
import constant from './constants/constantgit'

test('git init', () => {
  expect(controller.init()).toEqual(constant.init)
})

test('git commit', () => {
  expect(controller.dataControl('git commit', constant.init)).toEqual(constant.commmitOut)
})

test('git commit bad argument', () => {
  expect(controller.dataControl('git commit yolo', constant.init)).toEqual(constant.initError)
})

test('git checkout', () => {
  expect(controller.dataControl('git checkout master', constant.checkoutInit)).toEqual(constant.checkoutFinale)
})

test('git checkout gitflow', () => {
  expect(controller.dataControl('git checkout feature/yolow', constant.checkoutGitFlowIn)).toEqual(constant.checkoutGitFlowOut)
})

