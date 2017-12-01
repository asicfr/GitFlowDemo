import React, {Component} from 'react'
import '../../css/App.css'

export class Input extends Component {
    render() {
        return (
            <div className="App-Footer">
                <p>$</p>
                <textarea type="text" placeholder/>
            </div>
        )
    }
}

export default Input;
