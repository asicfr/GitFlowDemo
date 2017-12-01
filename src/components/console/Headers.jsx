import React, {Component} from 'react'
import '../../css/App.css'
import gitbash from '../../img/gitbash.png'

export class Headers extends Component {
    render() {
        return (
            <div className="App-Header"><img src={gitbash}/>
                <p>git: root@gitFlowDemo</p>
            </div>
        )
    }
}

export default Headers;
