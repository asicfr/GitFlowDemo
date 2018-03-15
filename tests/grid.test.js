import grid from '../src/js/grid'
import constant from './constants/constantgit'
import constantgrid from './constants/constantgrid'
import constantfeature from './constants/constantfeature'

test('grid', () => {
  expect(grid(constantgrid.gridIn, constant.commmitOut, constant.init)).toEqual(constantgrid.gridOut)
})

test('grid feature', () => {
  expect(grid(constantgrid.gridInFeature, constantfeature.featureStartOut, constantfeature.featureStartIn)).toEqual(constantgrid.gridOutFeature)
})
