import { Component } from 'react'

export class Child extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Biba',
            count: 0
        }
    }

    componentDidMount() {
        console.log('Child did mount')
    }

    componentDidUpdate() {
        console.log('Child did update')
    }

    componentWillUnmount() {
        console.log('Child did unmount')
    }

    render() {
        return (
            <>
                <h2>Child componet</h2>
                <p>{this.state.count}</p>
                <button>Click</button>
            </>
        )
    }
}