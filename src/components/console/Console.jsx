import React, {Component} from 'react'
import '../../css/App.css'
import Headers from './Headers'
import Body from './Body'
import Input from './Input'
import analyse from '../../js/analyse.js'

export class Console extends Component {

    constructor(props) {
        super(props)
        this.state = {arrayText: []}
    }

    handleConsole = (textValue) => {
        const command = analyse(textValue)
        console.log(textValue)
        this.state.arrayText.push(textValue)
        this.setState(this.state.arrayText);
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
