import React, { Component } from 'react'
import '../../css/Flow.css'
import Commit from './Commit'
import * as d3 from 'd3'


class Vue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: this.props.grid,
      context: null
    }
  }

  componentDidMount() {
    const context = this.setContext()
    this.setGrid(context)
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      grid: newProps.grid
    })
    this.setGrid(this.state.context)
    console.log(d3.selectAll('circle'))
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

  setGrid(context) {
    return context.append('g')
      .selectAll('g')
      .data(this.state.grid.columns)
      .enter()
      .append('g') // removing
      .selectAll('circle')
      .data(d => d) // lines
      .enter() // text displays normally
      .append('circle')
      .attr('cx', (d, i, j) => (j * 80) + 50)
      .attr('cy', (d, i, j) => (i * 80) + 50)
      .attr('r', (d, i, j) => 20)
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
