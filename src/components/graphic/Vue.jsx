import React, { Component } from 'react'
import * as d3 from 'd3'
import '../../css/Flow.css'

class Vue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: this.props.grid,
      context: null,
      gBranches: null,
      gGrid: null,
      gPaths: null,
      colorCommit: {
        develop: '#B18BE8',
        master: '#B3E3FF',
        feature: '#4ED1A1',
        release: '#4CD3D6',
        hotfix: '#FC8363'
      }
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
      grid: newProps.grid
    })

    const height = this.state.grid.columns.reduce((a, b) => {
      if (a < b.length) { return b.length }
      return a
    }, 0)
    this.updateGrid(height)
    this.updateBranches(this.state.context)
    this.addPath(height)
  }

  setContext() {
    const context = d3.select(this.refs.grid).append('svg')
      .attr('width', 800)
      .attr('height', 700)

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
      .attr('x', (d, i) => ((i * 800 / this.state.grid.branches.length) + 150 - this.state.grid.branches.length * 25))
      .attr('y', 0)
      .attr('width', 100)
      .attr('height', 30)
      .style('fill', (d => this.state.colorCommit[d]))
      .style('stroke-width', '2')
      .style('stroke', '#000')


    branches.append('text')
      .text((d, i) => this.state.grid.branches[i])
      .attr('x', (d, i) => ((i * 800 / this.state.grid.branches.length) + 200 - this.state.grid.branches.length * 25))
      .attr('y', 20)
      .style('font-size', '15px')
      .style('text-anchor', 'middle')


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
      .style('stroke-width', '2')
      .style('stroke', (d) => { if (d.commit) { return '#000' } })

      // Update
    circle
      .attr('cx', (d, i, j) => ((j * 800 / this.state.grid.branches.length) + 200 - this.state.grid.branches.length * 25))
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
      .attr('x', (d, i, j) => ((j * 800 / this.state.grid.branches.length) + 200 - this.state.grid.branches.length * 25))
      .attr('y', (d, i) => (i * 60) + 85)

      // Exit
    text.exit().remove()


    this.setState({
      gGrid
    })
  }


  getCoordonateParent(d, i, j, heightGrid) {
    if (Object.keys(d).length === 0) { return 0 }

    let coordonate = ''
    d.links.map((parent, indexParent) => {
      const index = this.state.grid.columns.map((columns, indexColumns) => {
        const indexRows = columns.findIndex(rows => rows.commit === parent)
        return {
          indexRows,
          indexColumns
        }
      }).filter(val => val.indexRows !== -1)

      if (indexParent === 0) {
        coordonate += `M ${(index[0].indexColumns * 800 / this.state.grid.branches.length) + 200 - this.state.grid.branches.length * 25} ${index[0].indexRows * 60 / (0.1 * heightGrid) + 85} `
        coordonate += `L ${(j * 800 / this.state.grid.branches.length) + 200 - this.state.grid.branches.length * 25} ${i * 60 / (0.1 * heightGrid) + 85} `
      } else {
        coordonate += `L ${(index[0].indexColumns * 800 / this.state.grid.branches.length) + 200 - this.state.grid.branches.length * 25} ${index[0].indexRows * 60 / (0.1 * heightGrid) + 85} `
      }
    })
    return coordonate
  }


  updateBranches() {
    const g = this.state.gBranches

    const rects = g.selectAll('rect').data(this.state.grid.branches)

    // Enter
    rects.enter().append('rect')
      .attr('width', 100)
      .attr('height', 30)
      .style('stroke-width', '2')
      .style('stroke', '#000')

      // Update
    rects
      .attr('x', (d, i) => ((i * 800 / this.state.grid.branches.length) + 150 - this.state.grid.branches.length * 25))
      .attr('y', 1)
      .style('fill', ((d) => {
        if (d === 'develop' || d === 'master') { return this.state.colorCommit[d] }
        const branche = d.split('/')
        return this.state.colorCommit[branche[0]]
      }))

      // Exit
    rects.exit().remove()

    const text = g.selectAll('text').data(this.state.grid.branches)

    // Enter
    text.enter().append('text')
      .attr('x', (d, i) => ((i * 800 / this.state.grid.branches.length) + 200 - this.state.grid.branches.length * 25))
      .attr('y', 21)
      .style('font-size', '15px')
      .style('text-anchor', 'middle')

      // Update
    text
      .text(d => d)
      .attr('x', (d, i) => ((i * 800 / this.state.grid.branches.length) + 200 - this.state.grid.branches.length * 25))
      .attr('y', 20)

      // Exit
    text.exit().remove()
  }

  addPath(heightGrid) {
    const g = this.state.gPaths

    const gPaths = g.selectAll('g')
      .data(this.state.grid.columns)
    gPaths.enter().append('g')

    const path = gPaths.selectAll('path').data(d => d)

    // Enter
    path.enter().append('path')
      .style('stroke', 'black')
      .style('stroke-width', '2')
      .style('fill', 'none')
      .attr('stroke-dashoffset', 0)

    const totalLength = path.node().getTotalLength()
    // Update
    path

      .attr('stroke-dasharray', `${totalLength} ${totalLength}`)
      .attr('stroke-dashoffset', totalLength)
      .transition()
      .attr('d', (d, i, j) => this.getCoordonateParent(d, i, j, heightGrid))
      .duration(400)
      .ease('linear')
      .attr('stroke-dashoffset', 0)


    // Exit
    path.exit().remove()
    gPaths.exit().remove()
  }

  updateGrid(heightGrid) {
    const g = this.state.gGrid

    const gColumns = g.selectAll('g')
      .data(this.state.grid.columns)

    gColumns.enter().append('g')

    const circle = gColumns.selectAll('circle').data(d => d)

    // Enter
    circle.enter().append('circle')
      .attr('r', () => 18)
      .style('stroke-width', '2')

    // Update
    circle
      .style('fill-opacity', (d) => { if (!d.commit) { return 0 } })
      .attr('cx', (d, i, j) => ((j * 800 / this.state.grid.branches.length) + 200 - this.state.grid.branches.length * 25))
      .attr('cy', (d, i) => (i * 60 / (0.1 * heightGrid)) + 80)
      .style('fill', (d) => {
        console.log(d)
        if (d.branch === undefined) { return '#FFF' }
        if (d.branch === 'develop' || d.branch === 'master') { return this.state.colorCommit[d.branch] }
        const branche = d.branch.split('/')
        return this.state.colorCommit[branche[0]]
      })
      .style('stroke', (d) => { if (d.commit) { return '#000' } })

    // Exit
    circle.exit().remove()

    const text = gColumns.selectAll('text').data(d => d)


    // Enter
    text.enter().append('text')
      .style('text-anchor', 'middle')
      .style('font-size', '15px')

    text
      .text(d => d.commit)
      .attr('x', (d, i, j) => ((j * 800 / this.state.grid.branches.length) + 200 - this.state.grid.branches.length * 25))
      .attr('y', (d, i) => (i * 60 / (0.1 * heightGrid)) + 85)
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
        {/* <svg width="800" height="600">
            {this.renderGrid()}
          </svg> */}
      </div>
    )
  }
}

export default Vue
