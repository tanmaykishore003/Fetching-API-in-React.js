
import { Component } from 'react'

export class ComponentA extends Component {

    constructor() {
        super();
        this.state = {
            name: "ComponentA",
            data: [],
            loading: true
        }

    }


    componentDidMount() {
        const fetchData = async () => {
            const response = await fetch("https://fakerapi.it/api/v1/persons");
            const result = await response.json();

            this.setState({ data: result.data, loading: false })
        }

        fetchData()
    }

    render() {
        if(this.state.loading) {
            return <h1 className='d-flex justify-content-center align-items-center'>Loading...</h1>
        }
        return (
            <>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Firstname</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">email</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((person, index) => (
                            <tr key={index}>
                                <th scope="row">{person.id}</th>
                                <td>{person.firstname}</td>
                                <td>{person.lastname}</td>
                                <td>{person.email}</td>
                                <td>{person.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )
    }
}

export default ComponentA