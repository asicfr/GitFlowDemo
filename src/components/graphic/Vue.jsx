import React, { Component } from 'react'
import * as d3 from 'd3'
import '../../css/Flow.css'

class Vue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: this.props.grid,
      context: null,
      gridsvg: null,
      colorCommit: {
        develop: '#b266ff',
        master: '#6666ff'
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
    this.setGrid(this.state.context)
    this.setBranches(this.state.context)
  }

  setContext() {
    const context = d3.select(this.refs.grid).append('svg')
      .attr('width', 800)
      .attr('height', 600)

    this.setState({
      context
    })
    return context
  }

  setBranches(context) {
    const branchesSvg = context.append('g')
      .selectAll('text')
      .data(this.state.grid.branches)
      .enter()

    branchesSvg.append('rect')
      .attr('x', (d, i) => ((i * 800 / this.state.grid.branches.length) + 160))
      .attr('y', 0)
      .attr('width', 80)
      .attr('height', 30)
      .style('fill', (d => this.state.colorCommit[d]))
      .style('filter', 'url(#drop-shadow)')

    branchesSvg.append('text')
      .text((d, i) => this.state.grid.branches[i])
      .attr('x', (d, i) => ((i * 800 / this.state.grid.branches.length) + 200))
      .attr('y', 20)
      .style('font-size', '15px')
      .style('text-anchor', 'middle')
      .style('fill', '#fff')

    return branchesSvg
  }

  setGrid(context) {
    const gridsvg = context.append('g')
      .selectAll('g')
      .data(this.state.grid.columns)
      .enter()
      .append('g') // removing
      .selectAll('text')
      .data(d => d) // lines
      .enter() // text displays normally

    gridsvg.append('circle')
      .style('fill-opacity', (d) => { if (!d.commit) { return 0 } })
      .style('fill', d => this.state.colorCommit[d.branch])
      .attr('cx', (d, i, j) => ((j * 800 / this.state.grid.branches.length) + 200))
      .attr('cy', (d, i) => (i * 60) + 80)
      .attr('r', () => 18)

    gridsvg.append('text')
      .text(d => d.commit)
      .style('text-anchor', 'middle')
      .style('fill', '#fff')
      .style('font-size', '15px')
      .attr('x', (d, i, j) => ((j * 800 / this.state.grid.branches.length) + 200))
      .attr('y', (d, i) => (i * 60) + 85)

    this.setState({
      gridsvg
    })

    return gridsvg
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
