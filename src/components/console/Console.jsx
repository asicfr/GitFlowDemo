import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Headers from './Headers'
import Body from './Body'
import Input from './Input'

class Console extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arrayText: [],
      historyCommand: []
    }
  }

  componentWillReceiveProps(newProps) {
    this.state.arrayText.push(newProps.command)
  }

  handleConsole = (textValue) => {
    this.state.historyCommand.push(textValue)
    this.props.onConsole(textValue)
  }

  render() {
    return (
      <div className="App-Console">
        <Headers />
        <Body data={this.state.arrayText} />
        <Input data={this.state.historyCommand} onInput={this.handleConsole} />
      </div>
    )
  }
}

Console.propTypes = {
  onConsole: PropTypes.func
}

Console.defaultProps = {
  onConsole: () => {}
}

export default Console
