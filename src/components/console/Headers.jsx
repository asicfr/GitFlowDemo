import React, {Component} from 'react'
import gitbash from '../../img/gitbash.png'
import close from '../../img/error.png'
import reduce from '../../img/reduce.png'

export class Headers extends Component {
    render() {
        return (
            <div className="App-Header">
                <img className="imgHeaders imgGit" alt='logo gitbash' src={gitbash}/>
                <p>git: root@gitFlowDemo</p>
                <img className="imgHeaders imgClose" alt='logo close' src={close}/>
                <img className="imgHeaders imgClose" alt='logo reduce' src={reduce}/>
            </div>
        )
    }
}

export default Headers;
