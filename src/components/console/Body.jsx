import React, {Component} from 'react'
import '../../css/App.css'

export class Body extends Component {

    consoleText = () => {
        return this.props.data.map((text, i) => {
            return (
                <li key={i}><p className="dollars">$</p><p>{text}</p></li>
            )
        })
    }

    render() {

        const tab = this.consoleText()
        return (
            <div className="App-Body">
                {tab}
            </div>
        )
    }
}

export default Body;
