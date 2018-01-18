import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium, { StyleRoot } from 'radium'
import { zoomIn } from 'react-animations'
import Badge from 'material-ui/Badge'

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
      <Badge badgeContent={4} color="primary">
        <div className="circle__wrapper">
          <div className="circle__content">{commit}</div>
        </div>
      </Badge>
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
