import React, { Component } from 'react'
import DataService from './Servieses/DataService'

class AddData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            title: "",
            author: "",
            date: "",
            description: "",
            newData: []
        }

    }

    HandleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        this.setState({
            [name]: value
        })
    }
    HandleSubmit = (event) => {
        event.preventDefault()
        let data = {
            title: this.state.title,
            author: this.state.author,
            date: this.state.date,
            description: this.state.description
        }
        DataService.createData(data).then()
    }
    render() {
        return (
            <div>
                <h3>
                    Please Add the Information
                </h3>
                <form onSubmit={this.HandleSubmit}>
                    <div>
                        <input type="text" placeholder='Enter the title' name='title' value={this.state.title} onChange={this.HandleInput} />
                    </div>
                    <div>
                        <input type="text" placeholder='Enter auther name' name='author' value={this.state.author} onChange={this.HandleInput} />
                    </div>
                    <div>
                        <input type="date" name='date' value={this.state.date} onChange={this.HandleInput} />
                    </div>
                    <div>
                        <textarea name='description' value={this.state.description} onChange={this.HandleInput} />
                    </div>
                        <button type="submit" >Add</button>
                </form>
            </div>
        )
    }
}

export default AddData
