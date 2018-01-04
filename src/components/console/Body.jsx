import React, {Component} from 'react'
import '../../css/App.css'

export class Body extends Component {

    componentDidUpdate = () => {
        const el = this.refs.wrap;
        el.scrollTop = el.scrollHeight
    }
        
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
            <div ref="wrap" className="App-Body">
                {tab}
            </div>
        )
    }
}

export default Body;
