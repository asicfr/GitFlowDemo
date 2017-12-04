import React, {Component} from 'react'


export class Input extends Component {

    constructor(props) {
        super(props)
        this.state = {text: ''}
    }
        
    handleChange = (event) => {
        this.setState({text: event.target.value})
    }

    handleSubmit = (event) => {
        if (event.key === 'Enter')
        {
            this.setState({text: ''})
            this.props.onInput(this.state.text);  
            event.preventDefault()
        }
    }

    render() {
        return (
            <div className="App-Footer">
                <p>$</p>
                <input type="text" value={this.state.text} onChange={this.handleChange} onKeyPress={this.handleSubmit} />
            </div>
        )
    }
}

export default Input;
