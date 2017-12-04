import React, {Component} from 'react'
import gitbash from '../../img/gitbash.png'

export class Headers extends Component {
    render() {
        return (
            <div className="App-Header"><img alt='logo gitbash' src={gitbash}/>
                <p>git: root@gitFlowDemo</p>
            </div>
        )
    }
}

export default Headers;
