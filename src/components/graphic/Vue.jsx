import React, { Component } from 'react'
import * as d3 from 'd3'
import '../../css/Flow.css'

class Vue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      graph: this.props.graph,
      grid: this.props.grid,
      context: null,
      gBranches: null,
      gGrid: null,
      gPaths: null,
      width: 0,
      colorCommit: {
        develop: '#B18BE8',
        master: '#B3E3FF',
        feature: '#4ED1A1',
        release: '#4CD3D6',
        hotfix: '#FC8363'
      },
      scale: 1
    }
  }

  componentDidMount() {
    const context = this.setContext()
    this.setPath(context)
    this.setGrid(context)
    this.setBranches(context)
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      graph: newProps.graph,
      grid: newProps.grid
    })
    const height = this.state.grid.columns.reduce((a, b) => {
      if (a < b.length) { return b.length }
      return a
    }, 0)

    this.updateGrid(height, newProps.grid, newProps.graph.currentCommit)
    this.addPath(height, newProps.grid)
    this.updateBranches(newProps.grid, newProps.graph.currentBranch)
    this.zoomed(this.state.gGrid, newProps.grid)
    this.zoomed(this.state.gBranches, newProps.grid)
    this.zoomed(this.state.gPaths, newProps.grid)
  }

  setContext() {
    const context = d3.select(this.refs.grid).append('svg')
      .attr('width', '103%')
      .attr('height', '95%')
    this.setState({
      context
    })
    return context
  }

  setBranches(context) {
    const gBranches = context.append('g')
      .attr('id', 'branches')

    const branches = gBranches.selectAll('text')
      .data(this.state.grid.branches)
      .enter()

    branches.append('rect')
      .attr('x', (d, i) => ((i * (this.refs.grid.offsetWidth * (1 + (this.state.grid.branches.length * 5 / 100 * (this.state.grid.branches.length * 4 / 25)))) / this.state.grid.branches.length) + (270 + this.state.grid.branches.length * (1 + this.state.scale)) - (this.state.grid.branches.length * 25)))
      .attr('y', 1)
      .attr('width', 100)
      .attr('height', 30)
      .style('fill', (d => this.state.colorCommit[d]))
      .style('stroke-width', '1')

    branches.append('text')
      .text((d, i) => this.state.grid.branches[i])
      .attr('x', (d, i) => ((i * (this.refs.grid.offsetWidth * (1 + (this.state.grid.branches.length * 5 / 100 * (this.state.grid.branches.length * 4 / 25)))) / this.state.grid.branches.length) + (320 + this.state.grid.branches.length * (1 + this.state.scale)) - (this.state.grid.branches.length * 25)))
      .attr('y', 20)
      .style('font-size', '15px')
      .style('text-anchor', 'middle')

    this.zoomed(gBranches, this.state.grid)

    this.setState({
      gBranches
    })
  }


  setPath(context) {
    const gPaths = context.append('g')
      .attr('id', 'paths')

    const gColumns = gPaths.selectAll('g')
      .data(this.state.grid.columns)
      .enter()
      .append('g')

    const path = gColumns.selectAll('path').data(d => d)
    // Enter
    path.enter().append('path')
      .style('stroke', 'black')
      .style('stroke-width', '2')
      .style('fill', 'none')

    // Update
    path
      .attr('d', (d, i, j) => this.getCoordonateParent(d, i, j))

    path.exit().remove()

    this.zoomed(gPaths, this.state.grid)

    this.setState({
      gPaths
    })
  }

  setGrid(context) {
    const gGrid = context.append('g')
      .attr('id', 'grid')


    const gColumns = gGrid.selectAll('g')
      .data(this.state.grid.columns)
      .enter()
      .append('g')

    const circle = gColumns.selectAll('circle').data(d => d)

    // Enter
    circle.enter().append('circle')
      .style('fill-opacity', (d) => { if (!d.commit) { return 0 } })
      .style('fill', d => this.state.colorCommit[d.branch])
      .attr('r', () => 18)
      .style('stroke-width', '1')
      .style('stroke', (d) => { if (d.commit) { return '' } })
      .style('opacity', '0')

    // Update
    circle
      .transition()
      .duration(1000)
      .style('opacity', '1')
      .attr('cx', (d, i, j) => ((j * (this.refs.grid.offsetWidth * (1 + (this.state.grid.branches.length * 5 / 100 * (this.state.grid.branches.length * 4 / 25)))) / this.state.grid.branches.length) + (320 + this.state.grid.branches.length * (1 + this.state.scale)) - (this.state.grid.branches.length * 25)))
      .attr('cy', (d, i) => (i * 60) + 80)

    // Exit
    circle.exit().remove()

    const text = gColumns.selectAll('text').data(d => d)

    // Enter
    text.enter().append('text')
      .style('text-anchor', 'middle')
      .style('font-size', '15px')
      .text(d => d.commit)

    // Update
    text
      .attr('x', (d, i, j) => ((j * (this.refs.grid.offsetWidth * (1 + (this.state.grid.branches.length * 5 / 100 * (this.state.grid.branches.length * 4 / 25)))) / this.state.grid.branches.length) + (320 + this.state.grid.branches.length * (1 + this.state.scale)) - (this.state.grid.branches.length * 25)))
      .attr('y', (d, i) => (i * 60) + 85)

    // Exit
    text.exit().remove()

    this.zoomed(gGrid, this.state.grid)

    this.setState({
      gGrid
    })
  }

  getCoordonateParent(d, i, j, heightGrid, newGrid) {
    if (Object.keys(d).length === 0) { return 0 }

    let coordonate = ''
    d.links.map((parent, indexParent) => {
      const index = newGrid.columns.map((columns, indexColumns) => {
        const indexRows = columns.findIndex(rows => rows.commit === parent)
        return {
          indexRows,
          indexColumns
        }
      }).filter(val => val.indexRows !== -1)

      if (indexParent === 0) {
        coordonate += `M ${(index[0].indexColumns * (this.refs.grid.offsetWidth * (1 + (newGrid.branches.length * 5 / 100 * (newGrid.branches.length * 4 / 25)))) / newGrid.branches.length) + (320 + newGrid.branches.length * (1 + this.state.scale)) - (newGrid.branches.length * 25)} ${index[0].indexRows * 60 / (0.1 * heightGrid * this.state.scale) + 85} `
        coordonate += `L ${(j * (this.refs.grid.offsetWidth * (1 + (newGrid.branches.length * 5 / 100 * (newGrid.branches.length * 4 / 25)))) / newGrid.branches.length) + (320 + newGrid.branches.length * (1 + this.state.scale)) - (newGrid.branches.length * 25)} ${i * 60 / (0.1 * heightGrid * this.state.scale) + 85} `
      } else {
        coordonate += `L ${(index[0].indexColumns * (this.refs.grid.offsetWidth * (1 + (newGrid.branches.length * 5 / 100 * (newGrid.branches.length * 4 / 25)))) / newGrid.branches.length) + (320 + newGrid.branches.length * (1 + this.state.scale)) - (newGrid.branches.length * 25)} ${index[0].indexRows * 60 / (0.1 * heightGrid * this.state.scale) + 85} `
      }
    })
    return coordonate
  }

  zoomed(context, newGrid) {
    const scale = 1 - ((newGrid.branches.length) * 4.2 / 100)
    context
      .attr('transform', `scale(${scale})`)
    this.setState({
      scale
    })
  }

  updateBranches(newGrid, currentBranch) {
    const g = this.state.gBranches

    const rects = g.selectAll('rect').data(newGrid.branches)

    // Enter
    rects.enter().append('rect')
      .attr('width', 100)
      .attr('height', 30)
      .style('stroke-width', '1')
      .style('opacity', '0')

    // Update
    rects
      .transition()
      .duration(1000)
      .style('opacity', '1')
      .attr('x', (d, i) => ((i * (this.refs.grid.offsetWidth * (1 + (newGrid.branches.length * 5 / 100 * (newGrid.branches.length * 4 / 25)))) / newGrid.branches.length) + (270 + newGrid.branches.length * (1 + this.state.scale)) - (newGrid.branches.length * 25)))
      .attr('y', 1)
      .style('fill', ((d) => {
        if (d === 'develop' || d === 'master') { return this.state.colorCommit[d] }
        const branche = d.split('/')
        return this.state.colorCommit[branche[0]]
      }))
      .style('stroke', ((d) => {
        if (d === currentBranch) { return '#000' }
      }))

    // Exit
    rects.exit().remove()

    const text = g.selectAll('text').data(newGrid.branches)

    // Enter
    text.enter().append('text')
      .style('font-size', '15px')
      .style('opacity', '0')

    // Update
    text
      .transition()
      .duration(1000)
      .style('opacity', '1')
      .text(d => d)
      .style('text-anchor', 'middle')
      .style('font-size', ((d) => {
        if (d.length > 20) { return 8 }
        if (d.length > 15) { return 10 }
        if (d.length > 10) { return 12 }
        return 14
      }))
      .attr('x', (d, i) => ((i * (this.refs.grid.offsetWidth * (1 + (newGrid.branches.length * 5 / 100 * (newGrid.branches.length * 4 / 25)))) / newGrid.branches.length) + (320 + newGrid.branches.length * (1 + this.state.scale)) - (newGrid.branches.length * 25)))
      .attr('y', 20)

    // Exit
    text.exit().remove()
  }

  addPath(heightGrid, newGrid) {
    const g = this.state.gPaths

    const gPaths = g.selectAll('g')
      .data(newGrid.columns)
    gPaths.enter().append('g')

    const path = gPaths.selectAll('path').data(d => d)

    // Enter
    path.enter().append('path')
      .style('opacity', '0')
      .style('stroke', 'black')
      .style('stroke-width', '1')
      .style('fill', 'none')

    // Update
    path
      .transition()
      .duration(400)
      .ease('linear')
      .style('opacity', '1')
      .attr('d', (d, i, j) => this.getCoordonateParent(d, i, j, heightGrid, newGrid))

    // Exit
    path.exit().remove()
    gPaths.exit().remove()
  }

  updateGrid(heightGrid, newGrid, currentCommit) {
    const g = this.state.gGrid

    const gColumns = g.selectAll('g')
      .data(newGrid.columns)

    gColumns.enter().append('g')

    const circle = gColumns.selectAll('circle').data(d => d)

    // Enter
    circle.enter().append('circle')
      .attr('r', () => 18)
      .style('opacity', '0')
      .style('stroke-width', '1')

    // Update
    circle
      .style('fill-opacity', (d) => { if (!d.commit) { return 0 } })
      .transition()
      .duration(400)
      .ease('sin')
      .style('opacity', '1')
      .attr('cx', (d, i, j) => ((j * (this.refs.grid.offsetWidth * (1 + (newGrid.branches.length * 5 / 100 * (newGrid.branches.length * 4 / 25)))) / newGrid.branches.length) + (320 + newGrid.branches.length * (1 + this.state.scale)) - (newGrid.branches.length * 25)))
      .attr('cy', (d, i) => (i * 60 / (0.1 * heightGrid * this.state.scale)) + 80)
      .style('fill', (d) => {
        if (d.branch === undefined) { return '#FFF' }
        if (d.branch === 'develop' || d.branch === 'master') { return this.state.colorCommit[d.branch] }
        const branche = d.branch.split('/')
        return this.state.colorCommit[branche[0]]
      })
      .style('stroke', ((d) => {

        if (d.commit === currentCommit) { return '#000' }
      }))

    // Exit
    circle.exit().remove()

    const text = gColumns.selectAll('text').data(d => d)

    // Enter
    text.enter().append('text')
      .style('opacity', '0')
      .style('text-anchor', 'middle')
      .style('font-size', '15px')

    text
      .transition()
      .duration(400)
      .ease('sin')
      .style('opacity', '1')
      .text(d => d.commit)
      .attr('x', (d, i, j) => ((j * (this.refs.grid.offsetWidth * (1 + (newGrid.branches.length * 5 / 100 * (newGrid.branches.length * 4 / 25)))) / newGrid.branches.length) + (320 + newGrid.branches.length * (1 + this.state.scale)) - (newGrid.branches.length * 25)))
      .attr('y', (d, i) => (i * 60 / (0.1 * heightGrid * this.state.scale)) + 85)
      .style('fill', (d) => {
        if (d.branch === undefined) { return '#FFF' }
        return '#000'
      })

    text.exit().remove()

    // Update

    gColumns.exit().remove()
  }

  render() {
    return (
      <div ref="grid" className="App-Graph">
        {/* <svg width="  (this.refs.grid.offsetWidth * (1 + (this.state.grid.branches.length * 4 / 100 * (this.state.grid.branches.length * 4 / 25))))" height="600">
            {this.renderGrid()}
          </svg> */}
      </div>
    )
  }
}

export default Vue
