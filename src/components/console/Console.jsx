import React, {Component} from 'react'
import Headers from './Headers'
import Body from './Body'
import Input from './Input'

export class Console extends Component {

    constructor(props) {
        super(props)
        this.state = {arrayText: []}
    }

    handleConsole = (textValue) => {
        this.props.onConsole(textValue)
    }
    
    componentWillReceiveProps(newProps) {
        this.state.arrayText.push(newProps.command)
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
