import React, {Component} from 'react'
import '../../css/App.css'
import Headers from './Headers'
import Body from './Body'
import Input from './Input'
import controller from '../../js/controller.js'

export class Console extends Component {

    constructor(props) {
        super(props)
        this.state = {arrayText: []}
    }

    componentWillReceiveProps(newProps) {
        this.setState({command: newProps.command})
        console.log(this.state.command)
        this.state.arrayText.push(this.state.command)
        this.setState(this.state.arrayText)
    }

    handleConsole = (textValue) => {
        this.props.onConsole(textValue)
    }

    render() {
        return (
            <div className="App-Console">
                <Headers/>
                <Body data={this.state.arrayText}/>
                <Input onInput={this.handleConsole}/>
            </div>
        )
    }
}

export default Console;
