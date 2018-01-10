import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../css/App.css'

class Body extends Component {
  componentDidUpdate = () => {
    this.myDiv.scrollTop = this.myDiv.scrollHeight
  }

  consoleText = () => this.props.data.map((text, i) => (
    <li key={text}><p className="dollars">$</p><p>{text}</p></li>
  ))

  render() {
    const tab = this.consoleText()
    return (
      <div ref={(myDiv) => { this.myDiv = myDiv }} className="App-Body">
        {tab}
      </div>
    )
  }
}

Body.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Body
