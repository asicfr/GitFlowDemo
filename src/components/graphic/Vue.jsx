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
        const master = this.state.graph.branch.master
        const develop = this.state.graph.branch.develop
        
        return this.state.graph.tree.map((c, i) => {
            return (
                <div className="divCommit" key={i}>
                    <p className="branch">{this.fnGraphWhoisBranch(c.commit, master, develop)}</p>
                    <li className="Commit" >{c.commit}</li>
                </div>
            )
        })
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
    }
}

export default Vue
