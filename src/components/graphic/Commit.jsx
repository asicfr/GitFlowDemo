  import React, { Component } from 'react'
  import * as d3 from 'd3'

  class Commit extends Component {

    componentDidMount() {
      const context = this.setContext()
      this.setBackground(context)
      this.setText(context)
    }

    componentWillReceiveProps(newProps) {
      
    }

    setContext() {
      const commit = this.props.commit
      return d3.select(this.refs.arc).append('svg')
        .attr('y', this.props.rowY)
        .attr('height', '50px')
        .attr('width', '50px')
        .attr('id', 'd3-circle')
        .append('g')
        .attr('transform', `translate(25, 25)`)
        .style('fill-opacity', function() {
          if(!commit) {
            return 0
          }
          return 1
        })
    }

    setBackground(context) {
      return context.append('path')
      .datum({ endAngle: this.tau })
      .style('fill', this.props.color)
      .attr('d', this.arc())
    }

    setText(context) {
      return context.append('text')
      .datum({ text: this.props.commit })
      .text(d => d.text)
      .style('fill', '#fff')
      .style('font-size', '15px')
      .style('text-anchor', 'middle')
      .attr('transform', `translate(0, 5)`)
      .attr('d', this.arc())
    }


    tau = Math.PI * 2;

    arc() {
      return d3.arc()
        .innerRadius(0)
        .outerRadius(20)
        .startAngle(0)
    }

    render() {
      return (<svg ref="arc"></svg>)
    }
  }

  export default Commit
