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

    fnGraph() {
        return this.state.graph.tree.map((c, i) => {
            return (
                <li className="bulleCommit" key={i}>{c.commit}</li>
            )
        })
    }
    
    render() {
        const graphRender =  this.fnGraph()
        return (
            <div className='App-Graph'>
                <div className='Flow'>
                    {graphRender}
                </div>
            </div>
        )
    }
}

export default Vue;
