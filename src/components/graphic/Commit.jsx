import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium, { StyleRoot } from 'radium'
import { zoomIn } from 'react-animations'
import LineTo from 'react-lineto'


class Commit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commit: this.props.nameCommit,
      infoCommit: this.props.infoCommit,
      branches: this.props.branches
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      branches: newProps.branches
    })
  }

  circle = commit => (
    <div className="circle__inner">
      <div className="circle__wrapper">
        <div className="circle__content">{commit}</div>
      </div>
    </div>)

  badge = branches => Object.keys(branches).map((branch) => {
    if (branches[branch].commit === this.state.commit) {
      return (
        <div key={branch} className="badge" >{branch}</div>
      )
    }
  })

  render() {
    const styles = {
      zoomIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(zoomIn, 'bounceInDown')
      },
      row: {
        display: 'flex',
        justifyContent: 'center'
      },
      master: {
        marginLeft: '20vh',
        background: '#B3E5FC'
      },
      develop: {
        marginRight: '20vh',
        background: '#E1BEE7'
      },
      feature: {
        marginRight: '40vh',
        background: '#C8E6C9'
      },
      release: {
        marginRight: '0vh',
        background: '#FFF9C4'
      },
      hotfix: {
        marginLeft: '40vh',
        background: '#ffcdd2'
      }
    }
    const branch = this.state.infoCommit.branches[0].split('/')
    return (
      <div style={styles.row}>
        <StyleRoot>
          <div className="circle" style={{ ...styles.zoomIn, ...styles[branch[0]] }}>
            {this.circle(this.state.commit)}
            {this.badge(this.state.branches)}
          </div>
        </StyleRoot>
      </div>
    )
  }
}

Commit.propTypes = {
  nameCommit: PropTypes.string.isRequired,
  infoCommit: PropTypes.shape({
    parents: PropTypes.arrayOf(PropTypes.string),
    childs: PropTypes.arrayOf(PropTypes.string),
    otherParents: PropTypes.arrayOf(PropTypes.string),
    branches: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
}

export default Commit
