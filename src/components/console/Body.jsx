import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../css/App.css'


class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accueil: <p>{'Bienvenue dans l\'outil de test GitFlow'}</p>
    }
  }

    componentDidUpdate = () => {
      if (this.state.accueil !== '') {
        this.setState({
          accueil: ''
        })
      }
      const el = this.wrap
      el.scrollTop = el.scrollHeight
    }

    consoleText = () => this.props.console.map((text, i) => {
      const style = {
        currentBranch: {
          float: 'right'
        }
      }
      const div = <li key={text}><p>{text}</p></li>
      let currentBranch

      if (i === Object.keys(this.props.console).length - 1) {
        currentBranch = <p style={style.currentBranch}>({this.props.currentBranch})</p>
      }

      return (
        <li key={this.props.command[i]}><p className="dollars">$</p><p>{this.props.command[i]}</p>{currentBranch}{div}</li>
      )
    })

    render() {
      const body = this.consoleText()
      return (
        <div ref={(c) => { this.wrap = c }} className="App-Body">
          {this.state.accueil}
          {body}
        </div>
      )
    }
}

Body.propTypes = {
  command: PropTypes.arrayOf(PropTypes.string).isRequired,
  console: PropTypes.arrayOf(PropTypes.string).isRequired
}


export default Body
