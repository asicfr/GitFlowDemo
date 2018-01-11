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
      const div = <li key={text}><p>{text}</p></li>
      return (
        <li key={this.props.command[i]}><p className="dollars">$</p><p>{this.props.command[i]}</p> {div}</li>
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
