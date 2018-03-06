import grid from '../src/js/grid'
import constant from './constants/constantgit'
import constantgrid from './constants/constantgrid'

test('grid', () => {
  expect(grid(constantgrid.gridIn, constant.commmitOut, constant.init)).toEqual(constantgrid.gridOut)
})
