import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium, { StyleRoot } from 'radium'
import { zoomIn } from 'react-animations'


class Commit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commit: this.props.nameCommit,
      infoCommit: this.props.others
    }
  }

  circle = commit => (
    <div className="circle__inner">
      <div className="circle__wrapper">
        <div className="circle__content">{commit}</div>
      </div>
    </div>)


  render() {
    const styles = {
      zoomIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(zoomIn, 'bounceInDown'),
        margin: 5
      },
      row: {
        display: 'flex',
        justifyContent: 'center'
      }
    }

    return (
      <div style={styles.row}>
        <StyleRoot>
          <div className="circle" style={styles.zoomIn}>
            {this.circle(this.state.commit)}
          </div>
        </StyleRoot>
      </div>
    )
  }
}

Commit.propTypes = {
  nameCommit: PropTypes.string.isRequired,
  others: PropTypes.shape({
    parents: PropTypes.arrayOf(PropTypes.string),
    childs: PropTypes.arrayOf(PropTypes.string),
    otherParents: PropTypes.arrayOf(PropTypes.string),
    branches: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
}

export default Commit
