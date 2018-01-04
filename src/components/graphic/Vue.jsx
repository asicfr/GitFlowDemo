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

    branchCommit (graph, nameBranch) {
        let margin = 8
        return graph.tree.map((c, i) => {
            if(c.branch.includes(nameBranch)) {
                const divStyle = {
                    marginTop: margin + '%'
                }
                margin += 4
                return (
                    <div style={divStyle} className='commit' key={i}>
                        <div className='commitText'>{c.commit}</div>
                    </div>
                )
            }
            return
        })
    }

    fnGraph() {
        const arrayBranch = Object.entries(this.state.graph.branch)
        return arrayBranch.map((branch, i) => {
            const nameBranch = branch[0]
            const nameClass = 'branch ' + nameBranch 
            const divStyle = {
                marginTop: 0 + '%'
            }
            return (
                <div className={nameClass} key={i}>
                    <div className='trait'></div>   
                    <h1>{nameBranch}</h1> 
                    <div style={divStyle}></div>
                    {this.branchCommit(this.state.graph, nameBranch)}
                </div>
            )
        })
    }
    
    render() {
        console.log(this.state.graph)
        const graphRender =  this.fnGraph()
        return (
            <div className='App-Graph'>
               {graphRender}
            </div>
        )
    }
}

export default Vue
