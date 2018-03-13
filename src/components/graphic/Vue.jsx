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
      colorCommit: {
        develop: '#b266ff',
        master: '#6666ff',
        feature: '#66ff66',
        release: '#ffff66',
        hotfix: '#f27272'
      }
    }
  }

  componentDidMount() {
    const context = this.setContext()
    this.setGrid(context)
    this.setBranches(context)
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      grid: newProps.grid
    })
    this.updateGrid(this.state.context)
    this.updateBranches(this.state.context)
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
      .attr('x', (d, i) => ((i * 800 / this.state.grid.branches.length) + 160 - this.state.grid.branches.length * 25))
      .attr('y', 0)
      .attr('width', 80)
      .attr('height', 30)
      .style('fill', (d => this.state.colorCommit[d]))
      .style('stroke-width', '.5')
      .style('stroke', '#000')

    branches.append('text')
      .text((d, i) => this.state.grid.branches[i])
      .attr('x', (d, i) => ((i * 800 / this.state.grid.branches.length) + 200 - this.state.grid.branches.length * 25))
      .attr('y', 20)
      .style('font-size', '15px')
      .style('text-anchor', 'middle')
      .style('fill', '#fff')

    this.setState({
      gBranches
    })
  }

  setGrid(context) {
    const gGrid = context.append('g')
      .attr('id', 'grid')

    const gColumns = gGrid.selectAll('g')
      .data(this.state.grid.columns)
      .enter()
      .append('g')
      .attr('id', 'columns')

    const gRow = gColumns.selectAll('circle')
      .data(d => d)
      .enter()

    gRow.append('circle')
      .attr('id', d => d.commit)
      .style('fill-opacity', (d) => { if (!d.commit) { return 0 } })
      .style('fill', d => this.state.colorCommit[d.branch])
      .attr('cx', (d, i, j) => ((j * 800 / this.state.grid.branches.length) + 200 - this.state.grid.branches.length * 25))
      .attr('cy', (d, i) => (i * 60) + 80)
      .attr('r', () => 18)
      .style('stroke-width', '.5')
      .style('stroke', '#000')


    gRow.append('text')
      .style('text-anchor', 'middle')
      .style('fill', '#fff')
      .style('font-size', '15px')
      .attr('x', (d, i, j) => ((j * 800 / this.state.grid.branches.length) + 200 - this.state.grid.branches.length * 25))
      .attr('y', (d, i) => (i * 60) + 85)
      .text(d => d.commit)


    this.setState({
      gGrid
    })
  }

  updateBranches() {
    const g = this.state.gBranches

    const branches = g.selectAll('text')
      .data(this.state.grid.branches)

    branches.exit()
  }

  updateGrid() {
    const g = this.state.gGrid

    const gColumns = g.selectAll('#columns')
      .data(this.state.grid.columns)

    gColumns.enter().append('g')


    const gRow = gColumns.selectAll('circle')
      .data(d => d)
      .enter()

    gRow.insert('path')
      .attr('d', (d, i, j) => this.getCoordonateParent(d, i, j))
      .style('stroke', 'black')
      .style('stroke-width', '2')
      .style('fill', 'none')


    gRow.append('circle')
      .style('fill-opacity', (d) => { if (!d.commit) { return 0 } })
      .style('fill', d => this.state.colorCommit[d.branch])
      .attr('cx', (d, i, j) => ((j * 800 / this.state.grid.branches.length) + 200 - this.state.grid.branches.length * 25))
      .attr('cy', (d, i) => (i * 60) + 80)
      .attr('r', () => 18)
      .style('stroke-width', '.5')
      .style('stroke', (d) => { if (d.commit) { return '#000' } })


    gRow.append('text')
      .style('text-anchor', 'middle')
      .style('fill', '#fff')
      .style('font-size', '15px')
      .attr('x', (d, i, j) => ((j * 800 / this.state.grid.branches.length) + 200 - this.state.grid.branches.length * 25))
      .attr('y', (d, i) => (i * 60) + 85)
      .text(d => d.commit)
  }

  getCoordonateParent(d, i, j) {
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
        coordonate += `M ${(index[0].indexColumns * 800 / this.state.grid.branches.length) + 200 - this.state.grid.branches.length * 25} ${index[0].indexRows * 60 + 85} `
        coordonate += `L ${(j * 800 / this.state.grid.branches.length) + 200 - this.state.grid.branches.length * 25} ${i * 60 + 85} `
      } else {
        coordonate += `L ${(index[0].indexColumns * 800 / this.state.grid.branches.length) + 200 - this.state.grid.branches.length * 25} ${index[0].indexRows * 60 + 85} `
      }
    })
    return coordonate
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
