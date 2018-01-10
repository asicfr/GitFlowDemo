import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      counter: 0
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      counter: newProps.data.length - 1
    })
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value })
  }

  handleSubmit = (event) => {
    switch (event.key) {
      case 'Enter':
        this.setState({ text: '' })
        this.props.onInput(this.state.text)
        event.preventDefault()
        break

      case 'ArrowUp':
        if (this.props.data.length >= 0 && this.state.counter >= 0) {
          this.setState({
            text: this.props.data[this.state.counter],
            counter: this.state.counter - 1
          })
        }
        break

      default:
        break
    }
  }

  render() {
    return (
      <div className="App-Footer">
        <p>$</p>
        <input type="text" value={this.state.text} onChange={this.handleChange} onKeyDown={this.handleSubmit} />
      </div>
    )
  }
}

Input.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  onInput: PropTypes.func.isRequired
}

export default Input
