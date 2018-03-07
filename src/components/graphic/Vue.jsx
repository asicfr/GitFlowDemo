import React, { Component } from 'react'
import '../../css/Flow.css'

class Vue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: this.props.grid
    }
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

  renderCommit(columns) {
    let y = 0
    return columns.map((row) => {
      const styles = {
        develop: '#6A5ACD',
        master: '#1E90FF'
      }
      y += 50
      return (
        <svg key={row} y={y} width="50" height="50">
          {
          this.isRowCommit(row) ?
            <circle key={row.commit} cx="50%" cy="50%" r="40%" fill={styles[row.branch]} stroke="black" strokeWidth="2" />
          :
            <circle fillOpacity="0" cx="50%" cy="50%" r="40%" strokeWidth="3" fill="red" />
        }
          <text x="50%" y="50%" textAnchor="middle" fill="white" dy=".32em">{row.commit}</text>
        </svg>
      )
    })
  }

  renderGrid() {
    console.log(this.state.grid)
    let x = 0
    return this.state.grid.columns.map((columns, i) => {
      x += 270
      return (
        <svg key={columns[i]} width="20vh" height="90vh" x={x} y="0">
          {this.renderCommit(this.state.grid.columns[i])}
        </svg>)
    })
  }

  render() {
    const grid = this.renderGrid()
    return (
      <div className="App-Graph">
        <svg width="100%" height="95%" xmlns="http://www.w3.org/2000/svg">
          {grid}
        </svg>
      </div>
    )
  }
}

export default Vue
