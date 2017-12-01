import React, {Component} from 'react'
import '../../css/App.css'
import Headers from './Headers'
import Body from './Body'
import Input from './Input'

export class Console extends Component {
    render() {
        return (
            <div className="App-Console">
                <Headers/>
                <Body/>
                <Input/>
            </div>
        )
    }
}

export default Console;
