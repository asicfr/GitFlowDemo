import React, {Component} from 'react'
import '../../css/Flow.css'

export class Vue extends Component {

    constructor(props) {
        super(props)
        this.state = {
            graph: this.props.graph
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            graph: newProps.graph
        })
        
    }

    fnGraphWhoisBranch (c, m, d){
        if (c === m & c === d) {
            return 'master & develop'
        } else if (c === m) {
            return 'master'
        } else if (c  === d){
            return 'develop'    
        } 
}

    fnGraph() {
        return (
            <div>
                <div className='branch feature'>
                    <div className='trait'/>
                    <h1>Feature</h1> 
                </div>
                <div className='branch develop'>
                    <div className='trait'/>
                    <h1>Develop</h1> 
                </div>
                <div className='branch release'>
                    <div className='trait'/>
                    <h1>Release</h1> 
                </div>
                <div className='branch master'> 
                    <div className='trait'/>
                    <h1>Master</h1> 
                </div>
                <div className='branch hotfix'> 
                    <div className='trait'/>
                    <h1>Hotfix</h1> 
                </div>
            </div>
        )
    }
    
    render() {
        const s = JSON.stringify(this.state.graph)
        const graphRender =  this.fnGraph()
       /* return (
            <div className='App-Graph'>
                <p>{s}</p>
                <div className='Flow'>
                    {graphRender}
                </div>
            </div>
        )*/
        return (
            <div className='App-Graph'>
               {graphRender}
            </div>
        )
    }
}

export default Vue
