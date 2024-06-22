
import { Component } from 'react'

export class ComponentB extends Component {

    constructor() {
        super();
        this.state = {
            name: "ComponentB"
        }

        console.log("ComponentB constructor");
    }

    static getDerivedStateFromProps() {
        console.log("ComponentB getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("ComponentB ComponentDidMount");
    }

    render() {
        console.log("ComponentB render");
        return (
            <h1>{this.state.name}</h1>
        )
    }
}

export default ComponentB