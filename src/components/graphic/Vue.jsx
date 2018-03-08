import React, { Component } from 'react'
import '../../css/Flow.css'
import Commit from './Commit'
import * as d3 from 'd3'

const dataset = [[1,3,3,5,6,7],[3,5,8,3,2,6],[9,0,6,3,6,3],[3,4,4,5,6,8],[3,4,5,2,1,8]]

class Vue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: this.props.grid
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
  }

  isRowCommit(row) {
    if (Object.keys(row).length !== 0) { return true }
    return false
  }

  setContext() {
    return d3.select(this.refs.grid).append('svg')  
    .attr("width", 800)
    .attr("height", 600)
  }

  setGrid(context) {
    return context.append('g')
                .selectAll('g')    
                .data(dataset)
                .enter()
                .append('g') //removing
                .selectAll("circle") // these
                .data( (d) => d) //lines
                .enter() //text displays normally
                .append("circle")
                .attr("cx", (d,i,j) => ((i * 100) + 120))
                .attr("cy", (d,i,j) => ((j * 100) + 120))
                .attr("r", 20)
                .style("fill",(d,i,j) => {if (i % 2) { return '#000' } else {return '#6A5ACD'}})
                .append("text")
                .text( (d) => d )
                .attr("font-size", "20px")
                .style('fill', '#fff')
  }

  
  renderCommit(columns) {
    let y = 0
    return columns.map((row) => {
      y += 50
      const styles = {
        develop: '#6A5ACD',
        master: '#1E90FF'
      }
      const margin = {
        marginBottom: y
      }
      return (
          <Commit key={row.commit} rowY={y} commit={row.commit} color={styles[row.branch]}/>
      )
    })
  }
  
  renderGrid() {
    let x = 0
    return this.state.grid.columns.map((columns, i) => {
      x += 200
      return (
        <svg key={columns[i]} width="20vh" height="90vh" x={x} y="0">
          {this.renderCommit(this.state.grid.columns[i])}
        </svg>)
    })
  }

  render() {
    return (
      <div ref='grid' className="App-Graph">
          {/* <svg width="800" height="600">
            {this.renderGrid()}
          </svg> */}
      </div>
    )
  }
}

export default Vue
