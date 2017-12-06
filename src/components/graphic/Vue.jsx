import React, {Component} from 'react'

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
        return this.state.graph.tree.map((commit, i) => {
            return (
                <li key={i}>{commit}</li>
            )
        })
    }

    render() {
        const graphRender =  this.fnGraph()
        return (
            <div className='App-Graph'>
                {graphRender}
            </div>
        )
    }
}

export default Vue;
